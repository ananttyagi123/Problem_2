import React, { useState, useEffect } from 'react';
import { Layers, TrendingUp, Home, Activity, Map as MapIcon, ShieldAlert, BarChart3, Database } from 'lucide-react';
import './App.css';

const DATA_STREAMS = [
  { id: 'municipal', name: 'Municipal Declarations', icon: <Database />, status: 'active', desc: 'New roads, utilities, transport' },
  { id: 'listing', name: 'Listing Density', icon: <Home />, status: 'active', desc: '99acres / MagicBricks saturation' },
  { id: 'pricing', name: 'Pricing Velocity', icon: <TrendingUp />, status: 'pending', desc: 'Rate of appreciation: Ready vs UC' },
  { id: 'rental', name: 'Rental Absorption', icon: <Activity />, status: 'active', desc: 'Actual residency demand' }
];

const HOTSPOTS = [
  { id: 1, top: '40%', left: '30%', level: 'high', name: 'Zone A - Metro Node' },
  { id: 2, top: '65%', left: '70%', level: 'medium', name: 'Zone B - IT Corridor' },
  { id: 3, top: '25%', left: '60%', level: 'low', name: 'Zone C - Suburb' }
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data load for the analytics engine
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center dashboard-layout" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="velocity-score" style={{ animation: 'pulse 1.5s infinite'}}>
           <h2 className="text-gradient" style={{fontSize: '2rem'}}>Initializing Geospatial Engine...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-layout animate-fade-in">
      {/* Sidebar - Data Integration */}
      <aside className="sidebar glass-panel">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
          <Layers className="text-accent" />
          <h2 className="text-gradient">Fusion Core</h2>
        </div>
        
        <div>
          <h3 className="section-title">Data Ingestion Streams</h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {DATA_STREAMS.map(stream => (
              <div key={stream.id} className="data-stream-item">
                <div className="data-icon">
                  {stream.icon}
                </div>
                <div className="data-content" style={{ flex: 1 }}>
                  <h4>{stream.name}</h4>
                  <p>{stream.desc}</p>
                </div>
                <div>
                  <span className={`status-badge ${stream.status === 'pending' ? 'pending' : ''}`}>
                    {stream.status === 'active' ? 'Syncing' : 'Awaiting'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Activity size={18} /> Run Deep Analysis
          </button>
        </div>
      </aside>

      {/* Main Map Content */}
      <main className="main-content">
        <div className="map-overlay-top glass-card" style={{ padding: '1rem' }}>
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Region Overview</h1>
          <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Forecasting horizon: 24-60 months</p>
        </div>

        <div className="map-container">
          {/* Mock Heatmap Nodes */}
          {HOTSPOTS.map(spot => (
            <div 
              key={spot.id} 
              className={`hotspot-marker hotspot-${spot.level}`}
              style={{ top: spot.top, left: spot.left }}
              title={spot.name}
            >
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, 5px)', whiteSpace: 'nowrap', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>
                {spot.name}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Panel - Insights & Projections */}
      <aside className="right-panel glass-panel">
        <div>
          <h3 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BarChart3 size={16}/> Growth Velocity
          </h3>
          <div className="velocity-score">
            <div className="score-value">84.2</div>
            <div className="score-label">Zone A Score</div>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3 className="section-title">Trend Analysis</h3>
          <div className="glass-card" style={{ padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="metric-label">Rental Yield Delta</span>
              <span className="metric-value trend-up" style={{ fontSize: '1rem' }}>+12.4%</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
              <div style={{ width: '75%', height: '100%', background: 'var(--success)', borderRadius: '2px' }}></div>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Signal: Undervalued, high absorption.</p>
          </div>

          <div className="glass-card" style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="metric-label">Govt. Index (CLU)</span>
              <span className="metric-value trend-up" style={{ fontSize: '1rem' }}>High Lead</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>2 Upcoming Tenders detected within 5km radius.</p>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div className="glass-card" style={{ padding: '1rem', borderLeft: '4px solid var(--accent)' }}>
            <h4 style={{ fontSize: '0.875rem', marginBottom: '0.25rem', color: 'var(--accent)' }}>Strategic Recommendation</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Allocate funds to Sector 42 - Commercial mixed-use. Ready within 24m horizon.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
