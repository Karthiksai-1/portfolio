import { Mail, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="space-y-4 pt-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">
          Contact
        </h2>
        <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
          Currently evaluating full-time engineering opportunities across Applied AI, Generative AI Systems, and Enterprise Data Analytics. For inquiries, please reach out directly via email.
        </p>
      </div>

      {/* Clean standalone inline action items directly beneath text description */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
        {/* Direct Email Link */}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent-text transition-colors break-all sm:break-normal"
        >
          <Mail className="w-4 h-4 text-text-muted shrink-0" />
          <span>{profile.email}</span>
        </a>

        {/* LinkedIn Link */}
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
        >
          <Linkedin className="w-4 h-4 text-text-muted shrink-0" />
          <span>LinkedIn ↗</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
