import { Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

export const Footer: React.FC = () => {
  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const activeSection = useActiveSection(['about', 'experience', 'projects', 'skills', 'contact']);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border-warm bg-surface py-8 text-text-muted text-sm -mx-4 sm:-mx-6 px-4 sm:px-6 -mb-8 sm:-mb-12 md:-mb-16 mt-16 w-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Clean copyright text on the left */}
        <div className="text-text-muted font-medium text-xs sm:text-sm">
          © 2026 Nirudi Sai Karthikeya
        </div>

        {/* Interactive Active Section Indicator / Directory in Footer */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleAnchorClick(e, section.id)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all duration-200 flex items-center gap-1.5 active:scale-[0.98] ${
                  isActive
                    ? 'bg-accent-tint text-accent-text font-semibold border border-amber-300/70 shadow-xs'
                    : 'text-text-muted hover:text-text-primary hover:bg-canvas'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-text animate-pulse" />
                )}
                <span>{section.name}</span>
              </a>
            );
          })}
        </div>

        {/* Resume, GitHub, and LinkedIn links on the right */}
        <div className="flex items-center gap-5 text-text-muted">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-all duration-150 ease-out active:scale-[0.98] flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-text-muted" />
            <span>Resume</span>
          </a>
          <a
            href="https://github.com/Karthiksai-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-all duration-150 ease-out active:scale-[0.98] flex items-center gap-1.5"
          >
            <Github className="w-4 h-4 text-text-muted" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-all duration-150 ease-out active:scale-[0.98] flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4 text-text-muted" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
