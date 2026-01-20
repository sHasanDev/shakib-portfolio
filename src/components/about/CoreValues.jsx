import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaCode,
} from "react-icons/fa";

const coreValues = [
  {
    title: "Problem Solver",
    description:
      "I focus on solving real problems with clean, efficient, and scalable solutions rather than just writing code.",
    icon: <FaLightbulb />,
  },
  {
    title: "Performance Focused",
    description:
      "I build fast, optimized, and responsive applications that provide smooth user experiences across all devices.",
    icon: <FaRocket />,
  },
  {
    title: "User-Centric Mindset",
    description:
      "Every design and development decision I make is focused on usability, accessibility, and user satisfaction.",
    icon: <FaUsers />,
  },
  {
    title: "Reliable & Honest",
    description:
      "I value transparency, clear communication, and long-term relationships with clients and teams.",
    icon: <FaShieldAlt />,
  },
  {
    title: "On-Time Delivery",
    description:
      "I respect deadlines and always strive to deliver quality work within the agreed timeline.",
    icon: <FaClock />,
  },
  {
    title: "Modern Tech Stack",
    description:
      "I work with modern technologies like React, Tailwind CSS, and JavaScript to build future-ready products.",
    icon: <FaCode />,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-[#0B1220] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold mb-6">
            Why Hire Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Core Values
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide my work and make me a reliable frontend
            developer for your next project
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-[#111827] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl mb-6">
                {value.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
