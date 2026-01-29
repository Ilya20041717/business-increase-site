/**
 * Serverless-функция (Vercel): принимает данные формы и отправляет сообщение в Telegram.
 * Токен бота задаётся только на сервере (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID).
 */

const TELEGRAM_API = "https://api.telegram.org/bot";

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  cors(res);
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: "Telegram not configured" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const { name = "", company = "", contact = "", task = "" } = body;

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
    const response = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      res.status(response.status).json({ error: "Telegram request failed", details: data });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
}
