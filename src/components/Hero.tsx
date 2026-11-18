import { Download, ArrowRight, Mail } from 'lucide-react';
import { profile, bio, proofMetrics } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="space-y-8 pt-4">
      {/* Status Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-tint text-accent-text border border-amber-300/60 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-text animate-pulse" />
        <span>{bio.headline}</span>
      </div>

      {/* Headline & Sub-headline */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
          {profile.name}
        </h1>
        <p className="text-base sm:text-lg font-medium text-text-muted">
          {profile.subHeadline}
        </p>
      </div>

      {/* Bio text */}
      <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-3xl">
        {bio.summary}
      </p>

      {/* Action Row */}
      <div className="flex flex-wrap items-center gap-2.5 pt-2">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-text-primary text-surface hover:opacity-90 text-xs font-medium px-5 py-2.5 rounded-xl transition-all duration-150 ease-out active:scale-[0.98] shadow-sm text-center"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface text-text-primary border border-border-warm hover:bg-canvas px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-150 ease-out active:scale-[0.98] text-sm text-center"
        >
          <Download className="w-4 h-4 text-text-muted" />
          <span>Resume</span>
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface text-text-primary border border-border-warm hover:bg-canvas px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-150 ease-out active:scale-[0.98] text-sm text-center"
        >
          <Mail className="w-4 h-4 text-text-muted" />
          <span>Contact Me</span>
        </a>
      </div>

      {/* Proof Strip (4 Stats in Crisp White Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
        {proofMetrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-surface border border-border-warm shadow-sm rounded-xl p-4 text-center transition-all duration-300 hover:shadow-md hover:border-stone-300"
          >
            <div className="text-xl sm:text-2xl font-bold text-text-primary">
              {metric.value}
            </div>
            <div className="text-[11px] sm:text-xs text-text-muted font-medium mt-1 leading-snug">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
