import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offset = 180): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If scrolled near the bottom of the page, activate the last section (contact)
      if (windowHeight + window.scrollY >= documentHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the last section whose top position is above scrollPosition
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }

      // Default to first section
      setActiveSection(sectionIds[0] || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds.join(','), offset]);

  return activeSection;
}

export default useActiveSection;
