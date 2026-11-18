import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

export const FloatingSectionDock: React.FC = () => {
  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const activeSection = useActiveSection(['about', 'experience', 'projects', 'skills', 'contact']);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Floating section navigation footer"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-surface/90 backdrop-blur-md border border-border-warm rounded-full px-2 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-1 transition-all duration-300 animate-fade-in"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleScrollTo(e, section.id)}
            className={`px-2.5 sm:px-3 py-1 rounded-full text-xs transition-all duration-200 flex items-center gap-1.5 active:scale-[0.96] ${
              isActive
                ? 'bg-text-primary text-surface font-medium shadow-xs scale-105'
                : 'text-text-muted hover:text-text-primary hover:bg-canvas'
            }`}
          >
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            )}
            <span>{section.name}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default FloatingSectionDock;
