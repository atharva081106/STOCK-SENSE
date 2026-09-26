"use client";

import { User, Mail, Shield } from "lucide-react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  
  const userName = session?.user?.name || "Admin User";
  const userEmail = session?.user?.email || "admin@stocksense.com";
  const userRole = session?.user?.role || "Inventory Manager";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="animate-fade-in" style={{ padding: '0.25rem 0' }}>
      <div className="card" style={{ maxWidth: '600px', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 50%, #E3C1AF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>
            {userInitial}
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{userName}</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{userRole}</p>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue={userName} />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="email" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue={userEmail} disabled />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Role</label>
            <div style={{ position: 'relative' }}>
              <Shield size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" className="form-input" style={{ paddingLeft: '2.5rem', opacity: 0.7 }} defaultValue={userRole} disabled />
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
