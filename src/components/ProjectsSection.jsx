import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Github, Code2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 mb-3 shadow-subtle">
            <Code2 className="w-3.5 h-3.5 text-zinc-900" />
            Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Things I've Built
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-xl">
            Real projects I've worked on, from full-stack web platforms to machine learning tools.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-300 p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-subtle hover:shadow-card-hover group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-100 text-zinc-700">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {project.period}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-blue-600 font-semibold mt-0.5 mb-3.5">
                  {project.subtitle}
                </p>

                {/* Role Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Role: <strong className="text-zinc-950 font-semibold">{project.role}</strong>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights preview */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600">
                      <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-50 text-zinc-600 border border-zinc-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all flex items-center justify-center gap-1.5 shadow-subtle"
                  >
                    View Project Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 border border-zinc-200 transition-colors shadow-subtle"
                    aria-label="View source repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
