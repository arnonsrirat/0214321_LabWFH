"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine initial theme on client mount
    const root = document.documentElement;
    const isDark = 
      root.classList.contains("dark") || 
      localStorage.getItem("theme") === "dark";
    
    console.log("[ThemeToggle] Mounted. Initial isDark:", isDark);
    
    if (isDark) {
      root.classList.add("dark");
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      setTheme("light");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    console.log("[ThemeToggle] Toggle clicked. Current state:", theme);
    
    if (theme === "light") {
      root.classList.add("dark");
      document.body.classList.add("dark"); // Double-safe for some Tailwind wrappers
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      console.log("[ThemeToggle] Switched to dark mode. root classes:", root.className);
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
      console.log("[ThemeToggle] Switched to light mode. root classes:", root.className);
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow"
    >
      {/* Sun Icon */}
      <div
        className={`absolute transition-all duration-500 transform ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      >
        <Sun className="w-5 h-5 text-amber-500" />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute transition-all duration-500 transform ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        <Moon className="w-5 h-5 text-indigo-400" />
      </div>
    </button>
  );
}
