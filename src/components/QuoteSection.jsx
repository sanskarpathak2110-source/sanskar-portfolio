import React from 'react';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-zinc-200/90 shadow-subtle p-8 sm:p-12 text-center overflow-hidden">
          {/* Subtle quotation watermark */}
          <div className="absolute top-4 left-6 text-zinc-100 pointer-events-none select-none">
            <Quote className="w-16 h-16 opacity-30 rotate-180" />
          </div>

          <div className="relative z-10 max-w-xl mx-auto space-y-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
              “Pressure is a privilege.”
            </p>

            <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
              A line by <strong className="text-zinc-800 font-semibold">Virat Kohli</strong> that became my everyday mindset. It reminds me to embrace high-pressure situations, take responsibility, and enjoy the grind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
