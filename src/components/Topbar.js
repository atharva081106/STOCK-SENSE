"use client";

import { Search, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  
  // Determine title based on route
  let title = "Overview";
  let subtitle = "Detailed information about your inventory";
  
  if (pathname.includes('/products')) {
    title = "Products";
    subtitle = "Manage your inventory items and stock levels";
  } else if (pathname.includes('/operations')) {
    title = "Operations";
    subtitle = "Track deliveries, receipts, and internal transfers";
  } else if (pathname.includes('/settings')) {
    title = "Settings";
    subtitle = "Configure your StockSense application";
  } else if (pathname.includes('/profile')) {
    title = "Profile";
    subtitle = "Manage your user account";
  }

  return (
    <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 0.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 600 }}>{title}<br/><span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{subtitle}</span></h1>
      </div>
      
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }} className="hide-on-mobile">
          <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" className="form-input" placeholder="Search..." style={{ paddingLeft: '2rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '20px', width: '200px', border: 'none', boxShadow: 'var(--shadow-sm)' }} />
        </div>
        
        <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', boxShadow: 'var(--shadow-sm)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}>
          <Bell size={16} color="var(--text-primary)" />
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: 'var(--success)', color: 'white', fontSize: '0.5rem', padding: '2px 4px', borderRadius: '10px', fontWeight: 'bold' }}>2</span>
        </button>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem', marginLeft: '0.25rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <img src="https://i.pravatar.cc/100" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}
