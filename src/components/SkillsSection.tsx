import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      title: 'GenAI & LLM',
      skills: skillsData.genAIAndLLM
    },
    {
      title: 'Data Analysis & BI',
      skills: skillsData.dataAnalysisAndBI
    },
    {
      title: 'Backend Engineering',
      skills: skillsData.backendEngineering
    },
    {
      title: 'Tools & DevOps',
      skills: skillsData.toolsAndDevOps
    }
  ];

  return (
    <section id="skills" className="space-y-6 pt-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-text-primary">
          Skills & Technical Expertise
        </h2>
        <p className="text-sm text-text-muted">
          Core competencies spanning LLM architecture, database systems, and software infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white/50 backdrop-blur-xs border border-slate-200/70 rounded-2xl p-6 shadow-xs hover:bg-white/80 hover:border-slate-300 transition-all duration-300 space-y-3"
          >
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-canvas text-text-muted border border-border-warm text-xs px-2.5 py-1 rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
