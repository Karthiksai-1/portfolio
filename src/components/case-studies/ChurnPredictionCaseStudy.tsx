import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import Navbar from '../Navbar';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

export const ChurnPredictionCaseStudy: React.FC = () => {
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
              Machine Learning // 03
            </span>
            <span className="text-slate-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              Independent Project
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2 mb-3 text-left">
            Customer Churn Prediction: Explainable ML Microservice with SHAP &amp; FastAPI
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
            An end-to-end customer churn prediction pipeline comparing Logistic Regression, Random Forest, and XGBoost, achieving 0.87 ROC-AUC with SHAP TreeExplainer for per-prediction interpretability, served as a containerized FastAPI microservice.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Scope</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Stack</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">Python · Scikit-Learn · XGBoost · FastAPI</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Latency</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">&lt; 45ms P95 per request</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Deployment</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">Dockerized Microservice</div>
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
            Model Benchmarks
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">0.87</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">ROC-AUC Score</div>
              <div className="text-xs text-slate-500 mt-0.5">Cross-Validated Champion</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Top 5</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">SHAP Risk Drivers</div>
              <div className="text-xs text-slate-500 mt-0.5">Actionable Per-Customer</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">&lt;45ms</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Inference Latency</div>
              <div className="text-xs text-slate-500 mt-0.5">Sub-50ms Production SLA</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl py-6 px-4 shadow-sm text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">100%</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Dockerized</div>
              <div className="text-xs text-slate-500 mt-0.5">Isolated Microservice</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal mt-4">
            Delivered an explainable machine learning microservice achieving 0.87 ROC-AUC that outputs exact per-customer risk factors via SHAP TreeExplainer in sub-45ms runtime, empowering retention agents to take preemptive action before contract churn.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">
            Opaque Probability Scores Fail to Drive Retention
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
            In subscription SaaS and telecom services, customer success agents refuse to act on raw statistical probabilities alone. Generating an opaque score like &ldquo;Account 4921 has an 82% churn probability&rdquo; without explaining root causes paralyzes intervention workflows:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">01 · Black-Box Barrier</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">No Root Cause Attribution</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                High-performance gradient boosted trees provide top predictive power but conceal individual feature contributions, preventing personalized retention incentives.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">02 · Imbalance Skew</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Class Imbalance Distortion</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                With churn events representing ~26% of accounts, optimizing for baseline accuracy creates high false-negative rates on high-value churners.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">03 · Latency Penalty</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Explanation Overhead</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                Traditional model-agnostic explainers (Kernel SHAP) require thousands of sampling permutations, taking seconds to execute and blowing past synchronous API budgets.
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
            How It Works: Tournament Training &amp; Polynomial TreeExplainer
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal mb-4">
            Customer telemetry is ingested, sanitized through scikit-learn transformers, modeled via XGBoost with calibrated probability thresholds, and served with polynomial SHAP feature rankings in an async FastAPI service.
          </p>

          {/* Clean Subtle Technical Blueprint */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 overflow-x-auto shadow-sm">
            <pre className="w-full max-w-full text-left mx-auto whitespace-pre font-mono text-[12px] leading-relaxed text-neutral-800">
{`┌────────────────────────────────────────────────────────────────────────┐
│                END-TO-END ML PIPELINE & SERVING ARCHITECTURE           │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Inbound Customer Telemetry (7,000+ Raw Accounts)                       │
│ Billing history · Support tickets · Contract duration · Usage logs     │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Scikit-Learn Preprocessing Pipeline                                    │
│ Median imputation · One-Hot categorical encoding · Standard scaling    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stratified 5-Fold Model Tournament                                     │
│ Logistic Regression (0.78) · Random Forest (0.83) · XGBoost (0.87 AUC) │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Champion XGBoost Model Serialized + Calibrated Threshold               │
│ Tuned classification threshold maximizing minority class recall (F1)   │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ SHAP TreeExplainer Local Attribution Engine                            │
│ Exact Shapley values calculated in polynomial time O(TLD²)             │
│ Top-5 positive & negative feature drivers extracted per account        │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Containerized FastAPI Microservice (<45ms P95 Latency)                 │
│ { "churn_risk": 0.82, "status": "Churn", "top_drivers": [...] }        │
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
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 01 · Objective Metric</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Prioritizing Recall &amp; F1 Over Raw Accuracy via Threshold Tuning
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                In churn prevention, false negatives (failing to identify an account that leaves) are far more costly than false positives (reaching out to a stable account). We evaluated precision-recall tradeoff curves and adjusted classification thresholds to maximize recall on the minority churn class.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 02 · Explainer Engine</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                TreeExplainer Over Kernel SHAP for Polynomial Time Calculation
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                Model-agnostic Kernel SHAP requires thousands of random evaluations per row, introducing multi-second latencies. Utilizing XGBoost-native <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">TreeExplainer</code> allows exact attribution computation directly from tree structure in &lt;20ms.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 03 · Pipeline Serialization</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Decoupled Preprocessing Pipeline Serialized with Model Artifacts
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                Encapsulated all scaling, one-hot encodings, and numerical imputation into a versioned pipeline bundle. Serializing the fitted preprocessor alongside the model artifact prevented train-serving skew and guaranteed seamless containerized reproducibility.
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

export default ChurnPredictionCaseStudy;
