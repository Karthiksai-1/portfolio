import { Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-slate-500 text-sm -mx-6 px-6 -mb-12 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Clean copyright text on the left */}
        <div className="text-slate-600 font-medium">
          © 2026 Nirudi Sai Karthikeya
        </div>

        {/* Resume, GitHub, and LinkedIn links on the right */}
        <div className="flex items-center gap-5 text-slate-600">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Resume</span>
          </a>
          <a
            href="https://github.com/Karthiksai-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4 text-slate-500" />
            <span>GitHub</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4 text-slate-500" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
