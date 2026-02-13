"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  { label: "Showcase", href: "/showcase" },
  { label: "Docs", href: "/docs" },
  { label: "Templates", href: "/templates" },
  { label: "Enterprise", href: "/enterprise" },
];

export function TopBar() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;

    root.classList.toggle("dark", shouldUseDark);
  }, []);

  function handleThemeToggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary">
            <Image
              src="/api-kit.svg"
              alt="API-Kit logo"
              width={16}
              height={16}
              className="h-5 w-5"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-wide">API-Kit</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition hover:text-foreground ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition hover:bg-accent"
        >
          <Moon className="h-4 w-4 dark:hidden" />
          <Sun className="hidden h-4 w-4 dark:block" />
          Theme
        </button>
      </div>
    </header>
  );
}
