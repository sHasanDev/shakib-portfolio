import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSidebar = () => {
  return (
    <aside className="relative">
      {/* sticky so footer e giye auto stop hobe */}
      <div className="lg:sticky lg:top-24">
        <div className="bg-[#1E293B] rounded-2xl p-6 shadow-xl border border-white/5">

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-6">
            Contact Information
          </h3>

          {/* Phone */}
          <div className="bg-[#0F172A] rounded-xl p-4 flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-white font-semibold">Phone Number</p>
              <p className="text-gray-400 text-sm">+880 1786-827178</p>
              <p className="text-gray-500 text-xs">
                Sunday - Thursday, 9am - 6pm
              </p>
              <a
                href="tel:+8801402842584"
                className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 mt-1 hover:underline"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#0F172A] rounded-xl p-4 flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-lg">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-white font-semibold">Email Address</p>
              <p className="text-gray-400 text-sm">
                alhasans317@gmail.com
              </p>
              <p className="text-gray-500 text-xs">
                Response within 24 hours
              </p>
              <a
                href="mailto:info.mdriyankarm@gmail.com"
                className="text-purple-400 text-sm font-medium inline-flex items-center gap-1 mt-1 hover:underline"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#0F172A] rounded-xl p-4 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-white font-semibold">Location</p>
              <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
              <p className="text-gray-500 text-xs">
                Available for remote work worldwide
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 text-sm font-medium inline-flex items-center gap-1 mt-1 hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-6"></div>

          {/* Social */}
          <div>
            <p className="text-white font-semibold mb-4">Follow Me</p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/sHasanDev" },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://bd.linkedin.com/in/md-shakib-al-hasan-0735a2203",
                },
                { icon: <FaDribbble />, link: "#" },
                { icon: <FaWhatsapp />, link: "https://wa.me/qr/76GJFIAFPR2RG1" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </aside>
  );
};

export default ContactSidebar;
