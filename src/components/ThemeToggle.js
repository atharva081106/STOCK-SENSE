"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 24, height: 24 }} />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn"
      title="Toggle Theme"
      style={{
        background: "transparent",
        border: "none",
        color: "var(--text-secondary)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem",
        borderRadius: "8px",
        transition: "all 0.2s"
      }}
      onMouseOver={e => {
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.background = "var(--bg-app)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.color = "var(--text-secondary)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
