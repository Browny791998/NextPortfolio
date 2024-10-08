"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`fixed bottom-12 text-xl right-5  p-2 rounded-full dark:border-slate-200 hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] z-50`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? "🌜" : "🌞"}
    </button>
  );
};