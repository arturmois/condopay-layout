"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import Sidebar from "./sidebar";
import TopNav from "./top-nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
          <TopNav />
        </header>
        <main className="flex-1 overflow-auto bg-white p-6 dark:bg-[#0F0F12]">
          {children}
        </main>
      </div>
    </div>
  );
}
