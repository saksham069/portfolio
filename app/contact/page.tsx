"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Snackbar from "@/components/Snackbar";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const LOCAL_KEY = "contact-form-data";

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // 🧠 Load form data on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) setForm(JSON.parse(stored));
  }, []);

  // 🧠 Save form data on change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(form));
  }, [form]);

  const validateField = (name: keyof FormState, value: string) => {
    switch (name) {
      case "name":
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (value.length > 50) return "Name can't be longer than 50 characters";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Invalid email address";
        break;
      case "message":
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.length > 1000) return "Message can't exceed 1000 characters";
        break;
    }
    return "";
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    (Object.keys(form) as (keyof FormState)[]).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Live validation
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormState, value),
    }));
  };

  const isFormValid =
    Object.values(validateForm()).length === 0 &&
    Object.values(form).every((v) => v.trim() !== "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSnackbar({ message: "Please fix the errors above", type: "error" });
      return;
    }

    try {
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      setSnackbar({
        message: "Thanks! Your message has been sent 😊",
        type: "success",
      });
      setForm(initialForm);
      localStorage.removeItem(LOCAL_KEY);
      setErrors({});
    } catch {
      setSnackbar({ message: "Oops! Something went wrong.", type: "error" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-lg px-4 py-24 text-left space-y-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Get in Touch</h1>
      <p className="text-muted-foreground">
        Want to collaborate, chat, or just say hi? Fill out the form below or
        email me at{" "}
        <a
          href="mailto:sakshamarorax02@gmail.com"
          className="text-primary hover:underline"
        >
          sakshamarorax02@gmail.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          Send Message
        </button>
      </form>

      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
        />
      )}
    </motion.section>
  );
}
