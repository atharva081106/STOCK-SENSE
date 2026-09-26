"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Package, TrendingUp, ShieldCheck, Zap, Database, Globe, Play, CheckCircle2 } from "lucide-react";

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
            <Link href="/dashboard" style={{ background: '#1E1F26', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'transform 0.2s, background 0.2s' }} onMouseOver={e=>{e.target.style.transform='scale(1.05)'; e.target.style.background='#000'}} onMouseOut={e=>{e.target.style.transform='scale(1)'; e.target.style.background='#1E1F26'}}>
              Go to App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ flex: 1, paddingTop: '7.5rem' }}>
        
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div className="animated-grid-bg"></div>
          
          <div style={{ background: 'rgba(126, 135, 186, 0.1)', color: '#7E87BA', padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1 }}>
            <Zap size={14} /> Introducing StockSense 2.0 for India
          </div>
          
          <h1 style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '2.5rem', letterSpacing: '-0.04em', color: '#1E1F26', maxWidth: '900px', position: 'relative', zIndex: 1 }}>
            Inventory Management, <br />
            <span className="text-shimmer-glow">beautifully refined.</span>
          </h1>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/dashboard" style={{ background: '#1E1F26', color: 'white', padding: '1.25rem 2.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'transform 0.2s', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} onMouseOver={e=>e.target.style.transform='translateY(-2px)'} onMouseOut={e=>e.target.style.transform='translateY(0)'}>
              Start for Free <ArrowRight size={18} />
            </Link>
          </div>
          
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888' }}>No credit card required • 14-day free trial</p>

          {/* Dashboard Image Placeholder */}
          <div style={{ marginTop: '4rem', width: '100%', maxWidth: '1000px', height: '500px', background: '#FAFAFA', borderRadius: '24px', border: '2px dashed #E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontWeight: 600, fontSize: '1.25rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
            Your Dashboard Image Placeholder
          </div>
          
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

        {/* Features Bento Grid */}
        <section id="features" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="aurora-bg" style={{ top: '30%' }}></div>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#1E1F26' }}>Everything you need to scale.</h2>
            <p style={{ fontSize: '1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>Powerful features packed into an incredibly intuitive interface. Built specifically to handle complex supply chains with ease.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', position: 'relative', zIndex: 1 }}>
            {/* Large Card */}
            <div className="framer-card magic-border-beam" style={{ gridColumn: 'span 2', background: 'white', borderRadius: '20px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(126, 135, 186, 0.1)', color: '#7E87BA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={24} />
                </div>
              </div>
              
              {/* Micro-illustration: Mini Bar Chart */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '0.75rem', padding: '1rem 0', opacity: 0.8 }}>
                {[30, 70, 45, 90, 65, 80, 50, 100, 40].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: h > 75 ? 'linear-gradient(to top, #7E87BA, #B496A6)' : '#F0F2F5', borderRadius: '4px' }}></div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Real-time Operations Analytics</h3>
                <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.9rem', maxWidth: '90%' }}>Instantly track your stock levels, incoming receipts, and outbound deliveries in real-time. No more waiting for end-of-day reports.</p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="framer-card magic-border-beam" style={{ background: '#1E1F26', color: 'white', borderRadius: '20px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', overflow: 'hidden' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Database size={20} />
              </div>
              
              {/* Micro-illustration: Database Stack */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center', padding: '0.5rem 0' }}>
                {[1, 2, 3].map((layer) => (
                  <div key={layer} style={{ height: '12px', background: layer === 1 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.1)', borderRadius: '4px', width: layer === 1 ? '80%' : layer === 2 ? '100%' : '60%', border: '1px solid rgba(255,255,255,0.1)' }}></div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Secure Cloud</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontSize: '0.9rem' }}>100% cloud-based architecture ensuring your data is backed up and safe.</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="framer-card magic-border-beam" style={{ background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 100%)', color: 'white', borderRadius: '20px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', overflow: 'hidden', position: 'relative' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <Globe size={20} />
              </div>
              
              {/* Micro-illustration: Abstract Network Nodes */}
              <div style={{ position: 'absolute', right: '-20px', top: '20%', width: '150px', height: '150px', opacity: 0.3 }}>
                <div style={{ position: 'absolute', top: '20%', left: '20%', width: '12px', height: '12px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }}></div>
                <div style={{ position: 'absolute', top: '70%', left: '40%', width: '16px', height: '16px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }}></div>
                <div style={{ position: 'absolute', top: '40%', right: '20%', width: '8px', height: '8px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }}></div>
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <line x1="25%" y1="25%" x2="45%" y2="75%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="45%" y1="75%" x2="75%" y2="45%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Multi-Warehouse</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, fontSize: '0.9rem' }}>Manage stock across multiple locations seamlessly.</p>
              </div>
            </div>

            {/* Large Card 2 */}
            <div className="framer-card magic-border-beam" style={{ gridColumn: 'span 2', background: '#F8E9DE', borderRadius: '20px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', overflow: 'hidden' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'white', color: '#D4A373', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} />
              </div>
              
              {/* Micro-illustration: Access Logs UI */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem 0' }}>
                {[1, 2, 3].map((row) => (
                  <div key={row} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', background: 'rgba(255,255,255,0.5)', padding: '0.5rem', borderRadius: '8px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white' }}></div>
                    <div style={{ flex: 1, height: '6px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px' }}></div>
                    <div style={{ width: '40px', height: '12px', background: row === 1 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.05)', borderRadius: '99px' }}></div>
                  </div>
                ))}
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', color: '#1E1F26' }}>Enterprise-Grade Security</h3>
                <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.9rem', maxWidth: '80%' }}>Advanced role-based access control ensures your team only sees what they need to. Complete audit logs track every single movement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ background: '#1E1F26', color: 'white', padding: '6rem 2rem', textAlign: 'center', margin: '4rem 2rem', borderRadius: '32px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Ready to transform your operations?</h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>Join thousands of forward-thinking Indian businesses scaling with StockSense.</p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/dashboard" style={{ background: 'white', color: '#1E1F26', padding: '1rem 2.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s' }} onMouseOver={e=>e.target.style.transform='scale(1.05)'} onMouseOut={e=>e.target.style.transform='scale(1)'}>
              Get Started for Free
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} /> 14-day free trial</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} /> Cancel anytime</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16} /> No setup fees</span>
          </div>
        </section>

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
