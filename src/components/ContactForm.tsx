import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(100, "Имя слишком длинное"),
  company: z.string().trim().max(200, "Название компании слишком длинное").optional(),
  contact: z.string().trim().min(1, "Укажите контакт для связи").max(200, "Контакт слишком длинный"),
  task: z.string().trim().min(1, "Опишите задачу").max(2000, "Описание слишком длинное"),
});

type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    contact: "",
    task: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitError("");

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          contact: formData.contact,
          task: formData.task,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string; details?: { description?: string } };
      if (!response.ok) {
        const msg = data?.details?.description || data?.error || "Request failed";
        setSubmitError(msg.includes("initiate") || msg.includes("chat not found")
          ? "Не удалось отправить заявку. Напишите боту в Telegram команду /start и попробуйте снова."
          : msg === "Telegram not configured"
            ? "Сервер не настроен для Telegram. На хостинге добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID."
            : "Не удалось отправить заявку. Проверьте настройки Telegram.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError("Не удалось отправить заявку. Убедитесь, что запущен сервер (npm run dev) и в .env указаны TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-foreground mb-3">Заявка отправлена</h3>
        <p className="text-text-secondary text-body-md">
          Свяжемся с вами в ближайшее время для обсуждения задачи
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-body-sm text-foreground mb-2">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-card border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors ${
              errors.name ? "border-destructive" : "border-border"
            }`}
            placeholder="Ваше имя"
          />
          {errors.name && (
            <p className="mt-2 text-body-sm text-destructive">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-body-sm text-foreground mb-2">
            Компания
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            placeholder="Название компании"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact" className="block text-body-sm text-foreground mb-2">
          Контакт для связи
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-card border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors ${
            errors.contact ? "border-destructive" : "border-border"
          }`}
          placeholder="Telegram, телефон или email"
        />
        {errors.contact && (
          <p className="mt-2 text-body-sm text-destructive">{errors.contact}</p>
        )}
      </div>

      <div>
        <label htmlFor="task" className="block text-body-sm text-foreground mb-2">
          Описание задачи
        </label>
        <textarea
          id="task"
          name="task"
          value={formData.task}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 bg-card border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none ${
            errors.task ? "border-destructive" : "border-border"
          }`}
          placeholder="Расскажите, что хотите автоматизировать"
        />
        {errors.task && (
          <p className="mt-2 text-body-sm text-destructive">{errors.task}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="button-premium w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Отправка..." : "Описать задачу"}
      </button>
      {submitError && (
        <p className="text-body-sm text-destructive text-center">{submitError}</p>
      )}
    </form>
  );
};

export default ContactForm;
