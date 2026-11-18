import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Navbar from '../Navbar';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

export const SupplyChainCaseStudy: React.FC = () => {
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
              Data Platform // 06
            </span>
            <span className="text-border-warm">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mt-2 mb-3 text-left">
            Supply Chain Analytics &amp; Data Quality CI/CD: Star Schema Logistics Modeling
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            A dimensional star-schema data warehouse modeling shipping delay risks and revenue impact across 180,000+ orders in Power BI, backed by an automated Python/SQL data quality validation harness running on GitHub Actions.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-border-warm bg-surface shadow-sm mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Python · SQL · Power BI · Actions</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Scale</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">180,000+ Orders</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Automation</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Daily Automated Gate</div>
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
            Pipeline Reliability
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">180K+</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Orders Modeled</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Global Logistics Feed</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">100%</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Daily CI Runs</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Automated Execution</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">0</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Manual Checks</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">12h/Month QA Saved</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">4 Dims</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Star Schema</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Optimized Analytics</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mt-4">
            Eliminated manual data sanity checks and dashboard calculation errors by shifting data quality tests into an automated GitHub Actions CI/CD gate, feeding certified logistics data into an executive Power BI risk monitor.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            Upstream Telemetry Drift Corrupts Logistics Reporting
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            Global supply chain feeds regularly experience silent ingestion corruption: out-of-order tracking events, timezone conversion bugs, and orphan customer records generated during guest purchases:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">01 · Time Travel</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Negative Durations</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Conflicting UTC offsets caused over 1,200 orders to log delivery timestamps before order shipment, corrupting carrier SLA calculations.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">02 · Manual Testing</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Analyst QA Fatigue</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Engineers spent 3+ hours every week running repetitive SQL spot-checks to verify table integrity before refreshing executive reports.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">03 · Carrier Risk</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Unmonitored Bottlenecks</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Without route-level risk segmentation, logistics leaders could not identify which specific shipping methods produced the highest late delivery frequency.
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
            How It Works: Automated CI/CD Gates &amp; Star Schema Warehousing
          </h2>

          <p className="text-left text-[14px] leading-relaxed text-text-muted font-normal">
            Every data update triggers a GitHub Actions test runner executing 12 deterministic data quality assertions. Only validated data updates populate the dimensional warehouse and Power BI model:
          </p>

          {/* Clean, Left-Aligned Vertical Pipeline */}
          <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-6 my-6 text-left">
            {[
              {
                title: 'Logistics Feed Ingestion',
                description: 'Streams 180,000+ global supply chain order records with international shipping routes, carrier tiers, and transit telemetry.',
                tags: ['DataCo Feed', '180,000+ Orders', 'Global Logistics']
              },
              {
                title: 'Automated Shift-Left CI/CD Quality Gate',
                description: 'Executes 12 deterministic data quality assertions in GitHub Actions prior to database ingestion, eliminating bad data at the source.',
                tags: ['GitHub Actions', '12 Assertions', 'CI/CD Gate']
              },
              {
                title: 'Referential & Temporal Integrity Assertions',
                description: 'Validates zero orphan foreign keys and verifies delivery dates strictly follow shipment timestamps, catching time-travel data corruption.',
                tags: ['Zero Orphan Keys', 'Temporal Consistency', 'Domain Boundaries']
              },
              {
                title: 'Dimensional Warehouse Modeling',
                description: 'Decomposes 53-column flat files into a 4-dimension star schema (Geography, Shipping Mode, Customer, Product) with an optimized Fact_Orders table.',
                tags: ['Star Schema', '4 Dimensions', '62% Storage Cut']
              },
              {
                title: 'Route & Carrier Risk Segmentation',
                description: 'Analyzes late shipment frequencies by fulfillment tier, uncovering a 54.8% late delivery rate in premium First Class vs 31.2% in Standard Class.',
                tags: ['Carrier SLA', 'First Class vs Standard', 'Delay Attribution']
              },
              {
                title: 'Power BI Executive Risk Monitor',
                description: 'Publishes certified logistics data to an executive Power BI suite featuring late delivery risk heatmaps and delay financial impact models.',
                tags: ['Power BI', 'DAX Metrics', 'Executive Risk Suite']
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

          {/* Architecture Schema */}
          <pre className="w-full overflow-x-auto whitespace-pre text-left font-mono text-xs bg-slate-900 text-slate-100 p-4 rounded-xl leading-relaxed">
{`┌────────────────────────────────────────────────────────────────────────┐
│               AUTOMATED CI/CD DATA QUALITY & BI PIPELINE               │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Inbound Supply Chain Feed (180,000+ DataCo Logistics Orders)           │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ GitHub Actions Automated CI/CD Data Quality Gate                       │
│ ├─ Rule 1: No negative shipping durations (Prevent time travel)        │
│ ├─ Rule 2: Scheduled delivery days strictly positive (>0)              │
│ ├─ Rule 3: Zero orphan foreign keys (Customer, Location, Product)      │
│ └─ Rule 4: Revenue & order item total domain boundaries                │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                        [100% Assertions Passed]
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Star Schema Dimensional Warehouse                                      │
│ ├─ Dim_Geography (Market, Region, Country, City, ZIP)                  │
│ ├─ Dim_Shipping_Mode (Standard, First Class, Same Day)                 │
│ ├─ Dim_Customer (Segment, Lifetime Order Count)                        │
│ ├─ Dim_Product (Category, Department, Price Tier)                      │
│ └─ Fact_Orders (Shipping Delay Days, Order Profit, Late Flag)          │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Power BI Executive Logistics Suite                                     │
│ ├─ Late Delivery Risk Heatmap across Global Corridors                  │
│ ├─ Carrier SLA Performance & Route Choke Point Isolation               │
│ └─ Financial Impact Matrix: Delayed Revenue vs On-Time Deliveries      │
└────────────────────────────────────────────────────────────────────────┘`}
          </pre>
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
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Shift-Left Testing</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Automated Shift-Left Data Quality Testing in GitHub Actions
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Treating data quality assertions as automated CI tests prevents bad data from ever reaching executive dashboards. If any record violates referential integrity or contains negative transit days, the pipeline immediately halts with actionable diagnostic logs.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 02 · Dimensional Modeling</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Star Schema Dimensional Model Across 4 High-Cardinality Dimensions
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Decomposed the 53-column flat file into clean dimension tables (<code className="text-xs bg-canvas px-1.5 py-0.5 rounded font-mono text-text-primary border border-border-warm">Geography</code>, <code className="text-xs bg-canvas px-1.5 py-0.5 rounded font-mono text-text-primary border border-border-warm">Shipping Mode</code>, <code className="text-xs bg-canvas px-1.5 py-0.5 rounded font-mono text-text-primary border border-border-warm">Customer</code>, and <code className="text-xs bg-canvas px-1.5 py-0.5 rounded font-mono text-text-primary border border-border-warm">Product</code>). This reduced storage footprint by 62% and eliminated expensive bidirectional filtering in Power BI.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 03 · SLA Risk Segmentation</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Shipping Method Risk Segmentation Uncovering Premium Delay Concentration
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Segmenting late deliveries by fulfillment tier revealed that &ldquo;First Class&rdquo; shipments experienced a 54.8% late delivery rate compared to 31.2% for Standard Class. This proved that premium-paying customers suffered the greatest delay frequencies, giving supply chain directors data to renegotiate SLA contracts.
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

export default SupplyChainCaseStudy;
