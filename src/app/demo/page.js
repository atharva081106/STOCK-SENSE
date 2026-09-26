"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function DemoPage() {
  useEffect(() => {
    // Auto sign-in with demo credentials and redirect to dashboard
    signIn("credentials", {
      email: "admin@stocksense.com",
      password: "password123",
      callbackUrl: "/dashboard",
    });
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#FAFAFA",
      fontFamily: "var(--font-sans, 'Outfit', sans-serif)",
      gap: "1.5rem",
    }}>
      {/* Animated logo pulse */}
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 0 0 8px rgba(126,135,186,0.15)",
        animation: "logoPulse 1.5s ease-in-out infinite",
      }}>
        <img src="/logo.jpg" alt="StockSense" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Spinner */}
      <div style={{
        width: "28px",
        height: "28px",
        border: "3px solid rgba(126,135,186,0.2)",
        borderTop: "3px solid #7E87BA",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />

      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1E1F26", margin: 0 }}>Launching Demo…</p>
        <p style={{ color: "#888", fontSize: "0.875rem", marginTop: "0.35rem" }}>Signing you in as a demo user</p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes logoPulse {
          0%, 100% { box-shadow: 0 0 0 8px rgba(126,135,186,0.15); }
          50%       { box-shadow: 0 0 0 16px rgba(126,135,186,0.05); }
        }
      `}</style>
    </div>
  );
}
