import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const { personal } = portfolioData;
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-200/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-xs shadow-subtle">
              SP
            </div>
            <div>
              <p className="font-bold text-zinc-950 text-sm">
                Sanskar Pathak
              </p>
              <p className="text-xs text-zinc-500">
                Full-Stack & Software Developer • GGITS Jabalpur
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-5 text-xs text-zinc-600 font-medium">
            <a href="#about" className="hover:text-zinc-950 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-950 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-zinc-950 transition-colors">Skills</a>
            <button onClick={onOpenResume} className="hover:text-zinc-950 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-blue-600 hover:bg-zinc-100 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-pink-600 hover:bg-zinc-100 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-50 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200 transition-all shadow-subtle ml-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <p>© {new Date().getFullYear()} Sanskar Pathak. All rights reserved.</p>
          
          <div className="inline-flex items-center gap-2 font-mono text-[11px] bg-zinc-50 px-3 py-1 rounded-full border border-zinc-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Jabalpur, India</span>
            <span className="text-zinc-300">•</span>
            <span className="font-semibold text-zinc-700">{time || 'Live IST'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
