import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaStar,FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import myImage from "../../assets/images/my-img.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const typedRef = useRef(null);

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/sHasanDev", hoverColor: "hover:text-blue-400" },
    { icon: <FaLinkedin />, link: "https://bd.linkedin.com/in/md-shakib-al-hasan-0735a2203", hoverColor: "hover:text-blue-600" },
    { icon: <FaFacebook />, link: null, hoverColor: "hover:text-blue-500" },
    { icon: <FaWhatsapp />, link: "https://wa.me/qr/76GJFIAFPR2RG1", hoverColor: "hover:text-green-500" },
  ];

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Web Developer", "UI/UX Designer", "Frontend Expert", "Creative Coder"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-2">
      <div className="grid md:grid-cols-2 gap-12 justify-center items-center py-24">
        <div className="animate-fade-in">
          <div className="bg-violet-300/30 inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-semibold text-blue-400 shadow-lg shadow-purple-500/40">
      
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <FaStar className="text-xs" />
            </span>

            <span className="whitespace-nowrap">
              Professional Frontend Developer
            </span>

          </div>
          <p className="text-xl text-[#94A3B8] font-semibold mt-4">Hi I'm</p>
          <h2 className="text-4xl text-[#F1F5F9] md:text-5xl font-bold mb-4 leading-tight">
            MD Shakib Al Hasan
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-[#E2E8F0]">
            I'm a <span ref={typedRef} className="text-cyan-400"></span>
          </h3>
          <p className="text-lg mb-8 max-w-xl text-[#E2E8F0]">
            Crafting pixel-perfect, high-performance websites that convert visitors into customers. Specializing in modern web development and stunning UI/UX design.
          </p>

          <div className="flex gap-4">
            <Link to="/portfolio" className="bg-[#38BDF8] text-[#0F172A] px-8 py-3 rounded-full font-semibold hover:bg-[#0EA5E9] hover:text-[#F1F5F9] transition-all">
              View My Work
            </Link>
            <Link to="/contact" className="bg-[#38BDF8] text-[#0F172A] px-8 py-3 rounded-full font-semibold hover:bg-[#0EA5E9] hover:text-[#F1F5F9] transition-all">
              Hire Me
            </Link>
          </div>

          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors duration-300 ${item.hoverColor} hover:-translate-y-0.5`}
              >
                {React.cloneElement(item.icon, { className: "w-10 h-10" })}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center order-first md:order-last">
          <img src={myImage} alt="Md Shakib Al Hasan" className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
