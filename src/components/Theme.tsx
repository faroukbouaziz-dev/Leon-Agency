"use client";

import { useState, useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const isDarkModeChosen =
      document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("darkMode="))
        ?.split("=")[1] ?? null;
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return isDarkModeChosen !== null
      ? JSON.parse(isDarkModeChosen)
      : prefersDarkScheme;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.cookie = `darkMode=${darkMode}; path=/; max-age=31536000`;
  }, [darkMode]);

  return <>{children}</>;
}
