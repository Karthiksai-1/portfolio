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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Context-Aware Back Link or Logo/Name */}
        {isCaseStudy ? (
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to projects</span>
          </Link>
        ) : (
          <a
            href="#about"
            onClick={(e) => handleAnchorClick(e, '#about')}
            className="text-sm font-semibold tracking-tight text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Karthikeya</span>
          </a>
        )}

        {/* Right Navigation & Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Hide anchor links on case studies */}
          {!isCaseStudy && (
            <>
              <nav className="flex items-center gap-4 sm:gap-5 text-xs sm:text-sm text-slate-600">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="h-3.5 w-px bg-slate-200" />
            </>
          )}

          {/* Resume button in navbar */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Resume</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1 text-slate-600 hover:text-slate-900 transition-colors"
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
