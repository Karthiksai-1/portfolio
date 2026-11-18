import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Navbar from '../Navbar';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

export const ItAssetCaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-canvas text-text-primary font-sans antialiased selection:bg-accent-tint selection:text-accent-text animate-fade-in">
      {/* Context-Aware Sticky Navbar */}
      <Navbar />

      {/* Main Container - Centered */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12">
        {/* Breadcrumb directly above project title */}
        <div className="text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
          >
            ← All projects
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Enterprise Audit // 04
            </span>
            <span className="text-stone-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mt-2 mb-3 text-left">
            IT Asset Reconciliation: Auditing 1,600 Enterprise Assets with SQL &amp; Power BI
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            An enterprise reconciliation engine modeling 1,600 hardware and software assets in SQLite against network discovery feeds, identifying an 89.1% match rate (against a 95% SLA target) and exposing 40 shadow devices and $350K in refresh backlog via Power BI.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-border-warm bg-surface shadow-sm mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">SQLite · SQL (CTEs) · Power BI · Python</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Volume</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">1,600 Registered Assets</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Audit Report</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">4-Page Power BI Suite</div>
            </div>
          </div>

          {/* Action Link Neatly Positioned Below Metadata Card */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-left">
            <a
              href="https://github.com/Karthiksai-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-text-primary text-surface hover:opacity-90 text-xs font-medium rounded-lg transition-all duration-150 ease-out active:scale-[0.98] shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub ↗</span>
            </a>
          </div>
        </header>

        {/* Results Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Audit Outcomes
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">1.6K+</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Assets Audited</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Full Estate Reconciliation</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">89.1%</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Match Rate</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Against 95% SLA Target</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">40</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Shadow Devices</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Unmanaged Endpoints</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">$350K</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Refresh Backlog</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Out-of-Warranty Hardware</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mt-4">
            Architected a multi-tiered SQL reconciliation engine that isolated corporate CMDB drift, quantified $350K in out-of-warranty hardware failure exposure, and exposed 40 rogue network endpoints without endpoint agents.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            CMDB Registers Drift from Live Network Telemetry
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            Large enterprises maintain static asset management inventories (ITAM) completely separate from operational network discovery scanners. This disconnect causes two major vulnerabilities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">01 · Idle Licenses</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Ghost Assets</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                175 registered enterprise endpoints showed zero network discovery pings for over 90 days, wasting annual SaaS licenses and active warranties.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">02 · Security Blindspots</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Shadow Devices</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                40 active devices communicating on corporate subnets were unlisted in the official registry, lacking enterprise antivirus agents and patch tracking.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">03 · Key Incompatibilities</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Telemetry Discrepancies</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Serial numbers contain inconsistent whitespace, while MAC addresses vary across hyphens, colons, and uppercase conventions across vendors.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            System Topology
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            How It Works: Tiered SQL Reconciliation &amp; Star Schema Audit Architecture
          </h2>

          <p className="text-left text-[14px] leading-relaxed text-text-muted font-normal">
            The engine stages raw inventory records alongside network telemetry into SQLite, reconciles via tiered fallback joins, and models the output into a star schema consumed by Power BI:
          </p>

          {/* Clean, Left-Aligned Vertical Pipeline */}
          <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-6 my-6 text-left">
            {[
              {
                title: 'Dual-Source Ledger Ingestion',
                description: 'Stages 1,600 registered CMDB hardware records alongside 1,400 raw network discovery scan logs into SQLite staging tables.',
                tags: ['CMDB Register', 'Network Telemetry', 'SQLite Staging']
              },
              {
                title: 'Data Sanitization & Preprocessing',
                description: 'Standardizes MAC address casing and delimiters, strips leading/trailing serial number whitespace, and cleans system hostnames.',
                tags: ['MAC Normalization', 'Serial Formatting', 'Regex Cleaning']
              },
              {
                title: 'Tiered CTE Fallback Join Engine',
                description: 'Executes cascading reconciliation: Tier 1 matches exact Serial Number, Tier 2 falls back to normalized MAC address, Tier 3 applies hostname heuristics.',
                tags: ['Tiered CTEs', 'Fallback Logic', '92% Discrepancy Cut']
              },
              {
                title: 'Audit Exception Classification',
                description: 'Classifies records into 4 audit categories: fully reconciled active hardware, 175 ghost assets (0 network activity), 40 shadow devices, and refresh backlog.',
                tags: ['Ghost Assets (175)', 'Shadow Devices (40)', 'Exception Triage']
              },
              {
                title: 'Financial Exposure Quantification',
                description: 'Calculates fiscal exposure by mapping exceptions to unit purchase prices, revealing $350K in delayed hardware refreshes and $42K/yr in ghost software licenses.',
                tags: ['$350K Refresh Backlog', '$42K/yr Idle Software', 'Cost Modeling']
              },
              {
                title: 'Power BI Star Schema & Executive Suite',
                description: 'Loads curated dimensional warehouse into a 4-page Power BI dashboard providing SLA gap analysis, shadow device quarantine rosters, and hardware refresh roadmaps.',
                tags: ['Star Schema', 'DAX Measures', '4-Page Scorecard']
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {/* Pipeline Node */}
                <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-900 shadow-sm" />

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900 tracking-tight">
                    {step.title}
                  </h4>
                </div>

                <p className="text-left text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {step.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {step.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Native Responsive Pipeline Component */}
          <div className="my-8 w-full max-w-2xl mx-auto flex flex-col items-center">
            {/* Stage 1: Pipeline Header */}
            <div className="w-full text-center py-2.5 px-4 rounded-lg border border-border-warm bg-canvas font-mono text-xs font-semibold tracking-wider text-text-primary uppercase shadow-xs">
              IT Asset Reconciliation &amp; Star Schema Architecture
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 2: Dual Source */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary font-mono text-left">
                  Dual-Source Ledger Ingestion
                </h4>
              </div>
              <p className="mt-1 text-xs text-text-muted pl-4 font-mono text-left">
                1,600 CMDB Registered Assets + 1,400 Network Discovery Active Logs
              </p>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 3: Staging & Fallback */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  SQLite Staging &amp; Multi-Tier Fallback Join Engine
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted font-mono border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ MAC address normalization (delimiter &amp; casing agnostic)</li>
                <li className="pl-2">├─ Serial number whitespace trimming &amp; regex sanitization</li>
                <li className="pl-2">└─ Tiered CTE fallback joins (Serial &rarr; MAC &rarr; Hostname)</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 4: Classification */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  Audit Exception Classification Engine
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted font-mono border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ Reconciled: Active registered hardware in compliance</li>
                <li className="pl-2">├─ Ghost Assets (175): Registered in CMDB, 0 network activity (&gt;90d)</li>
                <li className="pl-2">└─ Shadow Devices (40): Active on internal VLAN, missing from CMDB</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 5: BI Scorecard */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  Star Schema Data Warehouse &amp; Power BI Scorecard
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted font-mono border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ Financial Tagging: $350K refresh backlog &amp; $42K/yr idle software</li>
                <li className="pl-2">├─ Page 1-2: SLA Gap Analysis &amp; Shadow Device Quarantine Roster</li>
                <li className="pl-2">└─ Page 3-4: Ghost License Reclamation &amp; Refresh Horizon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Decisions Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Trade-Offs &amp; Analysis
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-4 text-left">
            Key Decisions &amp; Engineering Trade-Offs
          </h2>

          <div className="space-y-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Fallback Matching</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Tiered CTE Fallback Join Logic Over Strict Single-Key Matching
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Single-key joins resulted in hundreds of false mismatches due to minor serial formatting inconsistencies. Using sequential CTE tiers (Serial Number exact match, falling back to normalized MAC address, then Hostname) recovered legitimate matches and cut false discrepancies by 92%.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 02 · Financial Translation</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Financial Exposure Quantification Tied to Audit Exceptions
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Rather than delivering simple percentage match metrics, the schema linked unit purchase prices and operating system maintenance costs to exceptions. Quantifying $350K in delayed hardware refreshes and $42K/year in ghost software licenses gave leadership concrete business justification for IT action.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 03 · Star Schema</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Star Schema Separation of Facts and Discovery Dimensions in Power BI
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Decoupling reconciliation records from asset master tables into a clean star schema with optimized 1-to-many relationships accelerated DAX KPI calculations and enabled instant one-click drill-downs into shadow MAC address isolation lists.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-6 border-t border-border-warm flex flex-wrap items-center justify-between gap-4 text-left">
          <Link
            to="/"
            className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-surface text-text-primary border border-border-warm hover:bg-canvas text-xs font-medium rounded-lg transition-all duration-150 ease-out active:scale-[0.98] shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Projects</span>
          </Link>

          <a
            href="https://github.com/Karthiksai-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-text-primary text-surface hover:opacity-90 text-xs font-medium rounded-lg transition-all duration-150 ease-out active:scale-[0.98] shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View Code ↗</span>
          </a>
        </div>

        {/* Contact Section from Homepage */}
        <ContactSection />
      </main>

      {/* Footer from Homepage */}
      <Footer />
    </div>
  );
};

export default ItAssetCaseStudy;
