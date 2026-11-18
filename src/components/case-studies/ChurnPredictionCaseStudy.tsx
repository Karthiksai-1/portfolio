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
              Machine Learning // 03
            </span>
            <span className="text-stone-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mt-2 mb-3 text-left">
            Customer Churn Prediction: Explainable ML Microservice with SHAP &amp; FastAPI
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            An end-to-end customer churn prediction pipeline comparing Logistic Regression, Random Forest, and XGBoost, achieving 0.87 ROC-AUC with SHAP TreeExplainer for per-prediction interpretability, served as a containerized FastAPI microservice.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-border-warm bg-surface shadow-sm mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Python · Scikit-Learn · XGBoost · FastAPI</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Latency</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">&lt; 45ms P95 per request</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-text-muted text-left">Deployment</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Dockerized Microservice</div>
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
            Model Benchmarks
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">Results &amp; Impact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">0.87</div>
              <div className="text-xs font-semibold text-text-primary mt-1">ROC-AUC Score</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Cross-Validated Champion</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">Top 5</div>
              <div className="text-xs font-semibold text-text-primary mt-1">SHAP Risk Drivers</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Actionable Per-Customer</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">&lt;45ms</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Inference Latency</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Sub-50ms Production SLA</div>
            </div>
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">100%</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Dockerized</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Isolated Microservice</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mt-4">
            Delivered an explainable machine learning microservice achieving 0.87 ROC-AUC that outputs exact per-customer risk factors via SHAP TreeExplainer in sub-45ms runtime, empowering retention agents to take preemptive action before contract churn.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            Opaque Probability Scores Fail to Drive Retention
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            In subscription SaaS and telecom services, customer success agents refuse to act on raw statistical probabilities alone. Generating an opaque score like &ldquo;Account 4921 has an 82% churn probability&rdquo; without explaining root causes paralyzes intervention workflows:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">01 · Black-Box Barrier</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">No Root Cause Attribution</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                High-performance gradient boosted trees provide top predictive power but conceal individual feature contributions, preventing personalized retention incentives.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">02 · Imbalance Skew</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Class Imbalance Distortion</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                With churn events representing ~26% of accounts, optimizing for baseline accuracy creates high false-negative rates on high-value churners.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">03 · Latency Penalty</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Explanation Overhead</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Traditional model-agnostic explainers (Kernel SHAP) require thousands of sampling permutations, taking seconds to execute and blowing past synchronous API budgets.
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
            How It Works: Tournament Training &amp; Polynomial TreeExplainer
          </h2>

          <p className="text-left text-[14px] leading-relaxed text-text-muted font-normal">
            Customer telemetry is ingested, sanitized through scikit-learn transformers, modeled via XGBoost with calibrated probability thresholds, and served with polynomial SHAP feature rankings in an async FastAPI service:
          </p>

          {/* Clean, Left-Aligned Vertical Pipeline */}
          <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-6 my-6 text-left">
            {[
              {
                title: 'Inbound Telemetry Ingestion',
                description: 'Ingests 7,000+ raw customer accounts covering multi-year billing history, support tickets, contract duration, and daily usage logs.',
                tags: ['Raw Ingestion', 'Billing Logs', '7,000+ Accounts']
              },
              {
                title: 'Scikit-Learn Transformer Pipeline',
                description: 'Imputes missing values with median statistics, encodes categorical features via One-Hot encoding, and standardizes continuous variables.',
                tags: ['scikit-learn', 'Median Imputer', 'StandardScaler']
              },
              {
                title: 'Stratified 5-Fold Model Tournament',
                description: 'Trains and evaluates candidate classifiers (Logistic Regression 0.78, Random Forest 0.83, XGBoost 0.87 AUC) under rigorous cross-validation.',
                tags: ['StratifiedKFold', 'XGBoost', '0.87 ROC-AUC']
              },
              {
                title: 'Optimal Threshold Calibration',
                description: 'Calibrates decision boundary from default 0.50 down to 0.38 to balance precision against business-critical churn recall, maximizing revenue retention.',
                tags: ['Threshold 0.38', 'F1 Optimization', 'Recall Maximization']
              },
              {
                title: 'SHAP TreeExplainer Local Attribution',
                description: 'Calculates exact Shapley feature importance in polynomial time O(TLD²), extracting top positive and negative risk factors for individual accounts.',
                tags: ['SHAP TreeExplainer', 'Polynomial O(TLD²)', 'Local Attribution']
              },
              {
                title: 'Asynchronous Microservice Inference',
                description: 'Serves real-time inference with P95 latency under 45ms via containerized FastAPI, returning predicted risk score and top account drivers.',
                tags: ['FastAPI', 'Docker', '<45ms P95']
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
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Objective Metric</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Prioritizing Recall &amp; F1 Over Raw Accuracy via Threshold Tuning
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                In churn prevention, false negatives (failing to identify an account that leaves) are far more costly than false positives (reaching out to a stable account). We evaluated precision-recall tradeoff curves and adjusted classification thresholds to maximize recall on the minority churn class.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 02 · Explainer Engine</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                TreeExplainer Over Kernel SHAP for Polynomial Time Calculation
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Model-agnostic Kernel SHAP requires thousands of random evaluations per row, introducing multi-second latencies. Utilizing XGBoost-native <code className="text-xs bg-canvas px-1.5 py-0.5 rounded font-mono text-text-primary border border-border-warm">TreeExplainer</code> allows exact attribution computation directly from tree structure in &lt;20ms.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 03 · Pipeline Serialization</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Decoupled Preprocessing Pipeline Serialized with Model Artifacts
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Encapsulated all scaling, one-hot encodings, and numerical imputation into a versioned pipeline bundle. Serializing the fitted preprocessor alongside the model artifact prevented train-serving skew and guaranteed seamless containerized reproducibility.
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

export default ChurnPredictionCaseStudy;
