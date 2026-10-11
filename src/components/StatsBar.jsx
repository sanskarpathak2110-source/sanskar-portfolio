import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Users, Award, Terminal } from 'lucide-react';

export default function StatsBar() {
  const { stats } = portfolioData;

  const icons = [
    <Code className="w-4 h-4 text-zinc-900" />,
    <Users className="w-4 h-4 text-blue-600" />,
    <Award className="w-4 h-4 text-emerald-600" />,
    <Terminal className="w-4 h-4 text-purple-600" />,
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 mb-1.5">
              <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100 transition-colors">
                {icons[idx % icons.length]}
              </div>
              <div>
                <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </p>
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-tight">
                  {stat.value}
                </h4>
              </div>
            </div>
            <p className="text-xs text-zinc-500 pl-[42px]">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
