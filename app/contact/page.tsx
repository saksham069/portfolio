"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Snackbar from "@/components/Snackbar";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
  const getInitialForm = (): FormState => {
    if (typeof window === "undefined") return initialForm;
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      return stored ? JSON.parse(stored) : initialForm;
    } catch {
      return initialForm;
    }
  };

  const [form, setForm] = useState<FormState>(getInitialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) setForm(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(form));
  }, [form]);

  const validateField = (name: keyof FormState, value: string) => {
    switch (name) {
      case "name":
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name can't be longer than 50 characters";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email address";
        break;
      case "message":
        if (value.trim().length < 10) return "Message must be at least 10 characters";
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

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof FormState, value),
    }));
  };

  const isFormValid =
    Object.values(validateForm()).length === 0 &&
    Object.values(form).every((v) => v.trim() !== "") &&
    captchaToken;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0 || !captchaToken) {
      setSnackbar({
        message: !captchaToken ? "Please complete the CAPTCHA" : "Please fix the errors above",
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://send.pageclip.co/Wl6bul4IwSx5V7KIt0cgEXca9RjhhcjG/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(form).toString(),
      });

      if (!res.ok) throw new Error();

      setSnackbar({
        message: "Thanks! Your message has been sent 😊",
        type: "success",
      });

      setForm(initialForm);
      localStorage.removeItem(LOCAL_KEY);
      setErrors({});
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch {
      setSnackbar({ message: "Oops! Something went wrong.", type: "error" });
    } finally {
      setIsLoading(false);
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
        Want to collaborate, chat, or just say hi? Fill out the form below or email me at{" "}
        <a href="mailto:sakshamarorax02@gmail.com" className="text-primary hover:underline">
          sakshamarorax02@gmail.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
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
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* hCaptcha */}
        <HCaptcha
          sitekey="fe940762-480e-448a-947c-983c31406344"
          onVerify={setCaptchaToken}
          ref={captchaRef}
          theme="light"
        />

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-primary-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
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
