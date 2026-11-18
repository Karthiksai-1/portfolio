import { useLocation, Link } from 'react-router-dom';
import { Github, Linkedin, FileText, ArrowLeft } from 'lucide-react';
import { profile } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith('/projects/');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-border-warm text-text-primary transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:px-6 h-14 flex items-center justify-between w-full">
        {/* Left: Context-Aware Back Link or Logo/Name */}
        {isCaseStudy ? (
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to projects</span>
          </Link>
        ) : (
          <a
            href="#about"
            onClick={(e) => handleAnchorClick(e, '#about')}
            className="text-sm font-semibold tracking-tight text-text-primary hover:text-accent-text transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent-text" />
            <span>Karthikeya</span>
          </a>
        )}

        {/* Right Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Hide anchor links on mobile and case studies */}
          {!isCaseStudy && (
            <>
              <nav className="hidden md:flex items-center gap-6 text-sm text-text-muted">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="hover:text-text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="hidden md:block h-3.5 w-px bg-border-warm" />
            </>
          )}

          {/* Resume button in navbar */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-primary border border-border-warm bg-surface hover:bg-canvas px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-text-muted" />
            <span>Resume</span>
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
