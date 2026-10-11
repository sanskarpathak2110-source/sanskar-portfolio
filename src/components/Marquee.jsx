import React from 'react';

export default function Marquee() {
  const items = [
    'Co-Founder & Tech Lead @ Basera',
    'AWS Certified Cloud Practitioner',
    'VoiceShield AI • Deepfake Audio Detection',
    'B.Tech CSE @ GGITS Jabalpur',
    'SIH 2026 Hackathon Team Lead',
    'LeetCode & Algorithmic Problem Solver',
    'React 18 • Node.js • Firebase • Python • C++',
    'Jabalpur, Madhya Pradesh, India',
  ];

  return (
    <div className="w-full bg-white border-y border-zinc-200/90 py-3.5 my-10 overflow-hidden select-none shadow-subtle relative z-10">
      <div className="marquee-track">
        {/* Set 1 */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-800 whitespace-nowrap">
                {item}
              </span>
              <span className="text-zinc-400 text-xs">◆</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Clone for infinite seamless loop) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`clone-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-800 whitespace-nowrap">
                {item}
              </span>
              <span className="text-zinc-400 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
