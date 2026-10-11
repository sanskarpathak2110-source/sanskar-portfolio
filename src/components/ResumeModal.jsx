import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-white border border-zinc-200 shadow-modal overflow-hidden z-10 animate-slide-up my-4 flex flex-col max-h-[94vh]">
        
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-zinc-200 text-zinc-800">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-900 leading-tight">
                Sanskar_Pathak_Resume.pdf
              </p>
              <p className="text-[11px] text-zinc-500 font-mono">
                Official Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 shadow-subtle transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Tab
            </a>
            
            <a
              href={personal.resumeUrl}
              download="Sanskar_Pathak_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white shadow-subtle transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white text-zinc-400 hover:text-zinc-900 border border-zinc-200 shadow-subtle transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Exact Resume PDF Viewer */}
        <div className="flex-1 p-2 sm:p-4 bg-zinc-100/60 overflow-hidden">
          <iframe
            src={`${personal.resumeUrl}#toolbar=0&navpanes=0`}
            title="Sanskar Pathak Resume"
            className="w-full h-[75vh] rounded-2xl border border-zinc-200 shadow-inner bg-white"
          />
        </div>

      </div>
    </div>
  );
}
