/**
 * Локальный сервер для разработки: проксирует POST /api/send-telegram в Telegram API.
 * Запуск: npm run dev:api (в отдельном терминале от npm run dev).
 * В .env укажите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID (без префикса VITE_).
 */

import http from "node:http";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3001;
const TELEGRAM_API = "https://api.telegram.org/bot";

function loadEnv() {
  try {
    const envPath = join(__dirname, "..", ".env");
    const raw = readFileSync(envPath, "utf8");
    const env = {};
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
    return env;
  } catch {
    return process.env;
  }
}

const env = loadEnv();
const token = env.TELEGRAM_BOT_TOKEN || env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = env.TELEGRAM_CHAT_ID || env.VITE_TELEGRAM_CHAT_ID;
const threadId = env.TELEGRAM_THREAD_ID || env.VITE_TELEGRAM_THREAD_ID;

function parseBody(raw) {
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function sendTelegram(payload) {
  const url = `${TELEGRAM_API}${token}/sendMessage`;
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

const server = http.createServer(async (req, res) => {
  const cors = () => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  };

  if (req.method === "OPTIONS") {
    cors();
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/send-telegram") {
    cors();
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  let body = "";
  for await (const chunk of req) body += chunk;
  const { name = "", company = "", contact = "", task = "" } = parseBody(body);

  if (!token || !chatId) {
    cors();
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Telegram not configured" }));
    return;
  }

  const text = [
    "Новая заявка с сайта Business Increase",
    "",
    `Имя: ${String(name).trim() || "-"}`,
    `Компания: ${String(company).trim() || "-"}`,
    `Контакт: ${String(contact).trim() || "-"}`,
    "",
    "Задача:",
    String(task).trim() || "-",
  ].join("\n");

  const payload = {
    chat_id: chatId,
    text,
    disable_web_page_preview: true,
  };
  if (threadId) {
    const id = Number(threadId);
    if (Number.isFinite(id)) payload.message_thread_id = id;
  }

  try {
    const response = await sendTelegram(payload);
    const data = await response.json().catch(() => ({}));
    cors();
    res.writeHead(response.ok ? 200 : response.status, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(response.ok ? { ok: true } : { error: "Telegram request failed", details: data }));
  } catch (err) {
    cors();
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Server error", message: err.message }));
  }
});

server.listen(PORT, () => {
  console.log(`[dev-api] Telegram proxy: http://localhost:${PORT}/api/send-telegram`);
  if (!token || !chatId) console.warn("[dev-api] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы в .env");
});
