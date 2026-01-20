import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import {
  FaLayerGroup,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp
} from "react-icons/fa";

const filters = [
  { name: "All", icon: <FaLayerGroup /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "PHP", icon: <FaPhp /> }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // ✅ Correct filtering using category
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(project =>
          project.category.includes(activeFilter)
        );

  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto min-h-screen py-16 px-6 md:px-10 lg:px-16"
    >
      <h2 className="text-3xl text-white font-bold text-center mb-10">
        My Projects
      </h2>

      {/* 🔘 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map(filter => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300
              ${
                activeFilter === filter.name
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 cursor-pointer"
              }`}
          >
            {filter.icon}
            <span className="text-sm font-medium">
              {filter.name}
            </span>
          </button>
        ))}
      </div>

      {/* 🧩 Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
