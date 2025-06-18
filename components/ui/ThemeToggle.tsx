"use client";

import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Switch.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
      className="relative flex w-14 h-8 items-center rounded-full border border-border bg-muted px-1 transition-colors cursor-pointer data-[state=checked]:bg-primary"
    >
      <SunIcon
        className={`w-5 h-5 absolute left-1 transition-opacity duration-200 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{ color: "#d4a743", filter: "drop-shadow(0 0 2px #bfa73e66)" }}
      />
      <MoonIcon
        className={`w-5 h-5 absolute right-1 text-gray-800 dark:text-white transition-opacity duration-200 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
      <Switch.Thumb className="w-6 h-6 rounded-full shadow-sm transition-transform duration-300 transform bg-background border border-border data-[state=checked]:translate-x-6" />
    </Switch.Root>
  );
}
