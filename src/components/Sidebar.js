"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Package, Settings, User, LogOut, ArrowDownToLine, Truck, SlidersHorizontal, History } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Receipts", href: "/receipts", icon: ArrowDownToLine },
    { name: "Deliveries", href: "/deliveries", icon: Truck },
    { name: "Adjustments", href: "/adjustments", icon: SlidersHorizontal },
    { name: "History", href: "/history", icon: History },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="sidebar">
      {/* Top Section */}
      <div style={{ background: 'var(--bg-sidebar)', borderRadius: '24px', padding: '1.5rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, marginBottom: '0.5rem' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <img src="/logo.jpg" alt="StockSense" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }} />
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', alignItems: 'center' }}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                title={item.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '16px',
                  color: isActive ? 'var(--accent-dark)' : 'rgba(255, 255, 255, 0.6)',
                  background: isActive ? 'white' : 'transparent',
                  transition: 'all var(--transition-fast)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div style={{ background: 'var(--bg-sidebar)', borderRadius: '24px', padding: '1rem 0.5rem', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => signOut({ callbackUrl: '/login' })}
          title="Logout"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '16px',
            color: 'rgba(255, 255, 255, 0.6)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--danger)'; e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'; e.currentTarget.style.background = 'transparent'; }}
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}
