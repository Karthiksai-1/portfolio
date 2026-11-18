import { Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-warm bg-surface py-8 text-text-muted text-sm -mx-4 sm:-mx-6 px-4 sm:px-6 -mb-8 sm:-mb-12 md:-mb-16 mt-16 w-auto">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Clean copyright text on the left */}
        <div className="text-text-muted font-medium">
          © 2026 Nirudi Sai Karthikeya
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
