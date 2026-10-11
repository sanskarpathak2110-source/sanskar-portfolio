import React, { useState } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Calendar, UserCheck, Hash, Copy, Check } from 'lucide-react';

export default function CertModal({ cert, onClose }) {
  if (!cert) return null;
  const [copied, setCopied] = useState(false);

  const copyCertId = () => {
    if (!cert.certId) return;
    navigator.clipboard.writeText(cert.certId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-zinc-200 shadow-modal overflow-hidden z-10 animate-slide-up my-8">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-zinc-50 border-b border-zinc-200 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white text-zinc-400 hover:text-zinc-900 transition-all border border-zinc-200 shadow-subtle"
            aria-label="Close certificate modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Credential
            </span>
            <span className="text-xs font-medium text-zinc-500">
              {cert.category}
            </span>
          </div>

          <div className="flex items-start gap-3.5">
            {cert.badgeImage && (
              <img
                src={cert.badgeImage}
                alt={cert.title}
                className="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-zinc-200 shrink-0 shadow-subtle"
              />
            )}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-zinc-600 mt-0.5">
                Issued by: {cert.issuer}
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="p-6 sm:p-7 space-y-4 bg-white">
          
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
            {cert.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
              <div>
                <p className="text-[10px] text-zinc-400 uppercase font-semibold">Date Completed</p>
                <p className="text-zinc-800 font-medium">{cert.date}</p>
              </div>
            </div>

            {cert.instructor && (
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Instructor</p>
                  <p className="text-zinc-800 font-medium">{cert.instructor}</p>
                </div>
              </div>
            )}

            {cert.director && (
              <div className="sm:col-span-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-purple-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Academy Director</p>
                  <p className="text-zinc-800 font-medium">{cert.director}</p>
                </div>
              </div>
            )}

            {cert.certId && (
              <div className="sm:col-span-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Hash className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-zinc-400 uppercase font-semibold">Verification ID</p>
                    <p className="text-zinc-900 font-mono text-[11px] truncate">{cert.certId}</p>
                  </div>
                </div>
                <button
                  onClick={copyCertId}
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 text-[11px] font-semibold flex items-center gap-1 transition-colors shadow-subtle shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy ID
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-2.5 text-xs text-emerald-800">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>Awarded to <strong>Sanskar Pathak</strong> through institutional partnership with Gyan Ganga Institute of Technology & Sciences.</span>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
