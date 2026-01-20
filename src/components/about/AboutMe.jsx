import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import myImage from "../../assets/images/IMG_20220310_152837.jpg";

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            <FaUser className="text-xs" />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Journey in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Web Development
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            From Economics student to passionate Frontend Developer –
            Transforming ideas into digital experiences
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <div className="relative flex justify-center">
            
            {/* Floating Image */}
            <div className="relative animate-float">
              <img
                src={myImage}
                alt="Profile"
                className="w-80 h-xl object-cover rounded-2xl shadow-2xl border-8 border-white/10"
              />
            </div>

            {/* 25+ Projects (TOP RIGHT) */}
            <div className="absolute top-6 -right-2 bg-[#111827] px-5 py-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-white font-semibold">25+</p>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
            </div>

            {/* 3+ Years Experience (BOTTOM LEFT) */}
            <div className="absolute bottom-6 -left-6 bg-[#111827] px-5 py-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-white font-semibold">3+ Years</p>
                <p className="text-sm text-gray-400">Experience</p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Hello! I'm{" "}
              <span className="text-blue-400">Md. Shakib Al Hasan</span>
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              I’m a passionate Web Developer currently pursuing my Honours in Bangla at Govt. Titumir College, Dhaka. Alongside my academic journey, I have developed a strong interest in web development and modern web technologies.
            </p>

            <p className="text-gray-400 mb-4 leading-relaxed">
              My journey into web development began with a strong curiosity to build interactive and visually appealing websites. Over time, I have gained hands-on experience in HTML, CSS, Tailwind CSS, and JavaScript, enabling me to create responsive, clean, and user-friendly web interfaces.
            </p>

            <p className="text-gray-400 mb-10 leading-relaxed">
              Currently, I am learning React to build dynamic and component-based frontend applications, and I am also learning PHP to strengthen my backend development skills. I am highly motivated to continuously learn new technologies, enhance my problem-solving abilities, and grow as a professional web developer.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 bg-[#111827] p-5 rounded-xl">
                <div className="text-blue-400 text-xl">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Education</h4>
                  <p className="text-sm text-gray-400">
                    BBA in Bangla <br /> Govt. Titumir College, Dhaka
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#111827] p-5 rounded-xl">
                <div className="text-purple-400 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-sm text-gray-400">
                    Dhaka, Bangladesh <br /> Available Worldwide
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
