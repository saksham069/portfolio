"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ui/ThemeToggle";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold text-foreground">Saksham</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-[var(--primary)]",
                    isActive
                      ? "text-[var(--primary)] underline underline-offset-4 font-semibold"
                      : "text-[var(--muted-foreground)]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block ml-auto pl-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-foreground focus:outline-none"
        >
          {isOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 shadow-md space-y-3 transition-all">
          <ul className="flex flex-col space-y-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-2 py-2 rounded-md transition-colors",
                      isActive
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                        : "text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
