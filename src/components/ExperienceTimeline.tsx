import { Award } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="space-y-6 pt-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">
          Work Experience
        </h2>
        <p className="text-sm text-text-muted">
          Enterprise hardware asset management, SQL data reconciliation, and executive reporting.
        </p>
      </div>

      <div className="space-y-4">
        {experience.map((item) => (
          <div
            key={item.id}
            className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300 space-y-4"
          >
            {/* Header: Role, Company, Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
              <div>
                <h3 className="text-text-primary font-semibold text-lg">
                  {item.role}
                </h3>
                <div className="text-sm text-text-muted font-medium">
                  {item.company} <span className="text-stone-300">·</span> {item.location}
                </div>
              </div>

              <div className="inline-flex items-center text-xs font-mono text-text-muted px-2.5 py-1 rounded-lg bg-canvas border border-border-warm self-start sm:self-auto shrink-0">
                {item.startDate} – {item.endDate}
              </div>
            </div>

            {/* Client Badges & Certificate of Excellence Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-text-muted font-medium">Clients:</span>
              <span className="bg-canvas text-text-muted border border-border-warm text-xs px-2.5 py-1 rounded-md font-medium">
                GAP
              </span>
              <span className="bg-canvas text-text-muted border border-border-warm text-xs px-2.5 py-1 rounded-md font-medium">
                FedEx
              </span>
              <span className="bg-canvas text-text-muted border border-border-warm text-xs px-2.5 py-1 rounded-md font-medium">
                SC Johnson via Accenture
              </span>
              <span className="inline-flex items-center gap-1 bg-accent-tint text-accent-text border border-amber-300/70 text-xs px-2.5 py-1 rounded-md font-medium shadow-sm">
                <Award className="w-3.5 h-3.5 text-accent-text" />
                <span>Q1 2025 Certificate of Excellence</span>
              </span>
            </div>

            {/* Exactly 3 Outcome-Driven Bullets */}
            <ul className="space-y-2.5 pt-2 text-sm text-text-muted leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-text mt-2 shrink-0" />
                <span>
                  Maintained enterprise asset records in ServiceNow and CMDB, ensuring data integrity and audit readiness across global client environments.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-text mt-2 shrink-0" />
                <span>
                  Engineered SQL queries to reconcile asset registers across cross-table feeds, resolving data anomalies and foreign-key mismatches.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-text mt-2 shrink-0" />
                <span>
                  Built and deployed production Power BI dashboards to Power BI Service for executive SLA tracking.
                </span>
              </li>
            </ul>

            {/* Skills Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-border-warm">
              {item.skillsUsed.map((skill) => (
                <span
                  key={skill}
                  className="bg-canvas text-text-muted border border-border-warm text-xs px-2.5 py-1 rounded-md font-medium"
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
