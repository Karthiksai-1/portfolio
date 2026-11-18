import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Navbar from '../Navbar';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

export const Customer360CaseStudy: React.FC = () => {
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
            <span className="text-xs uppercase tracking-wider text-text-muted">
              Dimensional Modeling // 05
            </span>
            <span className="text-border-warm">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mt-2 mb-3 text-left">
            Customer 360 &amp; Retention Analytics: SQL Dimensional Modeling &amp; RFM Cohorts
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            A dimensional star schema data warehouse modeling 500,000+ e-commerce transactions in SQL, powering dynamic RFM customer segmentation, 12-month cohort retention heatmaps, and a 3-page executive Power BI dashboard.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-border-warm bg-surface shadow-sm mt-6 text-left">
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">SQL (Window Functions) · Power BI · DAX</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Transactions</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">541,000+ Records</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Dashboard</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">3-Page Executive Suite</div>
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
          <div className="text-xs uppercase tracking-wider text-text-muted">
            Analytics Impact
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">500K+</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Transactions Modeled</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Star Schema Warehouse</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">12 Mo</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Cohort Matrix</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Lifecycle Decay Tracking</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">11</div>
              <div className="text-xs font-semibold text-accent-text mt-1">RFM Segments</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Statistical Quintiles</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">71%</div>
              <div className="text-xs font-semibold text-accent-text mt-1">Revenue from Top 20%</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Champions &amp; Loyalists</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mt-4">
            Constructed a star schema data warehouse over 500,000+ transactions that uncovered significant customer lifecycle retention drop-offs masked by aggregate top-line growth, redirecting marketing spend toward high-LTV customer retention.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="text-xs uppercase tracking-wider text-text-muted">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            Aggregate Revenue Growth Hides Customer Churn
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            When e-commerce companies evaluate business performance solely on top-line monthly gross sales, severe customer attrition goes undetected beneath high acquisition budgets:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">01 · Leaky Bucket</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Retention Decay</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Monthly revenue grew 14% year-over-year while cohort analysis revealed that 68% of newly acquired customers never placed a repeat order within 90 days.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">02 · Flawed Cutoffs</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Static Thresholds</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Traditional marketing teams relied on static, hardcoded cutoffs (e.g. &ldquo;&gt;$100 is high spend&rdquo;) that broke down under holiday season fluctuations.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">03 · Distorted CLV</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Raw Cancellation Skew</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Ingesting raw ledger tables without isolating order cancellations (Invoice prefix &lsquo;C&rsquo;) distorted customer lifetime values and purchase frequency metrics.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="space-y-4 text-left">
          <div className="text-xs uppercase tracking-wider text-text-muted">
            System Topology
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            How It Works: Star Schema Warehousing &amp; Statistical Quintiles
          </h2>

          <p className="text-left text-[14px] leading-relaxed text-text-muted font-normal">
            Raw transactions are sanitized, transformed into a star schema data warehouse, and processed through SQL window functions to calculate dynamic RFM quintiles and cohort matrices:
          </p>

          {/* Clean, Left-Aligned Vertical Pipeline */}
          <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-6 my-6 text-left">
            {[
              {
                title: 'Transaction Stream Ingestion',
                description: 'Ingests 541,000+ raw e-commerce transaction records spanning multi-market product sales and customer geographies.',
                tags: ['Online Retail II', '541K Records', 'SQL Ledger']
              },
              {
                title: 'Data Sanitization Guardrails',
                description: "Filters out order cancellations (prefix 'C'), guest checkout nulls, sample SKUs, and negative unit price adjustments to ensure pristine accounting data.",
                tags: ['Cancellation Stripping', 'Null Scrubbing', 'Data Quality']
              },
              {
                title: 'Star Schema Dimensional Modeling',
                description: 'Decomposes flat transactions into a central Fact_Transactions table connected to Dim_Customer, Dim_Product, and Dim_Date dimension tables.',
                tags: ['Fact_Transactions', 'Star Schema', '58% Size Cut']
              },
              {
                title: 'Dynamic RFM Scoring via NTILE(5)',
                description: 'Applies SQL window functions to score Recency, Frequency, and Monetary quintiles dynamically, grouping accounts into 11 distinct behavioral personas.',
                tags: ['SQL NTILE(5)', 'Window Functions', '11 RFM Personas']
              },
              {
                title: '12-Month Cohort Retention Engine',
                description: 'Constructs triangular month-by-month cohort decay matrices tracking customer retention rates from Month 0 through Month 12.',
                tags: ['Cohort Analysis', '12-Month Horizon', 'Lifecycle Decay']
              },
              {
                title: 'Executive Power BI Dashboard',
                description: 'Visualizes revenue concentration, RFM segmentation maps, and cohort retention decay curves across a 3-page interactive executive suite.',
                tags: ['Power BI', 'DAX Measures', '3-Page Suite']
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {/* Pipeline Node */}
                <div className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-900 shadow-sm" />

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-semibold text-slate-400">
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
                      <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
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
            <div className="w-full text-center py-2.5 px-4 rounded-lg border border-border-warm bg-canvas text-xs font-semibold tracking-wider text-text-primary uppercase shadow-xs">
              Dimensional Star Schema &amp; Retention Pipeline
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 2: Ingestion Source */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  Raw E-Commerce Transaction Stream
                </h4>
              </div>
              <p className="mt-1 text-xs text-text-muted pl-4 text-left">
                541K Records · Online Retail II Dataset
              </p>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 3: Sanitization Guardrails */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  Data Sanitization &amp; Ingestion Guardrails
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ Strip order cancellations (Invoice prefix &apos;C&apos;)</li>
                <li className="pl-2">├─ Filter guest checkout nulls, sample SKUs &amp; negative prices</li>
                <li className="pl-2">└─ Standardize customer geographies &amp; ISO datetime formats</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 4: Star Schema Modeling */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  Star Schema Dimensional Modeling
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ <strong className="text-text-primary">Dim_Customer:</strong> CustomerID, Geography, Cohort Month</li>
                <li className="pl-2">├─ <strong className="text-text-primary">Dim_Product:</strong> StockCode, Description, Unit Price Tier</li>
                <li className="pl-2">├─ <strong className="text-text-primary">Dim_Date:</strong> Calendar Hierarchy, Fiscal Quarters, MoM Index</li>
                <li className="pl-2">└─ <strong className="text-text-primary">Fact_Transactions:</strong> InvoiceNo, Quantity, Revenue, Margin</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 5: Analytical Processing */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  Analytical Processing: Dynamic RFM &amp; Cohort Matrices
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ Recency, Frequency, Monetary scoring via SQL CTEs &amp; NTILE(5)</li>
                <li className="pl-2">└─ Unbound rolling 12-month cohort retention heatmaps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Decisions Section */}
        <section className="space-y-4 text-left">
          <div className="text-xs uppercase tracking-wider text-text-muted">
            Trade-Offs &amp; Analysis
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-4 text-left">
            Key Decisions &amp; Engineering Trade-Offs
          </h2>

          <div className="space-y-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Data Architecture</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Star Schema Dimensional Model Over Flat Transactional Tables
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Moving from a flat 541K row spreadsheet to a star schema with a central <code className="text-xs bg-canvas px-1.5 py-0.5 rounded text-text-primary border border-border-warm">Fact_Transactions</code> table and dedicated dimension tables eliminated repeated string overhead, reduced file size by 58%, and delivered instantaneous DAX calculation times.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 02 · Scoring Logic</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Dynamic Percentile Scoring with NTILE(5) Over Arbitrary Cutoffs
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Statistical quintiles automatically adapt to shifts in purchasing distributions, ensuring customer segmentation reflects genuine relative rank rather than rigid, decaying assumptions across seasonal cycles.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 03 · BI Visuals</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                DAX-Computed Monthly Cohort Retention Matrices
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Engineered custom DAX measures that track acquisition cohorts from Month 0 to Month 12. Visualizing retention as a color-coded matrix allowed immediate identification of which marketing channels produced high-decay versus sticky customers.
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
            <span>Back to Projects</span>
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

export default Customer360CaseStudy;
