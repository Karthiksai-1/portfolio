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
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Skills & Technical Expertise
        </h2>
        <p className="text-sm text-slate-600">
          Core competencies spanning LLM architecture, database systems, and software infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition-all duration-300"
          >
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider font-mono">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 text-slate-700 border border-slate-200 text-xs px-2.5 py-1 rounded-md font-medium"
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
