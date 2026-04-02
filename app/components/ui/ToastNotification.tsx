'use client';

import { useEffect, useState } from 'react';

type Phase = 'hidden' | 'shown' | 'exiting' | 'done';

// Module-level state persists across Strict Mode remounts and hydration recovery
// within the same page load, so remounts don't reset the toast mid-display.
let modulePhase: Phase = 'hidden';
let moduleScheduled = false;
let moduleSetPhase: ((p: Phase) => void) | null = null;

export function ToastNotification() {
  // Initialise from module-level phase so remounts restore the correct visual state
  const [phase, setPhase] = useState<Phase>(modulePhase);

  useEffect(() => {
    moduleSetPhase = setPhase;

    if (!moduleScheduled && sessionStorage.getItem('toastShown') !== 'true') {
      moduleScheduled = true;
      sessionStorage.setItem('toastShown', 'true');

      const update = (p: Phase) => {
        modulePhase = p;
        moduleSetPhase?.(p);
      };

      // 8s delay → 400ms entrance → 10s visible → 300ms exit
      setTimeout(() => update('shown'), 8000);
      setTimeout(() => update('exiting'), 18400);
      setTimeout(() => {
        update('done');
      }, 18700);
    }

    return () => { moduleSetPhase = null; };
  }, []);

  if (phase === 'hidden' || phase === 'done') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`toast-notification ${phase === 'exiting' ? 'toast-exiting' : 'toast-entering'}`}
      style={{
        background: '#F2F0EC',
        border: '1px solid #ECEAE6',
        borderRadius: 14,
        padding: '18px 20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <div
          className="dot-pulse"
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#C4394A',
            flexShrink: 0,
          }}
        />
        <span style={{ color: '#1a1a1a', fontSize: 15, fontWeight: 500, lineHeight: 1.4 }}>
          Sophie Arnold
        </span>
      </div>
      <p style={{ color: '#5C5A58', fontSize: 13, margin: 0, marginBottom: 4, lineHeight: 1.4 }}>
        Just booked a job via Automation Culture
      </p>
      <p style={{ color: '#9A9790', fontSize: 12, margin: 0, lineHeight: 1.4 }}>
        Melbourne, 2 hours ago
      </p>
    </div>
  );
}
