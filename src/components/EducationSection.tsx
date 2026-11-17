import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="space-y-6 pt-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Education
        </h2>
        <p className="text-sm text-slate-600">
          Foundations in computing theory, distributed databases, and artificial intelligence.
        </p>
      </div>

      <div className="space-y-4">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold text-lg">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-slate-700">
                  {item.field}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.institution} <span className="text-slate-400">·</span> {item.location}
                </p>
              </div>
            </div>

            {/* Standard pill badges: Date and CGPA aligned neatly alongside each other */}
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
              <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 rounded-md">
                2020 – 2024
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 rounded-md">
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
