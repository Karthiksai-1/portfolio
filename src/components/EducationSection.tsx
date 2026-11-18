import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="space-y-6 pt-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">
          Education
        </h2>
        <p className="text-sm text-text-muted">
          Foundations in computing theory, distributed databases, and artificial intelligence.
        </p>
      </div>

      <div className="space-y-4">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/50 backdrop-blur-xs border border-slate-200/70 rounded-2xl p-5 sm:p-6 shadow-xs hover:bg-white/80 hover:border-slate-300 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-canvas border border-border-warm text-text-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-accent-text" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold text-base sm:text-lg">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-text-muted">
                  {item.field}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {item.institution} <span className="text-stone-300">·</span> {item.location}
                </p>
              </div>
            </div>

            {/* Standard pill badges: Date and CGPA aligned neatly alongside each other */}
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0 pt-1 sm:pt-0">
              <span className="px-2.5 py-1 text-xs font-medium bg-canvas text-text-muted border border-border-warm rounded-md">
                2020 – 2024
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-canvas text-text-muted border border-border-warm rounded-md">
                {item.score.type}: {item.score.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
