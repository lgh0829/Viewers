import React from 'react';

export default function PanelReport() {
  return (
    <div style={{
      padding: '1rem',
      height: '100%',
      background: '#000',
      color: '#fff'
    }}>
      <h3 style={{ marginBottom: '1rem' }}>Report</h3>
      <textarea
        placeholder="Enter report here..."
        style={{
          width: '100%',
          height: 'calc(100% - 60px)',
          background: '#242424',
          color: '#fff',
          border: '1px solid #444',
          borderRadius: '4px',
          padding: '0.5rem',
          resize: 'vertical'
        }}
      />
      <button
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Save Report
      </button>
    </div>
  );
}
