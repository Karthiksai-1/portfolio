import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudy = location.pathname.startsWith('/projects/');
  const activeSection = useActiveSection(['about', 'experience', 'projects', 'skills', 'contact']);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (isCaseStudy) {
      navigate('/' + href);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-warm bg-canvas/85 backdrop-blur-md transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between w-full">
        {/* Left: Direct Link to Homepage */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-semibold tracking-tight text-text-primary hover:text-accent-text transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent-text" />
          <span className="hidden sm:inline">Nirudi Sai Karthikeya</span>
          <span className="sm:hidden">Karthikeya</span>
        </Link>

        {/* Right Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const isActive = !isCaseStudy && activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={isCaseStudy ? `/${link.href}` : link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative py-1 transition-colors duration-150 ${
                    isActive
                      ? 'text-text-primary font-semibold'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-text rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block h-3.5 w-px bg-border-warm" />

          {/* Resume button pinned to the right side */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-primary border border-border-warm bg-surface hover:bg-canvas px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 ease-out active:scale-[0.98] shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-text-muted" />
            <span>Resume ↗</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1 text-text-muted hover:text-text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1 text-text-muted hover:text-text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
