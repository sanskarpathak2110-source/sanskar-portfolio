import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import CertModal from './CertModal';

export default function CertificationsSection() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'Artificial Intelligence', label: 'AI & ML' },
    { id: 'Cloud Computing', label: 'Cloud' },
    { id: 'Data Science', label: 'Data Science' },
    { id: 'Programming', label: 'Programming' },
  ];

  const filteredCerts =
    filter === 'all'
      ? certifications
      : certifications.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-20 relative bg-white border-t border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 mb-3 shadow-subtle">
            <Award className="w-3.5 h-3.5 text-zinc-900" />
            Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Certifications & Badges
          </h2>
          <p className="mt-2 text-sm text-zinc-600 max-w-lg">
            Courses and official credentials I've earned across Cloud (AWS), AI, and Programming.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat.id
                    ? 'bg-zinc-900 text-white shadow-subtle'
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 shadow-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-subtle hover:shadow-card group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 text-zinc-600">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2.5">
                  {cert.badgeImage ? (
                    <img
                      src={cert.badgeImage}
                      alt={cert.title}
                      className="w-10 h-10 rounded-xl object-contain bg-zinc-50 p-0.5 border border-zinc-200 shrink-0 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-zinc-900 shrink-0 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-5 h-5 text-zinc-800" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-600 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                {cert.certId ? (
                  <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 truncate max-w-[160px]">
                    ID: {cert.certId.slice(0, 10)}...
                  </span>
                ) : (
                  <span className="text-[11px] text-zinc-400">{cert.badgeText || 'Verified'}</span>
                )}

                <span className="inline-flex items-center gap-1 font-semibold text-zinc-800 group-hover:text-zinc-950 text-xs">
                  View Credential
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
