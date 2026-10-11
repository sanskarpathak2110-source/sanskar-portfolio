import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-white border-t border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 mb-3 shadow-subtle">
            <Briefcase className="w-3.5 h-3.5 text-zinc-900" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Work & Leadership
          </h2>
          <p className="mt-2 text-sm text-zinc-600 max-w-lg">
            Where I've taken technical responsibility, built platforms, and coordinated teams.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#fafafa] border border-zinc-200/80 hover:border-zinc-300 p-6 sm:p-7 transition-all duration-200 shadow-subtle hover:shadow-card group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-zinc-200/60">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-200/70 text-zinc-800">
                      {item.badge}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
                    {item.company}
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5 font-mono bg-white px-2.5 py-1 rounded-lg border border-zinc-200 shadow-subtle">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-zinc-200/70 text-xs sm:text-sm text-zinc-700 shadow-subtle"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
