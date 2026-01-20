// Images
import htmlCssImg from "../assets/images/html-css-landing-page.png";
import tailwindImg from "../assets/images/portfolio-tailwind.jpg";
import reactAppImg from "../assets/images/React-Dashboard.png";
import phpAppImg from "../assets/images/PHPBlogSystem.jfif";

const projects = [
  {
    id: 1,
    title: "HTML CSS Landing Page",
    description:
      "A clean and responsive landing page built using pure HTML and CSS.",
    image: htmlCssImg,
    category: ["CSS"],
    badges: ["HTML", "CSS"],
    tech: ["HTML", "CSS"],
    liveLink: "https://html-project.netlify.app",
    githubLink: "https://github.com/yourname/html-project"
  },

  {
    id: 2,
    title: "Tailwind Portfolio",
    description:
      "Modern portfolio website designed with Tailwind CSS and JavaScript.",
    image: tailwindImg,
    category: ["Tailwind", "CSS"],
    badges: ["Tailwind", "JavaScript"],
    tech: ["Tailwind", "JavaScript"],
    liveLink: "https://tailwind-project.netlify.app",
    githubLink: "https://github.com/yourname/tailwind-project"
  },

  {
    id: 3,
    title: "React Analytics Dashboard",
    description:
      "Enterprise-level analytics dashboard with charts and real-time data.",
    image: reactAppImg,
    category: ["React", "JavaScript"],
    badges: ["React", "Chart.js"],
    tech: ["React", "JavaScript", "API"],
    liveLink: "https://react-dashboard.netlify.app",
    githubLink: "https://github.com/yourname/react-dashboard"
  },

  {
    id: 5,
    title: "PHP Blog System",
    description:
      "Dynamic blog management system built with PHP and MySQL.",
    image: phpAppImg,
    category: ["PHP"],
    badges: ["PHP", "MySQL"],
    tech: ["PHP", "MySQL", "Bootstrap"],
    liveLink: "https://php-blog.com",
    githubLink: "https://github.com/yourname/php-blog"
  }
];

export default projects;
