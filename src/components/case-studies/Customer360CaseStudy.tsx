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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-canvas text-text-primary font-sans antialiased selection:bg-accent-tint selection:text-accent-text">
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
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">SQL (Window Functions) · Power BI · DAX</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Transactions</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">541,000+ Records</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Dashboard</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">3-Page Executive Suite</div>
            </div>
          </div>

          {/* Action Link Neatly Positioned Below Metadata Card */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-left">
            <a
              href="https://github.com/Karthiksai-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-text-primary text-surface hover:opacity-90 text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub ↗</span>
            </a>
          </div>
        </header>

        {/* Results Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
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
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
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
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            System Topology
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            How It Works: Star Schema Warehousing &amp; Statistical Quintiles
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mb-4">
            Raw transactions are sanitized, transformed into a star schema data warehouse, and processed through SQL window functions to calculate dynamic RFM quintiles and cohort matrices.
          </p>

          {/* Clean Subtle Technical Blueprint */}
          <div className="w-full max-w-full overflow-x-auto rounded-xl border border-border-warm bg-canvas/70 p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-relaxed whitespace-pre shadow-sm">
            <pre className="w-full max-w-full text-left mx-auto whitespace-pre font-mono text-[10px] sm:text-xs leading-relaxed text-text-primary">
{`┌────────────────────────────────────────────────────────────────────────┐
│             DIMENSIONAL STAR SCHEMA & RETENTION PIPELINE               │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Raw E-Commerce Transaction Stream (541K Records, Online Retail II)     │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Data Sanitization & Ingestion Guardrails                               │
│ ├─ Strip order cancellations (Invoice prefix 'C')                      │
│ ├─ Filter guest checkout nulls, sample SKUs & negative unit prices     │
│ └─ Standardize customer geographies & ISO datetime formats             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Star Schema Dimensional Modeling                                       │
│ ├─ Dim_Customer (CustomerID, Geography, Acquisition Cohort Month)      │
│ ├─ Dim_Product (StockCode, Description, Unit Price Tier)               │
│ ├─ Dim_Date (Calendar Hierarchy, Fiscal Quarters, MoM Index)           │
│ └─ Fact_Transactions (InvoiceNo, Quantity, Revenue, Margin)            │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Analytical Processing: Dynamic RFM & Cohort Matrices                   │
│ ├─ Recency, Frequency, Monetary scoring via SQL NTILE(5)               │
│ ├─ 11 Behavioral Personas (Champions to Churned)                       │
│ └─ Month-by-month triangular cohort decay curves (Months 0-12)         │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3-Page Power BI Executive Suite                                        │
│ ├─ Page 1: Executive KPI Overview (Revenue, AOV, Active Buyers)        │
│ ├─ Page 2: RFM Matrix & Churn Risk Segmentation                        │
│ └─ Page 3: 12-Month Cohort Retention Heatmap with Decay Curves         │
└────────────────────────────────────────────────────────────────────────┘`}
            </pre>
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
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Data Architecture</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Star Schema Dimensional Model Over Flat Transactional Tables
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Moving from a flat 541K row spreadsheet to a star schema with a central <code className="text-xs bg-canvas px-1.5 py-0.5 rounded font-mono text-text-primary border border-border-warm">Fact_Transactions</code> table and dedicated dimension tables eliminated repeated string overhead, reduced file size by 58%, and delivered instantaneous DAX calculation times.
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
            className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-surface text-text-primary border border-border-warm hover:bg-canvas text-xs font-medium rounded-lg transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Projects</span>
          </Link>

          <a
            href="https://github.com/Karthiksai-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-text-primary text-surface hover:opacity-90 text-xs font-medium rounded-lg transition-colors shadow-sm"
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
