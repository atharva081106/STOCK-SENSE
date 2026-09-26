"use client";

import { useState } from "react";
import { Plus, MapPin, Settings2, ShieldCheck, Database, HardDrive, ArrowUpRight, ShieldAlert } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("warehouses");

  const warehouses = [
    { name: "Main Warehouse", location: "Mumbai, MH", status: "Active" },
    { name: "Production Floor", location: "Bengaluru, KA", status: "Active" },
    { name: "Secondary Storage", location: "Pune, MH", status: "Inactive" },
  ];

  return (
    <div className="animate-fade-in dashboard-grid" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0.25rem 0' }}>
      
      <div className="dashboard-layout" style={{ flex: 1, display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '1.25rem', minHeight: 0 }}>
        
        {/* LEFT COLUMN - Settings Forms */}
        <div className="dashboard-left" style={{ display: 'flex', gap: '1.25rem', minHeight: 0 }}>
          
          {/* Settings Nav */}
          <div style={{ width: '220px', flexShrink: 0 }}>
            <div className="card" style={{ padding: '1rem', height: '100%' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>
                  <button
                    onClick={() => setActiveTab('general')}
                    style={{
                      width: '100%', textAlign: 'left', padding: '0.75rem 1rem',
                      background: activeTab === 'general' ? 'var(--bg-app)' : 'transparent',
                      border: 'none', borderRadius: 'var(--radius-md)',
                      color: activeTab === 'general' ? 'var(--text-primary)' : 'var(--text-secondary)',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem',
                      transition: 'all var(--transition-fast)', fontWeight: activeTab === 'general' ? 600 : 400
                    }}
                  >
                    <Settings2 size={18} /> General
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('warehouses')}
                    style={{
                      width: '100%', textAlign: 'left', padding: '0.75rem 1rem',
                      background: activeTab === 'warehouses' ? 'var(--bg-app)' : 'transparent',
                      border: 'none', borderRadius: 'var(--radius-md)',
                      color: activeTab === 'warehouses' ? 'var(--text-primary)' : 'var(--text-secondary)',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem',
                      transition: 'all var(--transition-fast)', fontWeight: activeTab === 'warehouses' ? 600 : 400
                    }}
                  >
                    <MapPin size={18} /> Warehouses
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Settings Content */}
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
            {activeTab === 'warehouses' && (
              <div className="card" style={{ padding: '2rem', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 500 }}>Warehouses & Locations</h2>
                  <button className="btn btn-primary" style={{ borderRadius: '9999px', padding: '0.4rem 1rem' }}>
                    <Plus size={16} /> Add Location
                  </button>
                </div>

                <div style={{ display: 'grid', gap: '1rem' }}>
                  {warehouses.map((wh, index) => (
                    <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'var(--bg-app)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'white', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 500 }}>{wh.name}</h4>
                          <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>{wh.location}</p>
                        </div>
                      </div>
                      <span className={`badge ${wh.status === 'Active' ? 'badge-success' : 'badge-neutral'}`} style={{ borderRadius: '6px' }}>
                        {wh.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'general' && (
              <div className="card" style={{ padding: '2rem', height: '100%' }}>
                <h2 style={{ fontSize: '1.25rem', margin: '0 0 1.5rem 0', fontWeight: 500 }}>General Settings</h2>
                <div className="form-group" style={{ maxWidth: '400px' }}>
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" style={{ borderRadius: '8px' }} defaultValue="Reliance Retail" />
                </div>
                <div className="form-group" style={{ maxWidth: '400px' }}>
                  <label className="form-label">Default Currency</label>
                  <select className="form-input" style={{ borderRadius: '8px' }} defaultValue="INR (₹)">
                    <option>INR (₹)</option>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
                <button className="btn btn-primary" style={{ marginTop: '1rem', borderRadius: '9999px', padding: '0.6rem 1.5rem' }}>Save Changes</button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN - BENTO CARDS */}
        <div className="dashboard-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minHeight: 0 }}>
          
          {/* Dark Card - DB Storage */}
          <div className="card" style={{ flex: 1, background: '#1E1F26', color: 'white', padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Cloud Storage</span>
              <Database size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>45<span style={{ fontSize: '1.25rem' }}>GB</span></h2>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600 }}>
                / 100GB
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>All backups running normally</p>
            
            <div style={{ marginTop: 'auto' }}>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '45%', height: '100%', background: '#9282FA', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>

          {/* Gradient Card - Profile */}
          <div className="card" style={{ flex: 1, background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 50%, #E3C1AF 100%)', color: 'white', padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Active Profile</span>
              <ShieldCheck size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'auto' }}>
              <img src="https://ui-avatars.com/api/?name=Rahul+Verma&background=fff&color=1E1F26" alt="Profile" style={{ width: '48px', height: '48px', borderRadius: '12px' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>Rahul Verma</h3>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>Admin Account</span>
              </div>
            </div>
            
            <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '0.75rem', borderRadius: '12px', fontSize: '0.875rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
              Manage Access <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Beige Card - System Status */}
          <div className="card" style={{ flex: 1, background: '#F8E9DE', color: '#111', padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>System Health</span>
              <HardDrive size={16} color="#666" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>99.9%</h2>
            </div>
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '0 0 auto 0' }}>All services operational</p>
            
            <div style={{ marginTop: 'auto', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', padding: '0.75rem', borderRadius: '12px', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontWeight: 500 }}>
              <ShieldCheck size={16} /> Latest update installed
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
