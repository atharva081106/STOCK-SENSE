"use client";

import { useState } from "react";
import { ArrowDownToLine, ArrowUpFromLine, GitCompare, FileEdit, Truck, RefreshCcw, ShieldAlert, ArrowUpRight, ArrowDownRight, PackageCheck, Trash2, X } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function OperationsPage() {
  const { operations, addOperation, deleteOperation } = useAppContext();
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOp, setNewOp] = useState({ type: 'Transfer', contact: 'Internal', status: 'Waiting' });

  const tabs = [
    { id: "all", label: "All Operations" },
    { id: "receipts", label: "Receipts" },
    { id: "deliveries", label: "Deliveries" },
    { id: "transfers", label: "Transfers" },
  ];

  const actions = [
    { label: "Receipt", icon: ArrowDownToLine, color: "var(--success)" },
    { label: "Delivery", icon: ArrowUpFromLine, color: "var(--warning)" },
    { label: "Transfer", icon: GitCompare, color: "var(--info)" },
    { label: "Adjust", icon: FileEdit, color: "var(--accent-dark)" },
  ];

  const pendingOps = operations.filter(op => op.status === 'Waiting').length;
  const readyOps = operations.filter(op => op.status === 'Ready').length;

  const handleCreate = (e) => {
    e.preventDefault();
    addOperation({
      ...newOp,
      ref: `OP-${Date.now().toString().slice(-6)}`,
      badge: newOp.status === 'Ready' ? 'badge-success' : 'badge-warning'
    });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this operation?")) {
      deleteOperation(id);
    }
  };

  return (
    <div className="animate-fade-in dashboard-grid" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0.25rem 0' }}>
      
      <div className="dashboard-layout" style={{ flex: 1, display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '1rem', minHeight: 0 }}>
        
        {/* LEFT COLUMN - Data Table */}
        <div className="dashboard-left" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: 0 }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <div className="toggle-group">
              {tabs.map(tab => (
                <button 
                  key={tab.id} 
                  className={"toggle-btn " + (activeTab === tab.id ? 'active' : '')}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {actions.map(action => (
                <button 
                  key={action.label} 
                  className="btn btn-secondary" 
                  style={{ padding: '0.4rem 0.8rem', gap: '0.5rem', borderRadius: '9999px' }}
                  onClick={() => {
                    setNewOp({ ...newOp, type: action.label });
                    setIsModalOpen(true);
                  }}
                >
                  <action.icon size={14} style={{ color: action.color }} />
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          <div className="card" style={{ flex: 1, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 500 }}>Transfer Records</h2>
              <span className="badge badge-neutral" style={{ borderRadius: '9999px' }}>{operations.length} Records</span>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <table className="table">
                <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 10 }}>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem' }}>Reference</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Contact</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Scheduled Date</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Source Document</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {operations.map((op) => (
                    <tr key={op.id} style={{ transition: 'background var(--transition-fast)', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-app)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{op.ref}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{op.contact}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>Today</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>PO000{op.id}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <span className={"badge " + op.badge} style={{ 
                          background: op.badge === 'badge-success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          borderRadius: '6px'
                        }}>
                          {op.status}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                        <button 
                          onClick={() => handleDelete(op.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger)', opacity: 0.7, transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - BENTO CARDS */}
        <div className="dashboard-right" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: 0 }}>
          
          {/* Dark Card - Pending Receipts */}
          <div className="card" style={{ flex: 1, background: '#1E1F26', color: 'white', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Ready to Process</span>
              <PackageCheck size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>{readyOps}</h2>
              <span style={{ color: '#4ADE80', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowUpRight size={14} /> 25%
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>8 ops processed today</p>
            
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', height: '44px' }}>
              <div style={{ flex: '7', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.8)', background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)', display: 'flex', alignItems: 'flex-end', padding: '0.35rem 0.6rem', fontSize: '0.9rem', color: 'white' }}>
                70%
              </div>
              <div style={{ flex: '3', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '0.35rem 0.6rem', color: '#1E1F26', fontSize: '0.9rem', fontWeight: 500 }}>
                30%
              </div>
            </div>
          </div>

          {/* Gradient Card - Deliveries */}
          <div className="card" style={{ flex: 1, background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 50%, #E3C1AF 100%)', color: 'white', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Logistics Health</span>
              <Truck size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>98<span style={{ fontSize: '1.25rem' }}>%</span></h2>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowUpRight size={14} /> 2%
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>On-time delivery rate</p>
            
            <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'white', color: '#B496A6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <RefreshCcw size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>Last sync</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Just now</div>
              </div>
            </div>
          </div>

          {/* Beige Card - Delays */}
          <div className="card" style={{ flex: 1, background: '#F8E9DE', color: '#111', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>Delayed Operations</span>
              <ShieldAlert size={16} color="#666" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>{pendingOps}</h2>
              <span style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowDownRight size={14} /> 3 op
              </span>
            </div>
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '0 0 auto 0' }}>Awaiting vendor confirmation</p>
            
            <button style={{ marginTop: 'auto', background: '#111', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '9999px', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
              Resolve Issues <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Create {newOp.type}</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Contact Name</label>
                <input required type="text" className="form-input" style={{ borderRadius: '8px' }} value={newOp.contact} onChange={e => setNewOp({...newOp, contact: e.target.value})} placeholder="E.g. Vendor A or Warehouse B" />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Operation Type</label>
                  <select className="form-input" style={{ borderRadius: '8px' }} value={newOp.type} onChange={e => setNewOp({...newOp, type: e.target.value})}>
                    <option>Receipt</option>
                    <option>Delivery</option>
                    <option>Transfer</option>
                    <option>Adjust</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Status</label>
                  <select className="form-input" style={{ borderRadius: '8px' }} value={newOp.status} onChange={e => setNewOp({...newOp, status: e.target.value})}>
                    <option>Waiting</option>
                    <option>Ready</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ borderRadius: '9999px' }} onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ borderRadius: '9999px' }}>Save Operation</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
