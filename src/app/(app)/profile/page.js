"use client";

import { User, Mail, Shield } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="animate-fade-in">
      <div className="topbar">
        <div>
          <h1 style={{ fontSize: '1.75rem', margin: 0 }}>My Profile</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Manage your account settings</p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '600px', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
            JD
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>John Doe</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Inventory Manager</p>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue="John Doe" />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="email" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue="manager@stocksense.com" />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Role</label>
            <div style={{ position: 'relative' }}>
              <Shield size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" className="form-input" style={{ paddingLeft: '2.5rem', opacity: 0.7 }} defaultValue="Inventory Manager" disabled />
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button type="button" className="btn btn-primary">Save Profile</button>
            <button type="button" className="btn btn-secondary">Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}
