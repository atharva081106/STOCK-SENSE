"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    setError(null);
    setEmail("admin@stocksense.com");
    setPassword("password123");
    
    try {
      // Seed the database with demo data first
      await fetch("/api/seed-demo", { method: "POST" });
      
      const result = await signIn("credentials", {
        email: "admin@stocksense.com",
        password: "password123",
        redirect: false,
      });

      if (result.error) {
        setError("Demo login failed");
        setLoading(false);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Failed to initialize demo data");
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '100vh', background: 'var(--bg-app)' }}>
      <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
        
        {/* Decorative Glow */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '100px', height: '100px', background: 'var(--accent-purple)', filter: 'blur(50px)', opacity: 0.3, borderRadius: '50%' }}></div>

        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 700, cursor: 'pointer' }}>StockSense</h1>
          </Link>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome back! Please login to your account.</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)', position: 'relative', zIndex: 1 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ position: 'relative', zIndex: 1 }}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="admin@stocksense.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label className="form-label">Password</label>
              <a href="#" style={{ fontSize: '0.875rem' }}>Forgot password?</a>
            </div>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', height: '48px', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
          <span style={{ padding: '0 1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
        </div>

        <button 
          type="button" 
          onClick={handleDemoLogin} 
          disabled={loading} 
          className="btn" 
          style={{ width: '100%', height: '48px', background: 'var(--bg-app)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', position: 'relative', zIndex: 1, transition: 'all 0.2s', opacity: loading ? 0.7 : 1 }}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--border-color)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-app)'}
        >
          Login with Demo Account
        </button>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', position: 'relative', zIndex: 1 }}>
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}
