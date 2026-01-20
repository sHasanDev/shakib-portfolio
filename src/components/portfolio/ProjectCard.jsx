import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden
        bg-[#0F172A]
        border border-white/10
        shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-blue-500/40
      "
    >
      {/* 🖼 Image */}
      <div className="relative h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />

        {/* 🔖 Badges (Top Right) */}
        <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
          {project.badges?.map((badge, index) => (
            <span
              key={index}
              className="
                bg-blue-600/90
                text-white text-xs font-semibold
                px-3 py-1 rounded-full
                shadow
              "
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* 📦 Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* 🏷 Tech Pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                bg-white/5
                border border-white/10
                text-slate-300
                text-xs
                px-3 py-1 rounded-full
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🔗 Links */}
        <div className="flex items-center justify-between">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              text-blue-500 hover:text-blue-400
              font-medium text-sm transition
            "
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                text-indigo-400 hover:text-indigo-300
                text-sm transition
              "
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
        </div>
      </div>

      {/* ✨ Subtle Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-indigo-500/10
        "
      />
    </div>
  );
};

export default ProjectCard;
