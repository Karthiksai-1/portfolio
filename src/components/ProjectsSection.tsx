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
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => {
          const codeUrl = (project.githubUrl && project.githubUrl.startsWith('http'))
            ? project.githubUrl
            : 'https://github.com/Karthiksai-1';

          const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

          return (
            <div
              key={project.id}
              className="flex flex-col justify-between h-full bg-surface border border-border-warm rounded-xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-stone-300 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Top: Title and Domain Badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-text-primary font-semibold text-base leading-snug">
                    {project.title}
                  </h3>

                  <span className="bg-accent-tint text-accent-text border border-amber-300/60 text-xs px-2.5 py-1 rounded-md font-medium shrink-0">
                    {project.domainTag}
                  </span>
                </div>

                {/* Body: Exactly 2 sentences */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Bottom: Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-canvas text-text-muted border border-border-warm text-xs px-2.5 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Compact & Aligned Horizontally */}
              <div className="flex flex-wrap items-center gap-2 pt-2 mt-4 border-t border-border-warm">
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit px-3.5 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-1.5 bg-text-primary text-surface hover:opacity-90 text-xs font-medium rounded-lg transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code ↗</span>
                </a>

                {/* Case Study secondary outline button */}
                {project.caseStudyUrl && (
                  <Link
                    to={project.caseStudyUrl}
                    className="w-fit px-3.5 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-1.5 text-text-primary bg-surface border border-border-warm hover:bg-canvas text-xs font-medium rounded-lg transition-colors shadow-sm"
                  >
                    <span>Case Study →</span>
                  </Link>
                )}

                {hasLiveDemo && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit px-3.5 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-1.5 bg-surface text-text-primary border border-border-warm hover:bg-canvas text-xs font-medium rounded-lg transition-colors shadow-sm"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
