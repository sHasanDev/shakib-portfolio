import { FaTools } from "react-icons/fa";

const skillsLeft = [
  { name: "HTML5 & CSS3", value: 95 },
  { name: "JavaScript (ES6+)", value: 90 },
  { name: "React.js", value: 85 },
  { name: "Tailwind CSS", value: 92 },
];

const skillsRight = [
  { name: "Vue.js", value: 80 },
  { name: "TypeScript", value: 75 },
  { name: "Next.js", value: 82 },
  { name: "UI/UX Design", value: 88 },
];

const SkillBar = ({ name, value }) => {
  return (
    <div>
      <div className="flex justify-between mb-2 text-sm font-medium text-white">
        <span>{name}</span>
        <span className="text-cyan-400">{value}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-900 via-sky-900 to-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6">
            <FaTools className="text-xs" />
            Expertise
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Mastering modern frontend technologies to build exceptional web
            experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            {skillsLeft.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
              />
            ))}
          </div>

          <div className="space-y-8">
            {skillsRight.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
