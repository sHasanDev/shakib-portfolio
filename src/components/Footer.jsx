import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaAngleRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaCogs,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/sHasanDev", hoverColor: "hover:text-blue-400" },
    { icon: <FaLinkedin />, link: "https://bd.linkedin.com/in/md-shakib-al-hasan-0735a2203", hoverColor: "hover:text-blue-600" },
    { icon: <FaFacebook />, link: null, hoverColor: "hover:text-blue-500" },
    { icon: <FaWhatsapp />, link: "https://wa.me/qr/76GJFIAFPR2RG1", hoverColor: "hover:text-green-500" },
  ];

  const services = [
    { name: "Web Development", icon: <FaCode /> },
    { name: "React Applications", icon: <FaLaptopCode /> },
    { name: "UI/UX Design", icon: <FaPaintBrush /> },
    { name: "Frontend Optimization", icon: <FaCogs /> },
  ];

  const contactInfo = [
    { name: "C Block, Mirpur-01, Dhaka-1216", icon: <FaMapMarkerAlt /> },
    { name: "alhasans317@gmail.com", icon: <FaEnvelope /> },
    { name: "+880 1786827178", icon: <FaPhone /> },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-gray-300">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 font-semibold">
              <div className="w-10 h-10 p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SKB</span>
              </div>
              <Link to="/" className="text-white text-lg">
                Shakib Al Hasan
              </Link>
            </div>

            <p className="mt-3 text-sm">
              Professional Web Developer specialized in modern React applications.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, index) =>
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white transition-all duration-300 ${item.hoverColor} hover:-translate-y-0.5`}
                  >
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </a>
                ) : (
                  <span
                    key={index}
                    className="text-white cursor-not-allowed"
                    title="Link not available"
                  >
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 px-2 py-1 rounded-md
                               hover:border-cyan-400 hover:shadow-md hover:text-white
                               transition-all text-sm"
                  >
                    <FaAngleRight className="text-cyan-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center gap-2 px-2 py-1 rounded-md
                             hover:border-cyan-400 hover:shadow-md hover:text-white
                             transition-all text-sm"
                >
                  <span className="text-cyan-400">{service.icon}</span>
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              {contactInfo.map((contact) => (
                <li key={contact.name} className="flex items-center gap-2">
                  <span className="text-cyan-400">{contact.icon}</span>
                  {contact.name}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <p className="text-center text-sm py-8">
          © 2025 Shakib Al Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
