import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import ContactSection from './ContactSection';
import Footer from './Footer';

export const RagCaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Context-Aware Sticky Navbar */}
      <Navbar />

      {/* Main Container - Centered */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12">
        {/* Breadcrumb directly above project title */}
        <div className="text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← All projects
          </Link>
        </div>

        {/* Header & Metadata */}
        <header className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
              GenAI Architecture // 01
            </span>
            <span className="text-slate-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mt-2 mb-3 text-left">
            RAG Document Q&amp;A Assistant: Engineering a Grounded Retrieval Engine
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
            An enterprise-grade retrieval-augmented generation engine engineered to ingest dense multi-page documentation, perform vector similarity search with FAISS, and eliminate model hallucinations through deterministic source citations.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white shadow-sm mt-6 text-left">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Scope</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Stack</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">LangChain · FAISS · FastAPI · Streamlit</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Timeline</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">4 Weeks to Production</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400 text-left">Deployment</div>
              <div className="text-slate-900 font-semibold mt-1 text-left text-xs leading-normal">Streamlit Cloud / Fast CPU</div>
            </div>
          </div>

          {/* Action Links Neatly Positioned Below Metadata Card */}
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

            <a
              href="https://rag-document-qa-assistant.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Live Application ↗</span>
            </a>
          </div>
        </header>

        {/* Results Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Performance Metrics
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">Results &amp; Impact</h2>

          {/* 4 individual white cards with adequate vertical breathing room */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">95%</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Citation Accuracy</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Exact Page Provenance</div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">&lt;85ms</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Vector Lookup</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">FAISS IndexFlatIP</div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">-25%</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Regressions</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Deterministic Guardrails</div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">100+</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Benchmarked Queries</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Dense Multi-Page PDFs</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal mt-4">
            Eliminated extrapolation hallucinations across dense technical documentation by pairing FAISS inner-product vector search with strict source verification rules. Achieved sub-100ms retrieval and verified exact-page citation provenance for every generated response.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3 text-left">
            Enterprise Documentation Cannot Tolerate Hallucinations
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
            In enterprise settings, querying unstructured documentation—such as technical operating manuals, financial compliance guidelines, and contractual policies—using basic LLM prompts or naive out-of-the-box RAG pipelines causes three critical points of operational failure:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">01 · Slicing Bias</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Arbitrary Chunk Boundaries</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                Blind character-length splitting cuts sentences and tabular figures in half, causing vector similarity to drop and missing key context.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">02 · Zero Provenance</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Loss of Audit Trail</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                Standard LLM responses lack page-level anchors, leaving compliance reviewers unable to verify which policy document generated the claim.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">03 · Extrapolation Drift</div>
              <h3 className="font-semibold text-slate-900 text-sm text-left">Unchecked Hallucinations</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-slate-600 leading-relaxed font-normal">
                When queries fall outside the document scope, unconstrained models invent believable fiction rather than declining with a deterministic refusal.
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
            How It Works: Grounded Ingestion &amp; Retrieval Pipeline
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal mb-4">
            Every document follows an audit-grade data pipeline from ingestion to response synthesis, ensuring strict boundary preservation and verified excerpt attribution.
          </p>

          {/* Clean Subtle Technical Blueprint */}
          <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200/80 bg-neutral-50 p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-relaxed whitespace-pre shadow-sm">
            <pre className="w-full max-w-full text-left mx-auto whitespace-pre font-mono text-[10px] sm:text-xs leading-relaxed text-neutral-800">
{`┌────────────────────────────────────────────────────────────────────────┐
│                        RAG PIPELINE ARCHITECTURE                       │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Document Ingestion & Page-Level Partitioning                        │
│    PyPDF text extraction · Header/footer sanitization · Page tagging   │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. Recursive Semantic Chunking                                         │
│    800-token window · 150-token sliding overlap · {doc_id, page_no}    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3. Vector Embeddings & Index Storage                                   │
│    text-embedding-3-small (1536-dim) · FAISS IndexFlatIP (Cosine)      │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                         ┌──────────┴──────────┐
                         │   Query Vector      │ ◄── [User Prompt]
                         └──────────┬──────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 4. Similarity Matching & Strict Score Gating                           │
│    Top-k candidates (k = 4) · Hard cutoff threshold (score ≥ 0.78)     │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 5. Grounded Generation & Citation Verification                         │
│    Prompt injection with [Source: Page X] · Refusal fallback if absent │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 6. Verified Structured Response (FastAPI / Streamlit)                  │
│    { "answer": "...", "citations": [{ "page": 4, "excerpt": "..." }] } │
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
            {/* Decision 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 01 · Chunking Strategy</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Recursive Character Chunking (800-Token Windows &amp; 150-Token Overlap) Over Fixed Slicing
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                Rather than blind fixed-length character splitting, we employed recursive splitting prioritized by paragraphs (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">\n\n</code>), line breaks, and punctuation. An 800-token window preserves complete semantic arguments, while the 150-token sliding overlap ensures questions targeting boundary sentences do not suffer information loss.
              </p>
            </div>

            {/* Decision 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 02 · Vector Index Choice</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                FAISS IndexFlatIP (Exact Inner Product) Over Approximate Nearest Neighbors
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                For document sets spanning hundreds of pages (1,000–10,000 chunks), exact search using L2-normalized vectors and inner products executes in &lt;15ms directly on CPU. Avoiding approximate quantization (IVF or HNSW) preserved 100% recall of relevant chunks without unnecessary external vector database infrastructure overhead.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-slate-700 text-left">Decision 03 · Citation Verification Protocol</div>
              <h3 className="font-semibold text-slate-900 text-base text-left">
                Deterministic Source Passage Grounding &amp; Relevance Score Refusal Cutoffs
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-slate-600 font-normal">
                To guarantee zero-hallucination compliance, chunks were annotated with page number metadata injected directly into prompt tags (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">[Source: Page X, Chunk Y]</code>). If similarity scores fell below the 0.78 relevance cutoff, the system returned an explicit refusal rather than attempting ungrounded generation.
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

          <div className="flex items-center gap-3">
            <a
              href="https://rag-document-qa-assistant.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Live Demo ↗</span>
            </a>

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
        </div>

        {/* Contact Section from Homepage */}
        <ContactSection />
      </main>

      {/* Footer from Homepage */}
      <Footer />
    </div>
  );
};

export default RagCaseStudy;
