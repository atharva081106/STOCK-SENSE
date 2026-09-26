"use client";

import { useState } from "react";
import { Plus, Filter, Trash2, X, Grid, ArrowUpRight, ArrowDownRight, Upload, Box, ShieldAlert } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function ProductsPage() {
  const { products, addProduct, deleteProduct } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProd, setNewProd] = useState({ name: '', sku: '', category: 'Raw Materials', stock: 0, uom: 'kg' });

  const totalValue = products.reduce((acc, curr) => acc + (curr.stock * 1500), 0);
  const outOfStock = products.filter(p => p.stock === 0).length;

  const handleCreate = (e) => {
    e.preventDefault();
    addProduct(newProd);
    setIsModalOpen(false);
    setNewProd({ name: '', sku: '', category: 'Raw Materials', stock: 0, uom: 'kg' });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  return (
    <div className="animate-fade-in dashboard-grid" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0.25rem 0' }}>
      
      <div className="dashboard-layout" style={{ flex: 1, display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '1rem', minHeight: 0 }}>
        
        {/* LEFT COLUMN - Data Table */}
        <div className="dashboard-left" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary" style={{ borderRadius: '9999px', padding: '0.4rem 1rem' }}><Filter size={16} /> Filter</button>
            </div>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)} style={{ borderRadius: '9999px', padding: '0.4rem 1rem' }}>
              <Plus size={16} /> New Product
            </button>
          </div>

          <div className="card" style={{ flex: 1, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 500 }}>Product Inventory</h2>
              <span className="badge badge-neutral" style={{ borderRadius: '9999px' }}>{products.length} Items</span>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <table className="table">
                <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 10 }}>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem' }}>Name</th>
                    <th style={{ padding: '0.75rem 1rem' }}>SKU</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Category</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Stock</th>
                    <th style={{ padding: '0.75rem 1rem' }}>UOM</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} style={{ transition: 'background var(--transition-fast)' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-app)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '8px', overflow: 'hidden', background: 'var(--bg-app)', flexShrink: 0, border: '1px solid var(--border-color)' }}>
                            <img 
                              src={p.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(p.name) + "&background=random"} 
                              alt={p.name} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                          </div>
                          {p.name}
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{p.sku}</td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <span className="badge" style={{ background: 'var(--bg-app)', color: 'var(--text-secondary)', borderRadius: '6px' }}>
                          {p.category}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <span style={{ 
                          fontWeight: 'bold', 
                          color: p.stock < 10 ? 'var(--danger)' : p.stock < 50 ? 'var(--warning)' : 'var(--success)'
                        }}>
                          {p.stock}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{p.uom}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                        <button 
                          onClick={() => handleDelete(p.id)}
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
          
          {/* Dark Card - Total Value */}
          <div className="card" style={{ flex: 1, background: '#1E1F26', color: 'white', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Total Inventory Value</span>
              <Box size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>₹{(totalValue / 100000).toFixed(1)}L</h2>
              <span style={{ color: '#4ADE80', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowUpRight size={14} /> 12%
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>₹{(totalValue / 120000).toFixed(1)}L last month</p>
            
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
              <div style={{ flex: 1, height: '6px', background: 'white', borderRadius: '3px' }}></div>
              <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px' }}></div>
              <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}></div>
            </div>
          </div>

          {/* Gradient Card - Categories */}
          <div className="card" style={{ flex: 1, background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 50%, #E3C1AF 100%)', color: 'white', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Top Category</span>
              <Grid size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2rem', margin: 0, fontWeight: 400 }}>Accessories</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>6 items in catalog</p>
            
            <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                <span>Electronics</span>
                <span>4 items</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                <span>Audio</span>
                <span>2 items</span>
              </div>
            </div>
          </div>

          {/* Beige Card - Alerts */}
          <div className="card" style={{ flex: 1, background: '#F8E9DE', color: '#111', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>Stock Alerts</span>
              <ShieldAlert size={16} color="#666" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>{outOfStock}</h2>
              <span style={{ color: '#EF4444', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowDownRight size={14} /> Out of stock
              </span>
            </div>
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '0 0 auto 0' }}>Requires immediate restock</p>
            
            <button style={{ marginTop: 'auto', background: '#111', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '9999px', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center' }}>
              View Alerts <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Create Product</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Product Name</label>
                <input required type="text" className="form-input" style={{ borderRadius: '8px' }} value={newProd.name} onChange={e => setNewProd({...newProd, name: e.target.value})} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>SKU</label>
                  <input required type="text" className="form-input" style={{ borderRadius: '8px' }} value={newProd.sku} onChange={e => setNewProd({...newProd, sku: e.target.value})} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Category</label>
                  <select className="form-input" style={{ borderRadius: '8px' }} value={newProd.category} onChange={e => setNewProd({...newProd, category: e.target.value})}>
                    <option>Electronics</option>
                    <option>Apparel</option>
                    <option>Accessories</option>
                    <option>Audio</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Initial Stock</label>
                  <input required type="number" className="form-input" style={{ borderRadius: '8px' }} value={newProd.stock} onChange={e => setNewProd({...newProd, stock: parseInt(e.target.value)})} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Unit of Measure</label>
                  <select className="form-input" style={{ borderRadius: '8px' }} value={newProd.uom} onChange={e => setNewProd({...newProd, uom: e.target.value})}>
                    <option>kg</option>
                    <option>pcs</option>
                    <option>prs</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" style={{ borderRadius: '9999px' }} onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ borderRadius: '9999px' }}>Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
