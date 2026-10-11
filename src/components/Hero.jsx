import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Mail, CheckCircle2, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-subtle-grid border-b border-zinc-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Minimalist Location & College Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>B.Tech Computer Science Engineering</span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-500">GGITS Jabalpur</span>
            </div>

            {/* Main Title - Natural & Confident */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] mb-6">
              Building web platforms, exploring AI, and writing code that works.
            </h1>

            {/* Bio - Authentic Developer Voice */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
              Hi, I'm <strong className="text-zinc-900 font-semibold">{personal.name}</strong>. I'm a Computer Science student based in Jabalpur with strong foundations in <span className="text-zinc-900 font-medium">C, C++, JavaScript, React, SQL, and Python</span>. I like building real-world projects—whether it's building a housing platform from scratch, working on deepfake audio analysis, or solving DSA problems on LeetCode.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all shadow-subtle flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-300 text-xs sm:text-sm font-semibold transition-all shadow-subtle flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                View Resume
              </button>

              {/* Social Links Dock */}
              <div className="flex items-center gap-1.5 pl-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-subtle"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-blue-600 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-subtle"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-pink-600 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-subtle"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-subtle"
                  aria-label="Contact Section"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Micro-Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200 w-full max-w-lg text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900" />
                <span>React & Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>AWS Certified Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>DSA in C++</span>
              </div>
            </div>

          </div>

          {/* Right Column: User Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-zinc-200/90 shadow-card p-2.5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100">
                  <img
                    src="/sanskar.jpg"
                    alt="Sanskar Pathak"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  />
                  
                  {/* Subtle overlay gradient on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-zinc-900">Sanskar Pathak</p>
                      <p className="text-[11px] text-zinc-500 font-medium">Full-Stack & Software Developer</p>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative minimal shadow backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-zinc-200/50 -z-10 blur-xl opacity-50" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
