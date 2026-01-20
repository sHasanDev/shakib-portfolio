import { FaGraduationCap, FaPauseCircle, FaCode } from "react-icons/fa";

const journeyData = [
  {
    year: "2022",
    title: "Started Web Development",
    description:
      "This year I started my journey in web development. I began learning HTML, CSS, and basic JavaScript, exploring how the web works.",
    icon: <FaGraduationCap />,
    side: "left",
  },
  {
    year: "2023",
    title: "Journey Paused",
    description:
      "Due to personal and academic reasons, I couldn’t continue my development journey consistently this year. However, my interest never stopped.",
    icon: <FaPauseCircle />,
    side: "right",
  },
  {
    year: "2024",
    title: "Learning & Practicing Again",
    description:
      "I restarted my learning journey with more dedication, focusing on JavaScript, React basics, and modern frontend concepts.",
    icon: <FaCode />,
    side: "left",
  },
  {
    year: "2025",
    title: "NSDA – ASSET Project (Level 3)",
    description:
      "Completed Web Design & Development for Freelancing (Level 3) under NSDA – ASSET Project. Now preparing myself as a Full Stack Developer with React & Tailwind CSS.",
    icon: <FaCode />,
    side: "right",
  },
];

const MyJourney = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-slate-800 to-indigo-900 text-slate-200 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my learning path, struggles, growth, and future goals
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Middle Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  item.side === "left"
                    ? "justify-start md:justify-end"
                    : "justify-start"
                }`}
              >
                {/* Content Box */}
                <div
                  className={`w-full md:w-1/2 ${
                    item.side === "left"
                      ? "md:pr-12 text-left md:text-right"
                      : "md:pl-12 text-left"
                  }`}
                >
                  <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
                    <span className="text-sm text-cyan-400 font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MyJourney;
