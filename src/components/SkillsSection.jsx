import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Globe, Database, Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Tech' },
    { id: 'dbCloud', label: 'DB & Cloud' },
    { id: 'core', label: 'Core CS' },
    { id: 'tools', label: 'Tools' },
  ];

  const skillGroups = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      items: skills.languages,
    },
    {
      id: 'web',
      title: 'Web & Frameworks',
      icon: Globe,
      items: skills.webDevelopment,
    },
    {
      id: 'dbCloud',
      title: 'Databases & Cloud Architecture',
      icon: Database,
      items: skills.databasesCloud,
    },
    {
      id: 'core',
      title: 'Core CS & Problem Solving',
      icon: Cpu,
      items: skills.coreCS,
    },
    {
      id: 'tools',
      title: 'Tools & Workflows',
      icon: Wrench,
      items: skills.toolsAI,
    },
  ];

  const filteredGroups =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 mb-3 shadow-subtle">
            <Cpu className="w-3.5 h-3.5 text-zinc-900" />
            Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            What I Work With
          </h2>
          <p className="mt-2 text-sm text-zinc-600 max-w-lg">
            Languages, frameworks, databases, and problem-solving tools I reach for.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-subtle'
                      : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 shadow-subtle'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-subtle hover:shadow-card group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-zinc-100">
                    <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-zinc-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {group.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50/70 border border-zinc-100"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-800">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 text-right">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {group.items.length} items
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
