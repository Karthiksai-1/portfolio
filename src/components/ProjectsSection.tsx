import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'GenAI' | 'Analytics'>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'GenAI') return project.category === 'GenAI/LLM';
    if (activeFilter === 'Analytics') return project.category === 'Data Analytics';
    return true;
  });

  const categories: Array<'All' | 'GenAI' | 'Analytics'> = ['All', 'GenAI', 'Analytics'];

  return (
    <section id="projects" className="space-y-6 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Featured Projects
          </h2>
          <p className="text-sm text-text-muted">
            Production GenAI engineering, automated LLM testing, and enterprise analytics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-canvas border border-border-warm self-start sm:self-auto">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 ease-out active:scale-[0.98] ${
                  isActive
                    ? 'bg-text-primary text-surface shadow-sm'
                    : 'bg-surface text-text-muted border border-border-warm hover:bg-canvas'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Balanced 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {filteredProjects.map((project) => {
          const codeUrl = (project.githubUrl && project.githubUrl.startsWith('http'))
            ? project.githubUrl
            : 'https://github.com/Karthiksai-1';

          const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

          return (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between h-full rounded-xl border border-border-warm bg-surface p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm text-left"
            >
              <div className="flex flex-col flex-grow text-left">
                {/* Top: Title and Domain Badge */}
                <div className="flex items-start justify-between gap-3 text-left mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary tracking-tight group-hover:text-text-muted transition-colors leading-snug text-left">
                    {project.title}
                  </h3>

                  <span className="bg-accent-tint text-accent-text border border-amber-300/60 text-xs px-2.5 py-1 rounded-md font-medium shrink-0">
                    {project.domainTag}
                  </span>
                </div>

                {/* Body: Exactly 2 sentences */}
                <p className="text-left text-xs sm:text-sm text-text-muted leading-relaxed my-3 flex-grow">
                  {project.description}
                </p>
              </div>

              {/* Pinned Baseline Footer (Tags & Action Links) */}
              <div className="mt-auto pt-3 border-t border-border-warm flex flex-col gap-3">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-canvas text-text-muted border border-border-warm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-1">
                  {project.caseStudyUrl ? (
                    <Link
                      to={project.caseStudyUrl}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:text-accent-text transition-colors"
                    >
                      <span>Case Study</span>
                      <span className="inline-block transition-transform duration-150 group-hover:translate-x-1 group-hover/link:translate-x-1">→</span>
                    </Link>
                  ) : <div />}

                  <div className="flex items-center gap-3">
                    {hasLiveDemo && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <span className="inline-block transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">↗</span>
                      </a>
                    )}

                    <a
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <span className="inline-block transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
