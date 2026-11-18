import { profile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200/70 mt-20 py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Nirudi Sai Karthikeya</p>
        <div className="flex items-center gap-6">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
          >
            Resume ↗
          </a>
          <a 
            href={profile.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
          >
            GitHub ↗
          </a>
          <a 
            href={profile.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
