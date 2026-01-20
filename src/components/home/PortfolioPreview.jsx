import { Link } from "react-router-dom";

const projects = [
  { title: "Portfolio Website", img: "../../assets/images/portfolio.jfif" },
  { title: "E-commerce App", img: "../../assets/images/e-commerce.png" },
  { title: "Todo App", img: "../../assets/images/todo-app.png" },
];

const PortfolioPreview = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-slate-800 to-indigo-900 text-gray-200 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition"
            >
              <img ..={project.img} alt={project.title} className="w-full h-48" />
              <h3 className="p-4 font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
        <Link
          to="/portfolio"
          className="inline-block mt-6 bg-cyan-400 text-[#0F172A] px-6 py-2 rounded-full font-semibold hover:bg-cyan-500 transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPreview;
