import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaBolt,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Web Development",
    desc:
      "Custom, responsive websites built with modern technologies like React, Vue.js, and Next.js.",
    price: "$299",
    color: "blue",
    icon: <FaCode />,
    features: [
      "Responsive Design",
      "Cross-browser Compatibility",
      "Performance Optimization",
      "SEO-friendly Code",
    ],
  },
  {
    title: "UI/UX Design",
    desc:
      "Beautiful, intuitive user interfaces designed with user experience in mind.",
    price: "$199",
    color: "purple",
    icon: <FaPaintBrush />,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    title: "Responsive Web Design",
    desc:
      "Mobile-first responsive designs that work flawlessly across all devices.",
    price: "$249",
    color: "green",
    icon: <FaMobileAlt />,
    features: [
      "Mobile-first Approach",
      "Tablet Optimization",
      "Desktop Compatibility",
      "Touch-friendly Interfaces",
    ],
  },
  {
    title: "Website Optimization",
    desc:
      "Speed optimization and performance enhancements for existing websites.",
    price: "$179",
    color: "red",
    icon: <FaBolt />,
    features: [
      "Speed Analysis",
      "Performance Optimization",
      "SEO Improvements",
      "Accessibility Compliance",
    ],
  },
  {
    title: "SEO & Analytics",
    desc:
      "Comprehensive SEO strategies and analytics implementation.",
    price: "$149",
    color: "yellow",
    icon: <FaSearch />,
    features: [
      "Technical SEO",
      "Analytics Setup",
      "Keyword Optimization",
      "Performance Tracking",
    ],
  },
  {
    title: "Maintenance & Support",
    desc:
      "Ongoing website maintenance, updates, and technical support.",
    price: "$99/month",
    color: "indigo",
    icon: <FaHeadset />,
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Backup Management",
      "Technical Support",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-green-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-14">
        My Core Services
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-slate-800/60 backdrop-blur
                       border border-slate-700
                       rounded-2xl p-7
                       flex flex-col
                       hover:border-slate-500
                       transition"
          >
            {/* ICON */}
            <div
              className={`w-11 h-11 rounded-full mb-4
              bg-${service.color}-500/20
              text-${service.color}-400
              flex items-center justify-center text-lg`}
            >
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold mb-2">
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {service.desc}
            </p>

            {/* FEATURES */}
            <ul className="space-y-2 text-sm text-slate-300 mb-6">
              {service.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* FOOTER (ALWAYS BOTTOM) */}
            <div className="mt-auto pt-4 border-t border-slate-700">
              <p
                className={`font-semibold mb-3 text-${service.color}-400`}
              >
                Starting at {service.price}
              </p>

              <button
                className={`w-full py-2.5 rounded-md text-sm font-medium
                bg-${service.color}-600 hover:bg-${service.color}-700
                transition`}
              >
                Book Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
