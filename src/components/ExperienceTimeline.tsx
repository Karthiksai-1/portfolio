import { Award } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="space-y-6 pt-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Work Experience
        </h2>
        <p className="text-sm text-slate-600">
          Enterprise hardware asset management, SQL data reconciliation, and executive reporting.
        </p>
      </div>

      <div className="space-y-4">
        {experience.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-4"
          >
            {/* Header: Role, Company, Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
              <div>
                <h3 className="text-slate-900 font-semibold text-lg">
                  {item.role}
                </h3>
                <div className="text-sm text-slate-600 font-medium">
                  {item.company} <span className="text-slate-400">·</span> {item.location}
                </div>
              </div>

              <div className="inline-flex items-center text-xs font-mono text-slate-600 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 self-start sm:self-auto shrink-0">
                {item.startDate} – {item.endDate}
              </div>
            </div>

            {/* Client Badges & Certificate of Excellence Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-500 font-medium">Clients:</span>
              <span className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium">
                GAP
              </span>
              <span className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium">
                FedEx
              </span>
              <span className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium">
                SC Johnson via Accenture
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs px-2.5 py-1 rounded-md font-medium shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Q1 2025 Certificate of Excellence</span>
              </span>
            </div>

            {/* Exactly 3 Outcome-Driven Bullets */}
            <ul className="space-y-2.5 pt-2 text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  Maintained enterprise asset records in ServiceNow and CMDB, ensuring data integrity and audit readiness across global client environments.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  Engineered SQL queries to reconcile asset registers across cross-table feeds, resolving data anomalies and foreign-key mismatches.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  Built and deployed production Power BI dashboards to Power BI Service for executive SLA tracking.
                </span>
              </li>
            </ul>

            {/* Skills Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-100">
              {item.skillsUsed.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
