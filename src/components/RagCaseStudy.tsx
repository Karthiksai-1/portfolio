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

        {/* Header & Metadata */}
        <header className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-text-muted">
              GenAI Architecture // 01
            </span>
            <span className="text-stone-300">·</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60">
              Independent Project
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-text-primary mt-2 mb-3 text-left">
            RAG Document Q&amp;A Assistant: Engineering a Grounded Retrieval Engine
          </h1>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            An enterprise-grade retrieval-augmented generation engine engineered to ingest dense multi-page documentation, perform vector similarity search with FAISS, and eliminate model hallucinations through deterministic source citations.
          </p>

          {/* 4-Column Balanced Metadata Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl border border-border-warm bg-surface shadow-sm mt-6 text-left">
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Scope</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Solo Architecture &amp; Implementation</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Stack</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">LangChain · FAISS · FastAPI · Streamlit</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Timeline</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">4 Weeks to Production</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-text-muted text-left">Deployment</div>
              <div className="text-text-primary font-semibold mt-1 text-left text-xs leading-normal">Streamlit Cloud / Fast CPU</div>
            </div>
          </div>

          {/* Action Links Neatly Positioned Below Metadata Card */}
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

            <a
              href="https://rag-document-qa-assistant.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-surface text-text-primary border border-border-warm hover:bg-canvas text-xs font-medium rounded-lg transition-all duration-150 ease-out active:scale-[0.98] shadow-sm"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Live Application</span>
            </a>
          </div>
        </header>

        {/* Results Section */}
        <section className="space-y-4 text-left">
          <div className="text-xs uppercase tracking-wider text-text-muted">
            Performance Metrics
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">Results &amp; Impact</h2>

          {/* 4 individual white cards with adequate vertical breathing room */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">95%</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Citation Accuracy</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Exact Page Provenance</div>
            </div>

            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">&lt;85ms</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Vector Lookup</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">FAISS IndexFlatIP</div>
            </div>

            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">-25%</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Regressions</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Deterministic Guardrails</div>
            </div>

            <div className="bg-surface border border-border-warm rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4 shadow-sm text-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">100+</div>
              <div className="text-xs font-semibold text-text-primary mt-1">Benchmarked Queries</div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5">Dense Multi-Page PDFs</div>
            </div>
          </div>

          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal mt-4">
            Eliminated extrapolation hallucinations across dense technical documentation by pairing FAISS inner-product vector search with strict source verification rules. Achieved sub-100ms retrieval and verified exact-page citation provenance for every generated response.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="space-y-4 text-left">
          <div className="text-xs uppercase tracking-wider text-text-muted">
            Problem Space
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-3 text-left">
            Enterprise Documentation Cannot Tolerate Hallucinations
          </h2>
          <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
            In enterprise settings, querying unstructured documentation—such as technical operating manuals, financial compliance guidelines, and contractual policies—using basic LLM prompts or naive out-of-the-box RAG pipelines causes three critical points of operational failure:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">01 · Slicing Bias</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Arbitrary Chunk Boundaries</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Blind character-length splitting cuts sentences and tabular figures in half, causing vector similarity to drop and missing key context.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">02 · Zero Provenance</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Loss of Audit Trail</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                Standard LLM responses lack page-level anchors, leaving compliance reviewers unable to verify which policy document generated the claim.
              </p>
            </div>

            <div className="bg-surface border border-border-warm rounded-2xl p-5 shadow-sm space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">03 · Extrapolation Drift</div>
              <h3 className="font-semibold text-text-primary text-sm text-left">Unchecked Hallucinations</h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[13px] text-text-muted leading-relaxed font-normal">
                When queries fall outside the document scope, unconstrained models invent believable fiction rather than declining with a deterministic refusal.
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
            How It Works: Grounded Ingestion &amp; Retrieval Pipeline
          </h2>

          <p className="text-left text-[14px] leading-relaxed text-text-muted font-normal">
            Every document follows an audit-grade data pipeline from ingestion to response synthesis, ensuring strict boundary preservation and verified excerpt attribution:
          </p>

          {/* Clean, Left-Aligned Vertical Pipeline */}
          <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-6 my-6 text-left">
            {[
              {
                title: 'Document Ingestion & Page-Level Partitioning',
                description: 'Extracts raw text via PyPDF, performs header and footer sanitization, and injects immutable document IDs and page numbers into each partition.',
                tags: ['PyPDF', 'Header/Footer Stripping', 'Page Tagging']
              },
              {
                title: 'Recursive Semantic Chunking',
                description: 'Splits sanitized documents using an 800-token window with 150-token sliding overlap to maintain conceptual continuity across headings and paragraphs.',
                tags: ['RecursiveSplitter', '800 Tokens', '150 Overlap']
              },
              {
                title: 'Vector Embeddings & Index Storage',
                description: 'Vectorizes each chunk with text-embedding-3-small (1536 dimensions) and indexes representations in a FAISS IndexFlatIP cosine similarity index.',
                tags: ['text-embedding-3-small', 'FAISS IndexFlatIP', 'Cosine Metric']
              },
              {
                title: 'Similarity Matching & Strict Score Gating',
                description: 'Retrieves top-4 candidate chunks and applies a hard cosine threshold cutoff (score ≥ 0.78). Queries below the threshold trigger an immediate refusal fallback.',
                tags: ['Top-k = 4', 'Score Gating ≥ 0.78', 'Deterministic Refusal']
              },
              {
                title: 'Grounded Generation & Citation Verification',
                description: 'Passes verified chunks to GPT-4o-mini with instructions to cite [Source: Page X] verbatim and refuse to answer if supporting evidence is missing.',
                tags: ['GPT-4o-mini', 'Citation Verifier', 'Zero Hallucination']
              },
              {
                title: 'Verified Structured Response Output',
                description: 'Delivers typed responses with validated citation objects containing the target page number and exact snippet matching the original source PDF.',
                tags: ['FastAPI', 'Streamlit', 'JSON Payload']
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
              Audit-Grade RAG Pipeline Architecture
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 2: Ingestion & Partitioning */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  1. Document Ingestion &amp; Page-Level Partitioning
                </h4>
              </div>
              <p className="mt-1 text-xs text-text-muted pl-4 text-left">
                PyPDF text extraction · Header/footer sanitization · Page metadata tagging
              </p>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 3: Semantic Chunking */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  2. Recursive Semantic Chunking
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ 800-token semantic sliding window</li>
                <li className="pl-2">├─ 150-token overlap preserving clause continuity</li>
                <li className="pl-2">└─ Injected immutable metadata: &#123;doc_id, page_no, chunk_id&#125;</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 4: Embeddings & Vector Index */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  3. Vector Embeddings &amp; Index Storage
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ <strong className="text-text-primary">Model:</strong> text-embedding-3-small (1536-dimensional dense vectors)</li>
                <li className="pl-2">├─ <strong className="text-text-primary">Index:</strong> FAISS IndexFlatIP (Inner Product / Cosine Similarity)</li>
                <li className="pl-2">└─ <strong className="text-text-primary">Query Vector:</strong> Real-time user prompt embedding transformation</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 5: Similarity & Score Gating */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  4. Similarity Matching &amp; Strict Score Gating
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ Top-k candidate extraction (k = 4 highest similarity chunks)</li>
                <li className="pl-2">├─ Hard threshold cutoff: Cosine similarity score &ge; 0.78</li>
                <li className="pl-2">└─ Out-of-domain guard: Deterministic refusal if candidate score &lt; 0.78</li>
              </ul>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center my-1 text-slate-300">
              <div className="h-4 w-px bg-slate-300"></div>
              <svg className="w-3.5 h-3.5 text-slate-400 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Stage 6: Grounded Synthesis */}
            <div className="w-full p-4 rounded-xl border border-border-warm bg-surface shadow-xs text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <h4 className="text-xs sm:text-sm font-semibold text-text-primary text-left">
                  5. Grounded Generation &amp; Verified Output
                </h4>
              </div>
              <ul className="space-y-1 pl-4 text-xs text-text-muted border-l-2 border-border-warm ml-1 text-left">
                <li className="pl-2">├─ GPT-4o-mini generation strictly constrained to retrieved context</li>
                <li className="pl-2">├─ Mandatory inline citation injection: [Source: Page X]</li>
                <li className="pl-2">└─ Structured JSON response with snippet verification payload</li>
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
            {/* Decision 1 */}
            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 01 · Chunking Strategy</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Recursive Character Chunking (800-Token Windows &amp; 150-Token Overlap) Over Fixed Slicing
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                Rather than blind fixed-length character splitting, we employed recursive splitting prioritized by paragraphs (<code className="text-xs bg-canvas px-1.5 py-0.5 rounded text-text-primary border border-border-warm">\n\n</code>), line breaks, and punctuation. An 800-token window preserves complete semantic arguments, while the 150-token sliding overlap ensures questions targeting boundary sentences do not suffer information loss.
              </p>
            </div>

            {/* Decision 2 */}
            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 02 · Vector Index Choice</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                FAISS IndexFlatIP (Exact Inner Product) Over Approximate Nearest Neighbors
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                For document sets spanning hundreds of pages (1,000–10,000 chunks), exact search using L2-normalized vectors and inner products executes in &lt;15ms directly on CPU. Avoiding approximate quantization (IVF or HNSW) preserved 100% recall of relevant chunks without unnecessary external vector database infrastructure overhead.
              </p>
            </div>

            {/* Decision 3 */}
            <div className="bg-surface border border-border-warm rounded-2xl p-6 shadow-sm mb-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-accent-text text-left">Decision 03 · Citation Verification Protocol</div>
              <h3 className="font-semibold text-text-primary text-base text-left">
                Deterministic Source Passage Grounding &amp; Relevance Score Refusal Cutoffs
              </h3>
              <p className="text-justify [text-align-last:left] hyphens-auto text-[14px] leading-relaxed text-text-muted font-normal">
                To guarantee zero-hallucination compliance, chunks were annotated with page number metadata injected directly into prompt tags (<code className="text-xs bg-canvas px-1.5 py-0.5 rounded text-text-primary border border-border-warm">[Source: Page X, Chunk Y]</code>). If similarity scores fell below the 0.78 relevance cutoff, the system returned an explicit refusal rather than attempting ungrounded generation.
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

          <div className="flex items-center gap-3">
            <a
              href="https://rag-document-qa-assistant.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 inline-flex items-center gap-1.5 bg-surface text-text-primary border border-border-warm hover:bg-canvas text-xs font-medium rounded-lg transition-all duration-150 ease-out active:scale-[0.98] shadow-sm"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>

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
