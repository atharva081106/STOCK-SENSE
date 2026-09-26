"use client";

import { useState } from "react";
import { Package, ArrowUpRight, ArrowDownRight, Grid, Upload } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

export default function DashboardPage() {
  const { products, operations } = useAppContext();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Real Calculations
  const totalProducts = products.length;
  const totalStockUnits = products.reduce((sum, p) => sum + p.stock, 0);
  const lowStockProducts = products.filter(p => p.stock < 10);
  const lowStockCount = lowStockProducts.length;
  const healthyStockPercent = Math.round(((totalProducts - lowStockCount) / totalProducts) * 100);
  const pendingOps = operations.filter(op => op.status === 'Waiting');
  
  // Aggregate Categories dynamically
  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  const dynamicPieData = Object.keys(categoryCounts).map(cat => ({ name: cat, value: categoryCounts[cat] })).sort((a,b) => b.value - a.value).slice(0,3);

  const salesChannelData = [
    { name: 'Online Store', value: 45000 },
    { name: 'Mobile App', value: 32000 },
    { name: 'In-Store', value: 18000 },
    { name: 'Wholesale', value: 12000 },
  ];

  // Mock data for Recharts (Normalized so in + out <= 80 to leave room for tooltips)
  const barData = [
    { name: 'Jan', in: 40, out: 25 },
    { name: 'Feb', in: 25, out: 20 },
    { name: 'Mar', in: 55, out: 30 },
    { name: 'Apr', in: 35, out: 30 },
    { name: 'May', in: 25, out: 15 },
    { name: 'Jun', in: 60, out: 20 },
    { name: 'Jul', in: 50, out: 40 },
    { name: 'Aug', in: 35, out: 25 },
    { name: 'Sep', in: 60, out: 35 },
    { name: 'Oct', in: 45, out: 30 },
    { name: 'Nov', in: 40, out: 25 },
    { name: 'Dec', in: 55, out: 45 },
  ];

  const COLORS = ['#9282FA', '#D4CFFF', '#1E1F26', '#E3C1AF'];

  const areaData = [
    { name: '1 Jul', uv: 100 },
    { name: '8 Jul', uv: 70 },
    { name: '16 Jul', uv: 20 },
    { name: '25 Jul', uv: 90 }
  ];

  return (
    <div className="animate-fade-in dashboard-grid" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0.25rem 0' }}>
      
      {/* Main Content Area */}
      <div className="dashboard-layout" style={{ flex: 1, display: 'grid', gridTemplateColumns: '7fr 3fr', gap: '1.25rem', minHeight: 0 }}>
        
        {/* LEFT COLUMN */}
        <div className="dashboard-left" style={{ display: 'grid', gridTemplateRows: '2.5fr 1.5fr 1.5fr', gap: '1.25rem', minHeight: 0 }}>
          
          {/* Main Chart */}
          <div className="card framer-card" style={{ padding: '1.25rem 1.5rem', minHeight: 0, overflow: 'visible' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexShrink: 0 }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', margin: '0 0 0.5rem 0', fontWeight: 500 }}>Stock Analytics</h3>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid var(--border-color)' }}></div> Inbound</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple-light)' }}></div> Outbound</span>
                </div>
              </div>
              <select className="form-input" style={{ padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem', width: 'auto', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', cursor: 'pointer' }}>
                <option>This year</option>
              </select>
            </div>
            
            <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative' }}>
              {barData.map((data, index) => {
                const isHovered = hoveredIndex === index;
                const bottomColor = isHovered ? 'var(--accent-purple)' : 'var(--accent-purple-light)';
                const topColor = isHovered ? 'var(--accent-purple)' : 'var(--accent-purple-light)';
                
                return (
                  <div 
                    key={index} 
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', flex: 1, cursor: 'pointer', position: 'relative' }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <div style={{ position: 'absolute', top: "calc(100% - " + (data.in + data.out) + "% - 80px)", left: '50%', transform: 'translateX(-50%)', background: '#1E1F26', color: 'white', padding: '0.5rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', width: '100px', zIndex: 10, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                        <div style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>{data.name}, 14</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.25rem' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.5)' }}></div>
                          In {data.in}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple-light)' }}></div>
                          Out {data.out}
                        </div>
                        {/* Tooltip Arrow */}
                        <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '8px', height: '8px', background: '#1E1F26' }}></div>
                      </div>
                    )}

                    {/* Bars Container */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flex: 1, width: '100%', alignItems: 'center', gap: '4px', marginBottom: '0.5rem' }}>
                      {/* Hatched Top Bar */}
                      <div style={{ 
                        height: data.out + "%", 
                        width: '28px', 
                        borderRadius: '6px',
                        background: "repeating-linear-gradient(45deg, transparent, transparent 3px, " + topColor + " 3px, " + topColor + " 4px)",
                        opacity: isHovered ? 1 : 0.6
                      }}></div>
                      {/* Solid Bottom Bar */}
                      <div style={{ 
                        height: data.in + "%", 
                        width: '28px', 
                        borderRadius: '6px',
                        background: bottomColor,
                        opacity: isHovered ? 1 : 0.6
                      }}></div>
                    </div>

                    {/* X-Axis Label */}
                    <span style={{ fontSize: '0.75rem', color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: isHovered ? 500 : 400 }}>{data.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Donut + List */}
          <div className="dashboard-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.25rem', minHeight: 0 }}>
            <div className="card framer-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>Revenue by Channel</h3>
              <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={salesChannelData} innerRadius="65%" outerRadius="90%" paddingAngle={4} dataKey="value" stroke="none">
                      {salesChannelData.map((entry, index) => (
                        <Cell key={"cell-" + index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} formatter={(value) => `$${value.toLocaleString()}`} />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center text for Donut */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', pointerEvents: 'none' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Total</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>$107k</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.65rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
                {salesChannelData.map((d, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS[i % COLORS.length] }}></div> {d.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="card framer-card" style={{ padding: '1rem', minHeight: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '0.9rem', margin: 0, color: '#EF4444' }}>Low Stock Alerts</h3>
                <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
                {lowStockProducts.slice(0, 4).map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', background: 'rgba(239, 68, 68, 0.05)', padding: '0.5rem', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{p.name}</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{p.sku}</div>
                      </div>
                    </div>
                    <div style={{ color: '#EF4444', fontWeight: 600, fontSize: '0.85rem' }}>{p.stock} <span style={{ fontSize: '0.65rem' }}>{p.uom}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Product Sales Table */}
          <div className="card framer-card" style={{ padding: '1rem', minHeight: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexShrink: 0 }}>
              <h3 style={{ fontSize: '1rem', margin: 0, fontWeight: 500 }}>Product sales</h3>
              <ArrowUpRight size={14} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <table className="table" style={{ fontSize: '0.8rem' }}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th style={{ textAlign: 'right' }}>Stock</th>
                    <th style={{ textAlign: 'right' }}>Old price</th>
                    <th style={{ textAlign: 'right' }}>Sale</th>
                    <th style={{ textAlign: 'right' }}>New price</th>
                    <th style={{ textAlign: 'right' }}>Items sold</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 4).map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <span style={{ fontWeight: 500, fontSize: '0.85rem' }}>{p.name}</span>
                        </div>
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>{p.stock}</td>
                      <td style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>${p.oldPrice.toFixed(2)}</td>
                      <td style={{ textAlign: 'right', color: p.salePercent > 0 ? '#10B981' : 'var(--text-secondary)', fontWeight: p.salePercent > 0 ? 600 : 400 }}>{p.salePercent}%</td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>${p.newPrice.toFixed(2)}</td>
                      <td style={{ textAlign: 'right', fontWeight: 500 }}>{p.itemsSold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - EXACTLY MATCHING DESIGN IMAGE */}
        <div className="dashboard-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minHeight: 0 }}>
          
          {/* Dark Card - Total Inventory */}
          <div className="card framer-card" style={{ flex: 1, background: '#1E1F26', color: 'white', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Total Stock Volume</span>
              <Grid size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>{totalStockUnits.toLocaleString()}</h2>
              <span style={{ color: '#4ADE80', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowUpRight size={14} /> Units
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>Across {totalProducts} unique SKUs</p>
            
            <div style={{ display: 'flex', gap: '0.75rem', height: '44px', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              <div style={{ flex: '4', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.8)', background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)', display: 'flex', alignItems: 'flex-end', padding: '0.35rem 0.6rem', fontSize: '0.9rem', color: 'white' }}>
                40%
              </div>
              <div style={{ flex: '6', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '0.35rem 0.6rem', color: '#1E1F26', fontSize: '0.9rem', fontWeight: 500 }}>
                60%
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid white' }}></div> In Stock</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }}></div> Low Stock</span>
            </div>
          </div>

          {/* Gradient Card - Pending Operations */}
          <div className="card framer-card" style={{ flex: 1, background: 'linear-gradient(135deg, #7E87BA 0%, #B496A6 50%, #E3C1AF 100%)', color: 'white', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 500 }}>Pending Operations</span>
              <Grid size={16} color="rgba(255,255,255,0.7)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>{pendingOps.length}</h2>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <ArrowDownRight size={14} /> Action Req
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', margin: '0 0 auto 0' }}>Requires immediate attention</p>
            
            <div style={{ height: '70px', marginTop: '1rem', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px' }}>
              <div style={{ position: 'absolute', top: '70%', left: 0, right: 0, borderTop: '1.5px dashed rgba(255,255,255,0.5)', zIndex: 0 }}></div>
              {[70, 50, 20, 25, 40, 25, 20, 15].map((h, i) => (
                <div key={"bar-"+i} style={{ flex: 1, height: h + '%', background: 'white', borderRadius: '6px 6px 0 0', zIndex: 1 }}></div>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.5rem', padding: '0 4px' }}>
              <span>1</span><span>4</span><span>8</span><span>12</span><span>16</span><span>20</span><span>24</span><span>30</span>
            </div>
          </div>

          {/* Beige Card - Stock Health */}
          <div className="card framer-card" style={{ flex: 1, background: '#F8E9DE', color: '#111', padding: '1.25rem 1.25rem 0.75rem 1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>Inventory Health</span>
              <Grid size={16} color="#666" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 400 }}>{healthyStockPercent}%</h2>
              <span style={{ color: healthyStockPercent > 80 ? '#10B981' : '#EF4444', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                {healthyStockPercent > 80 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} Optimal
              </span>
            </div>
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '0 0 1rem 0' }}>{lowStockCount} items critically low</p>
            
            <div style={{ height: '80px', width: '100%', marginLeft: '-0.5rem' }}>
              <ResponsiveContainer width="105%" height="100%">
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="uv" stroke="#111" strokeWidth={2.5} fillOpacity={1} fill="url(#colorUv)" 
                    dot={(props) => props.index === 3 ? <circle cx={props.cx} cy={props.cy} r={5} fill="#111" stroke="none" /> : null} 
                    activeDot={false} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#666', marginTop: '0.25rem' }}>
              <span>1 Jul</span><span>8 Jul</span><span>16 Jul</span><span>25 Jul</span>
            </div>
          </div>

          <button style={{ flexShrink: 0, padding: '1rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', background: '#1E1F26', color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>
            <Upload size={16} /> Export statistics
          </button>
        </div>
      </div>
    </div>
  );
}
