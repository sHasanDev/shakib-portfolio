import React, { useEffect } from "react";
import ProjectsSection from "../components/portfolio/ProjectsSection";

const Portfolio = () => {

    useEffect(() => {
        document.title = "Portfolio | Shakib";
      }, []);

    return (
        <>
            <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-indigo-900 w-full"><ProjectsSection /></div>
        </>
    );
};

export default Portfolio;