import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 mb-3 shadow-subtle">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-900" />
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm text-zinc-600 max-w-lg">
            My college degree in Computer Science and school academic background.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-5">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 p-6 sm:p-7 transition-all duration-200 shadow-subtle hover:shadow-card group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-3 border-b border-zinc-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1 rounded-lg bg-zinc-100 text-zinc-800">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                    {item.institution}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-zinc-700 mt-0.5">
                    {item.degree}
                  </p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5 font-mono bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-200">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {item.location}
                  </span>
                  {item.score && (
                    <span className="mt-0.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Score: {item.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5">
                {item.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
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
