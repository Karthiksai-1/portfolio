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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Context-Aware Sticky Navbar */}
      <Navbar />

      {/* Main Container - Centered */}
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Breadcrumb directly above project title */}
        <div className="text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← All projects
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Enterprise Audit // 04
            </span>
            <span className="text-slate-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              Independent Project
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2 mb-3 text-left">
            IT Asset Reconciliation: Auditing 1,600 Enterprise Assets with SQL &amp; Power BI
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
            An enterprise reconciliation engine modeling 1,600 hardware and software assets in SQLite against network discovery feeds, identifying an 89.1% match rate (against a 95% SLA target) and exposing 40 shadow devices and $350K in refresh backlog via Power BI.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Scope</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Stack</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">SQLite · SQL (CTEs) · Power BI · Python</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Volume</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">1,600 Registered Assets</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Audit Report</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">4-Page Power BI Suite</div>
            </div>
          </div>

          {/* Action Link Neatly Positioned Below Metadata Card */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-left">
            <a
              href="https://github.com/Karthiksai-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-slate-900 text-white hover:bg-slate-800 text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub ↗</span>
            </a>
          </div>
        </header>

        {/* Results Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Audit Outcomes
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">1.6K+</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Assets Audited</div>
              <div className="text-xs text-slate-500 mt-0.5">Full Estate Reconciliation</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">89.1%</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Match Rate</div>
              <div className="text-xs text-slate-500 mt-0.5">Against 95% SLA Target</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">40</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Shadow Devices</div>
              <div className="text-xs text-slate-500 mt-0.5">Unmanaged Endpoints</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">$350K</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Refresh Backlog</div>
              <div className="text-xs text-slate-500 mt-0.5">Out-of-Warranty Hardware</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal mt-4">
            Architected a multi-tiered SQL reconciliation engine that isolated corporate CMDB drift, quantified $350K in out-of-warranty hardware failure exposure, and exposed 40 rogue network endpoints without endpoint agents.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">
            CMDB Registers Drift from Live Network Telemetry
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
            Large enterprises maintain static asset management inventories (ITAM) completely separate from operational network discovery scanners. This disconnect causes two major vulnerabilities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">01 · Idle Licenses</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Ghost Assets</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                175 registered enterprise endpoints showed zero network discovery pings for over 90 days, wasting annual SaaS licenses and active warranties.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">02 · Security Blindspots</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Shadow Devices</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                40 active devices communicating on corporate subnets were unlisted in the official registry, lacking enterprise antivirus agents and patch tracking.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">03 · Key Incompatibilities</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Telemetry Discrepancies</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                Serial numbers contain inconsistent whitespace, while MAC addresses vary across hyphens, colons, and uppercase conventions across vendors.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            System Topology
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">
            How It Works: Tiered SQL Reconciliation &amp; Star Schema Audit Architecture
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal mb-4">
            The engine stages raw inventory records alongside network telemetry into SQLite, reconciles via tiered fallback joins, and models the output into a star schema consumed by Power BI.
          </p>

          {/* Clean Subtle Technical Blueprint */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 overflow-x-auto shadow-sm">
            <pre className="w-full max-w-full text-left mx-auto whitespace-pre font-mono text-[12px] leading-relaxed text-neutral-800">
{`┌────────────────────────────────────────────────────────────────────────┐
│                IT ASSET RECONCILIATION DATA ARCHITECTURE               │
└────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┴───────────────────────────┐
        ▼                                                       ▼
┌──────────────────────────────┐        ┌──────────────────────────────┐
│ CMDB Inventory Register      │        │ Active Network Discovery     │
│ 1,600 Registered Assets      │        │ 1,400 Discovery Logs         │
└──────────────┬───────────────┘        └──────────────┬───────────────┘
               │                                       │
               └───────────────────┬───────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ SQLite Staging & Multi-Tier Fallback Join Engine                       │
│ ├─ Tier 1: Serial Number Exact Match (Sanitized, whitespace-trimmed)   │
│ ├─ Tier 2: MAC Address Fallback (Normalized colon/hyphen agnostic)     │
│ └─ Tier 3: Hostname Fuzzy Heuristic Match                              │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Audit Exception Classification Engine                                  │
│ ├─ Reconciled: Active registered hardware                              │
│ ├─ Ghost Assets (175): Registered in CMDB, 0 network activity (>90d)   │
│ ├─ Shadow Devices (40): Active on internal VLAN, missing from CMDB     │
│ └─ Financial Tagging: $350K refresh backlog & $42K/yr idle software    │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Star Schema Data Warehouse & 4-Page Power BI Scorecard                 │
│ ├─ Page 1: SLA Gap Analysis (89.1% actual vs 95% target)               │
│ ├─ Page 2: Shadow Device Security Quarantine Roster                    │
│ ├─ Page 3: Ghost Asset License Reclamation Engine                      │
│ └─ Page 4: $350K Hardware Refresh Horizon                              │
└────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </section>

        {/* Key Decisions Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Trade-Offs &amp; Analysis
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4 text-left">
            Key Decisions &amp; Engineering Trade-Offs
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 01 · Fallback Matching</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Tiered CTE Fallback Join Logic Over Strict Single-Key Matching
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                Single-key joins resulted in hundreds of false mismatches due to minor serial formatting inconsistencies. Using sequential CTE tiers (Serial Number exact match, falling back to normalized MAC address, then Hostname) recovered legitimate matches and cut false discrepancies by 92%.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 02 · Financial Translation</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Financial Exposure Quantification Tied to Audit Exceptions
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                Rather than delivering simple percentage match metrics, the schema linked unit purchase prices and operating system maintenance costs to exceptions. Quantifying $350K in delayed hardware refreshes and $42K/year in ghost software licenses gave leadership concrete business justification for IT action.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 03 · Star Schema</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Star Schema Separation of Facts and Discovery Dimensions in Power BI
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                Decoupling reconciliation records from asset master tables into a clean star schema with optimized 1-to-many relationships accelerated DAX KPI calculations and enabled instant one-click drill-downs into shadow MAC address isolation lists.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-left">
          <Link
            to="/"
            className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 text-xs font-medium rounded-lg transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Projects</span>
          </Link>

          <a
            href="https://github.com/Karthiksai-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-slate-900 text-white hover:bg-slate-800 text-xs font-medium rounded-lg transition-colors shadow-sm"
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
