"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SnackbarProps = {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
};

const bgColors = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
};

export default function Snackbar({
  message,
  type = "info",
  onClose,
  duration = 3000,
}: SnackbarProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 text-sm text-white rounded-lg shadow-xl backdrop-blur-sm z-50 ${bgColors[type]}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
