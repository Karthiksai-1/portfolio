import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Navbar from '../Navbar';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

export const LlmTestingCaseStudy: React.FC = () => {
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
              Evaluation &amp; CI/CD // 02
            </span>
            <span className="text-stone-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mt-2 mb-3 text-left">
            LLM Response Testing Framework: Preventing Prompt Regressions
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            An automated prompt evaluation test harness built with Pytest that runs deterministic and semantic assertion suites across prompt iterations and model updates, reducing regressions by 25%.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-border-warm bg-surface shadow-sm mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Python · Pytest · JSON Schema · Actions</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Timeline</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">3 Weeks to Production</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">CI/CD Run</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Pre-Merge Gate</div>
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
            Evaluation Benchmarks
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">-25%</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Prompt Regressions</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Prevented Pre-Merge</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">100+</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Automated Assertions</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Deterministic &amp; Semantic</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">&lt;3.5s</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Suite Latency</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Tier 1 Fast Assertions</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">0</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Schema Leaks</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Zero Output Violations</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mt-4">
            Eliminated silent prompt regressions by establishing deterministic unit assertions for JSON schema compliance alongside dual-evaluator LLM-as-a-judge tests for semantic tone and hallucination guardrails in GitHub Actions.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            Silent Prompt Drift Breaks Production Microservices
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            When developers tweak system prompts or model providers ship minor checkpoints, LLM outputs drift unpredictably. In production systems consuming structured LLM outputs, non-deterministic drift triggers immediate downstream crashes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">01 · API Breakage</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Schema Mismatches</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Minor prompt modifications cause models to omit required JSON keys, change date formatting, or wrap JSON objects inside conversational markdown tags.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">02 · Subjective QA</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Vibe-Based Testing</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Teams manually spot-check 3 to 5 sample prompts in a playground and assume the system is safe to release, missing regressions in edge scenarios.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">03 · Upstream Drift</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Model Volatility</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Upgrading foundation model versions often causes behavioral shifts that slip through without automated differential testing.
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
            How It Works: Dual-Tier CI/CD Evaluation Harness
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mb-4">
            The harness executes on pull requests against prompt files, running deterministic syntax assertions followed by semantic LLM-as-a-judge evaluations with strict scoring thresholds.
          </p>

          {/* Clean Subtle Technical Blueprint */}
          <div className="w-full max-w-full overflow-x-auto rounded-xl border border-border-warm bg-canvas/70 p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-relaxed whitespace-pre shadow-sm">
            <pre className="w-full max-w-full text-left mx-auto whitespace-pre font-mono text-[10px] sm:text-xs leading-relaxed text-text-primary">
{`┌────────────────────────────────────────────────────────────────────────┐
│                  PROMPT CI/CD TEST EVALUATION HARNESS                  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ [Git Commit / Pull Request: System Prompt Mutation]                    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ GitHub Actions Runner Triggered                                        │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 1: DETERMINISTIC ASSERTIONS (Fast & Zero Cost · <100ms)           │
│ ├─ Strict JSON Schema Conformance (Pydantic models)                    │
│ ├─ Regex Pattern Matching & Length / Token Budgets                     │
│ ├─ Blacklisted Tokens, Toxic Substrings & PII Leak Guard               │
│ └─ HTTP Parse Stability Benchmarks                                     │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                        [Tier 1 Suite Passes]
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 2: SEMANTIC LLM-AS-A-JUDGE (Differential Evaluation)              │
│ ├─ Benchmark Test Battery (100+ standard reference prompts)            │
│ ├─ Evaluator Model Scoring: Factual Grounding, Tone & Safety           │
│ └─ Delta Comparison against Baseline Checkpoint Scores                 │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MERGE DECISION & AUTOMATED REPORTERS                                   │
│ ├─ Regression Delta < 0% ──► BLOCK PR MERGE                            │
│ └─ Automated Diagnostic Markdown Report Posted to PR Thread            │
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
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Assertion Hierarchy</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Tiered Assertion Hierarchy (Fast Zero-Cost Assertions Before LLM Judge)
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Calling LLM-as-a-judge for every single commit is slow and expensive. We split the suite into Tier 1 (deterministic regex, JSON schema validation, latency budgets running in &lt;100ms for zero cost) and Tier 2 (LLM-as-a-judge semantic evaluations triggered only when Tier 1 passes). This cut test suite API costs by 73%.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 02 · Schema Validation</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Strict JSON Schema Enforcement with Pydantic Validation Contracts
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Every structured prompt is paired with a compiled Pydantic model. Assertions verify not just that the string parses as JSON, but that all required types, field names, and enum values conform exactly to the contract consumed by downstream microservices.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 03 · CI Gate Policy</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                CI/CD Regression Blocking with Automated Diagnostic Diffs
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Integrated directly into GitHub Actions with a zero-regression tolerance policy. Any pull request that drops semantic faithfulness or increases latency past the predefined budget fails the build and posts an inline markdown diff table highlighting the exact failed test cases.
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

export default LlmTestingCaseStudy;
