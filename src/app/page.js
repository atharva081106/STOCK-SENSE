"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Package, TrendingUp, ShieldCheck, Zap, Database, Globe, Play, CheckCircle2, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: '50%', y: '-20%' });

  const handleMouseMove = (e) => {
    setMousePos({ x: `${e.clientX}px`, y: `${e.clientY}px` });
  };

  return (
    <div className="spotlight-wrapper" onMouseMove={handleMouseMove} style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y, minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', background: '#FAFAFA', color: '#111', fontFamily: 'var(--font-sans)' }}>
      
      {/* Navigation */}
      <nav style={{ padding: '1.25rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(250, 250, 250, 0.8)', backdropFilter: 'blur(12px)', position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="/logo.jpg" alt="StockSense" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#1E1F26' }}>StockSense</span>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#features" style={{ color: '#666', fontWeight: 500, textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='#666'}>Features</a>
          <a href="#solutions" style={{ color: '#666', fontWeight: 500, textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='#666'}>Solutions</a>
          <a href="#pricing" style={{ color: '#666', fontWeight: 500, textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#111'} onMouseOut={e=>e.target.style.color='#666'}>Pricing</a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/login" style={{ color: '#111', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Log in</Link>
            <Link href="/demo" style={{ background: 'rgba(126,135,186,0.12)', color: '#7E87BA', padding: '0.6rem 1.25rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(126,135,186,0.22)'} onMouseOut={e=>e.currentTarget.style.background='rgba(126,135,186,0.12)'}>
              <MonitorPlay size={15} /> Live Demo
            </Link>
            <Link href="/dashboard" style={{ background: '#1E1F26', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'transform 0.2s, background 0.2s' }} onMouseOver={e=>{e.currentTarget.style.transform='scale(1.05)'; e.currentTarget.style.background='#000'}} onMouseOut={e=>{e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.background='#1E1F26'}}>
              Go to App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ flex: 1, paddingTop: '7.5rem' }}>
        
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div className="animated-grid-bg"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: 'rgba(126, 135, 186, 0.1)', color: '#7E87BA', padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1 }}
          >
            <Zap size={14} /> Introducing StockSense 2.0 for India
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '2.5rem', letterSpacing: '-0.04em', color: '#1E1F26', maxWidth: '900px', position: 'relative', zIndex: 1 }}
          >
            Inventory Management, <br />
            <span className="text-shimmer-glow">beautifully refined.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
          >
            {/* Primary CTA */}
            <Link href="/login" style={{ background: '#1E1F26', color: 'white', padding: '1.1rem 2.25rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
              Start for Free <ArrowRight size={17} />
            </Link>
            {/* Demo CTA */}
            <Link href="/demo" style={{ background: 'white', color: '#1E1F26', padding: '1.1rem 2.25rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1.5px solid rgba(0,0,0,0.1)', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='rgba(126,135,186,0.5)';}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(0,0,0,0.1)';}}>
              <MonitorPlay size={17} color="#7E87BA" /> View Live Demo
            </Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: '#aaa', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
          >
            <span>No credit card required</span>
            <span style={{ color: '#ccc' }}>•</span>
            <span>Demo: instant access, no signup</span>
          </motion.p>

          {/* Dashboard Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            style={{ marginTop: '4rem', width: '100%', maxWidth: '1000px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <img src="/dashboard-preview.png" alt="StockSense Dashboard" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
          </motion.div>
          
        </section>

        {/* Social Proof (Framer Marquee) */}
        <section style={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '3rem 0', background: 'white', overflow: 'hidden' }}>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#888', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '2rem' }}>Trusted by innovative teams across India</p>
          <div className="marquee-container" style={{ opacity: 0.5, filter: 'grayscale(100%)' }}>
            <div className="marquee-track">
              {/* First Set */}
              {['Reliance Retail', 'Tata Motors', 'Flipkart', 'Mahindra Logistics', 'Zomato', 'Swiggy', 'CRED', 'Razorpay'].map((brand, i) => (
                <h2 key={brand + i} style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', padding: '0 2rem' }}>{brand}</h2>
              ))}
              {/* Duplicate Set for Infinite Loop */}
              {['Reliance Retail', 'Tata Motors', 'Flipkart', 'Mahindra Logistics', 'Zomato', 'Swiggy', 'CRED', 'Razorpay'].map((brand, i) => (
                <h2 key={brand + 'dup' + i} style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', padding: '0 2rem' }}>{brand}</h2>
              ))}
            </div>
          </div>
        </section>

        {/* Features - Horizontal Scroll Carousel */}
        <section id="features" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div className="aurora-bg" style={{ top: '30%', left: '30%' }}></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1, padding: '0 2rem' }}
          >
            <span style={{ display: 'inline-block', background: 'rgba(126, 135, 186, 0.1)', color: '#7E87BA', padding: '0.35rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Platform Features</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '0.75rem', color: '#1E1F26', lineHeight: 1.1 }}>Everything you need<br />to scale with confidence.</h2>
            <p style={{ fontSize: '1.05rem', color: '#666', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>Powerful tools that plug directly into your existing workflow. Built for teams that move fast and can't afford downtime.</p>
          </motion.div>

          {/* Scroll Hint */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <ArrowRight size={14} /> Scroll to explore
          </motion.p>

          {/* Carousel Track */}
          <div className="features-carousel" style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', padding: '1.5rem 2rem 2.5rem 2rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', position: 'relative', zIndex: 1 }}>

            {/* Card 1 — Analytics */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              style={{ minWidth: '340px', height: '440px', background: '#1E1F26', borderRadius: '28px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', scrollSnapAlign: 'center', flexShrink: 0, position: 'relative', overflow: 'hidden', color: 'white', boxShadow: '0 25px 50px -12px rgba(30,31,38,0.3)' }}
            >
              {/* Glow orb */}
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(126,135,186,0.4) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(126,135,186,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <TrendingUp size={22} color="#7E87BA" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Real-time Analytics</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>Live dashboards that update the moment inventory changes. No refreshes. No lag. Just truth.</p>
              </div>
              {/* Animated Bar Chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '130px' }}>
                {[40, 65, 50, 88, 60, 95, 72, 100, 55, 80].map((h, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: '6px 6px 2px 2px', background: h > 80 ? 'linear-gradient(to top, #7E87BA, #B496A6)' : 'rgba(255,255,255,0.1)', height: `${h}%`, animation: `barPulse 2.5s ease-in-out ${i * 0.15}s infinite alternate`, transformOrigin: 'bottom' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '0.75rem 1rem', flex: 1 }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10B981' }}>+34%</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Stock Efficiency</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '0.75rem 1rem', flex: 1 }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>99.9%</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Uptime</div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Multi-Warehouse */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              style={{ minWidth: '340px', height: '440px', background: 'linear-gradient(145deg, #7E87BA 0%, #B496A6 60%, #E3C1AF 100%)', borderRadius: '28px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', scrollSnapAlign: 'center', flexShrink: 0, overflow: 'hidden', color: 'white', boxShadow: '0 25px 50px -12px rgba(126,135,186,0.4)' }}
            >
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Globe size={22} color="white" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Multi-Warehouse</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6 }}>Sync stock across every location simultaneously. Transfers, receipts, and adjustments — all unified.</p>
              </div>
              {/* Animated Node Network */}
              <div style={{ flex: 1, position: 'relative', margin: '1.5rem 0' }}>
                {/* Central node */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', background: 'white', borderRadius: '50%', boxShadow: '0 0 0 8px rgba(255,255,255,0.2), 0 0 0 20px rgba(255,255,255,0.08)', zIndex: 2 }} />
                {/* Orbiting nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: '14px', height: '14px', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', transform: `rotate(${deg}deg) translate(70px) rotate(-${deg}deg)`, marginTop: '-7px', marginLeft: '-7px', animation: `orbit 8s linear ${i * 0.5}s infinite`, boxShadow: '0 0 8px rgba(255,255,255,0.5)' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {['Mumbai', 'Delhi', 'Bengaluru', 'Chennai'].map(city => (
                  <div key={city} style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '0.4rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(10px)' }}>{city}</div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — Security */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              style={{ minWidth: '340px', height: '440px', background: '#F8E9DE', borderRadius: '28px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', scrollSnapAlign: 'center', flexShrink: 0, overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}
            >
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <ShieldCheck size={22} color="#D4A373" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em', color: '#1E1F26' }}>Enterprise Security</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>Role-based access, full audit trails, and SOC 2 Type II ready architecture so you stay compliant effortlessly.</p>
              </div>
              {/* Animated Security Log */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { user: 'Rahul V.', action: 'Stock Adjustment', time: 'Just now', ok: true },
                  { user: 'Purva B.', action: 'Product Created', time: '2m ago', ok: true },
                  { user: 'System', action: 'Backup Complete', time: '1h ago', ok: true },
                  { user: 'Unknown', action: 'Login Attempt', time: '3h ago', ok: false },
                ].map((log, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', background: 'rgba(255,255,255,0.7)', padding: '0.6rem 0.75rem', borderRadius: '10px', backdropFilter: 'blur(8px)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: log.ok ? '#10B981' : '#EF4444', flexShrink: 0, boxShadow: log.ok ? '0 0 0 3px rgba(16,185,129,0.2)' : '0 0 0 3px rgba(239,68,68,0.2)', animation: i === 0 ? 'pulse 2s infinite' : 'none' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.8rem', color: '#111', flex: 1 }}>{log.user}</span>
                    <span style={{ fontSize: '0.75rem', color: '#888' }}>{log.action}</span>
                    <span style={{ fontSize: '0.7rem', color: '#bbb', marginLeft: '0.5rem' }}>{log.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 4 — AI Forecasting */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              style={{ minWidth: '340px', height: '440px', background: 'white', borderRadius: '28px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', scrollSnapAlign: 'center', flexShrink: 0, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.06)' }}
            >
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(126,135,186,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Zap size={22} color="#7E87BA" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em', color: '#1E1F26' }}>Smart Forecasting</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>Predict stockouts before they happen. ML-powered demand forecasting that learns your seasonal patterns automatically.</p>
              </div>
              {/* SVG Line Chart */}
              <div style={{ position: 'relative', height: '140px', margin: '1rem 0' }}>
                <svg width="100%" height="140" viewBox="0 0 380 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#7E87BA', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#B496A6', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" style={{ stopColor: '#7E87BA', stopOpacity: 0.15 }} />
                      <stop offset="100%" style={{ stopColor: '#7E87BA', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path d="M0,120 C40,100 80,80 120,70 C160,60 180,50 220,30 C260,10 300,20 380,5" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0,120 C40,100 80,80 120,70 C160,60 180,50 220,30 C260,10 300,20 380,5 L380,140 L0,140 Z" fill="url(#areaGrad)" />
                  {/* Forecast dotted extension */}
                  <path d="M380,5 C410,-5 440,15 470,0" fill="none" stroke="#7E87BA" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" strokeLinecap="round" />
                  {/* Highlighted point */}
                  <circle cx="220" cy="30" r="5" fill="#7E87BA" />
                  <circle cx="220" cy="30" r="10" fill="rgba(126,135,186,0.2)" className="pulse-ring" />
                </svg>
                <div style={{ position: 'absolute', top: '10px', left: '200px', background: '#1E1F26', color: 'white', padding: '0.3rem 0.6rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Predicted peak ↑</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(126,135,186,0.08)', borderRadius: '12px', padding: '0.75rem 1rem', flex: 1 }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#7E87BA' }}>14 days</div>
                  <div style={{ fontSize: '0.75rem', color: '#888' }}>Forecast horizon</div>
                </div>
                <div style={{ background: 'rgba(16,185,129,0.08)', borderRadius: '12px', padding: '0.75rem 1rem', flex: 1 }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10B981' }}>92%</div>
                  <div style={{ fontSize: '0.75rem', color: '#888' }}>Accuracy rate</div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#1E1F26' }}>Tailored for your industry.</h2>
            <p style={{ fontSize: '1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>StockSense adapts to your unique workflow, no matter what you build, move, or sell.</p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Industry 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              style={{ background: '#F8E9DE', padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}>
                <Package size={150} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Retail & E-commerce</h3>
              <p style={{ color: '#555', lineHeight: 1.6 }}>Sync inventory across your D2C store and physical outlets instantly. Never oversell again.</p>
            </motion.div>
            
            {/* Industry 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.1 }}
              style={{ background: 'rgba(126, 135, 186, 0.1)', padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}>
                <Zap size={150} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1E1F26' }}>Manufacturing</h3>
              <p style={{ color: '#555', lineHeight: 1.6 }}>Track raw materials and finished goods with robust Bill of Materials (BOM) management.</p>
            </motion.div>
            
            {/* Industry 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.2 }}
              style={{ background: '#1E1F26', color: 'white', padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.05 }}>
                <Globe size={150} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Wholesale Distribution</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Handle B2B orders with complex tier pricing, bulk shipping, and multi-warehouse routing.</p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: '6rem 2rem', background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#1E1F26' }}>Simple, transparent pricing.</h2>
              <p style={{ fontSize: '1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>No hidden fees or complex tiers. Just straightforward pricing that scales with you.</p>
            </motion.div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {/* Starter Tier */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                style={{ background: '#FAFAFA', border: '1px solid #E5E7EB', borderRadius: '24px', padding: '2.5rem', width: '100%', maxWidth: '350px', display: 'flex', flexDirection: 'column' }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E1F26' }}>Starter</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem', marginTop: '0.5rem' }}>Perfect for small teams just getting started.</p>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#1E1F26', marginBottom: '2rem' }}>₹0<span style={{ fontSize: '1rem', fontWeight: 500, color: '#888' }}>/mo</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#555', fontSize: '0.95rem', flex: 1 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> 1 Warehouse</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> Up to 500 Products</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> Basic Reporting</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> Community Support</li>
                </ul>
                <Link href="/dashboard" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1rem', background: '#FAFAFA', border: '1px solid #1E1F26', color: '#1E1F26', borderRadius: '999px', fontWeight: 600, textDecoration: 'none' }}>Get Started</Link>
              </motion.div>
              
              {/* Pro Tier (Highlighted) */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1.05 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.1 }}
                style={{ background: '#1E1F26', color: 'white', borderRadius: '24px', padding: '2.5rem', width: '100%', maxWidth: '350px', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', position: 'relative' }}
              >
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 100%)', color: 'white', padding: '0.25rem 1rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Most Popular</div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Pro</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '2rem', marginTop: '0.5rem' }}>For growing businesses needing advanced tools.</p>
                <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>₹1,999<span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>/mo</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', flex: 1 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#7E87BA" /> Unlimited Warehouses</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#7E87BA" /> Unlimited Products</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#7E87BA" /> Advanced Analytics & API</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#7E87BA" /> Priority Support</li>
                </ul>
                <Link href="/dashboard" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1rem', background: 'white', color: '#1E1F26', borderRadius: '999px', fontWeight: 600, textDecoration: 'none' }}>Start 14-Day Free Trial</Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          style={{ background: '#1E1F26', color: 'white', padding: '6rem 2rem', textAlign: 'center', margin: '4rem 2rem', borderRadius: '32px' }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Ready to transform your operations?</h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>Join thousands of forward-thinking Indian businesses scaling with StockSense.</p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/login" style={{ background: 'white', color: '#1E1F26', padding: '1rem 2.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>
              Get Started for Free
            </Link>
            <Link href="/demo" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '1rem 2.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid rgba(255,255,255,0.25)', transition: 'background 0.2s, transform 0.2s', backdropFilter: 'blur(8px)' }} onMouseOver={e=>{e.currentTarget.style.background='rgba(255,255,255,0.18)'; e.currentTarget.style.transform='scale(1.05)';}} onMouseOut={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='scale(1)';}}>
              <MonitorPlay size={18} /> View Live Demo
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} /> 14-day free trial</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} /> Cancel anytime</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} /> Demo: instant, no signup</span>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer style={{ padding: '3rem 4rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
          <img src="/logo.jpg" alt="StockSense" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
          <span style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>StockSense</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: '#666' }}>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span style={{ cursor: 'pointer' }}>Contact Sales</span>
        </div>
        <div style={{ fontSize: '0.875rem', color: '#888' }}>
          © 2024 StockSense India. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
