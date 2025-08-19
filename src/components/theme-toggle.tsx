"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-[#1F1F23]"
    >
      <Sun className="h-5 w-5 text-gray-600 transition-all dark:hidden dark:text-gray-300" />
      <Moon className="hidden h-5 w-5 text-gray-600 transition-all dark:block dark:text-gray-300" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
