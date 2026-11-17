import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RagCaseStudy from './components/RagCaseStudy';
import LlmTestingCaseStudy from './components/case-studies/LlmTestingCaseStudy';
import ChurnPredictionCaseStudy from './components/case-studies/ChurnPredictionCaseStudy';
import ItAssetCaseStudy from './components/case-studies/ItAssetCaseStudy';
import Customer360CaseStudy from './components/case-studies/Customer360CaseStudy';
import SupplyChainCaseStudy from './components/case-studies/SupplyChainCaseStudy';

function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sticky Root Navigation */}
      <Navbar />

      {/* Disciplined Canvas Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16">
        <Hero />
        <ExperienceTimeline />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/rag-document-assistant" element={<RagCaseStudy />} />
        <Route path="/projects/llm-response-testing-framework" element={<LlmTestingCaseStudy />} />
        <Route path="/projects/customer-churn-prediction" element={<ChurnPredictionCaseStudy />} />
        <Route path="/projects/it-asset-reconciliation" element={<ItAssetCaseStudy />} />
        <Route path="/projects/customer-360-retention" element={<Customer360CaseStudy />} />
        <Route path="/projects/supply-chain-data-quality" element={<SupplyChainCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
