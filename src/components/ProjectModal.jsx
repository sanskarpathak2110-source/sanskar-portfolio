import React from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-zinc-200 shadow-modal overflow-hidden z-10 animate-slide-up my-8">
        
        {/* Modal Header */}
        <div className="relative px-6 py-6 sm:px-8 bg-zinc-50 border-b border-zinc-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white text-zinc-400 hover:text-zinc-900 transition-all border border-zinc-200 shadow-subtle"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-zinc-700 border border-zinc-200">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600">
              {project.period}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              {project.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-600 font-medium mt-0.5">
            {project.subtitle}
          </p>
          <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-700">
            <span className="text-zinc-400">My Role:</span>
            <strong className="text-zinc-900 font-semibold">{project.role}</strong>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 sm:px-8 space-y-6 max-h-[68vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              What it is
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
              What I built & implemented
            </h4>
            <div className="grid gap-2">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-zinc-200/90 text-xs sm:text-sm text-zinc-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-50 border border-zinc-200 text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 sm:px-8 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-mono">
            github.com/sanskarpathak2110-source
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 transition-colors shadow-subtle"
            >
              <Github className="w-3.5 h-3.5" />
              Repository
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
