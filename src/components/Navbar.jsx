import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaBriefcase /> },
    { name: "Service", path: "/service", icon: <FaServicestack /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="w-full bg-[#0F172A] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 font-semibold">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">SKB</span>
          </div>
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl"
          >
            SHAKIB
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-3 lg:gap-4 text-lg text-[#E2E8F0] font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-transparent
                  hover:border-[#38BDF8] hover:shadow-md hover:text-[#F8FAFC]
                  transition-all cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden border-2 rounded-md p-2 transition
            ${
              menuOpen
                ? "border-cyan-400 shadow shadow-cyan-700"
                : "border-transparent"
            }`}
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-gray-400"></span>
            <span className="block w-8 h-1 bg-gray-400"></span>
            <span className="block w-8 h-1 bg-gray-400"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#64748B] backdrop-blur-lg w-full absolute left-0 text-[#E2E8F0] font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3
                  hover:bg-cyan-400 hover:text-gray-900 transition cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
