import { FaClock, FaGlobeAsia, FaCalendarCheck } from "react-icons/fa";

const RightSide = () => {
  return (
    <div className="space-y-6">

      {/* Map Card */}
      <div className="bg-[#1E293B] rounded-2xl p-5 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Location Map</h3>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="text-sky-400 text-sm hover:underline"
          >
            Expand Map ↗
          </a>
        </div>

        <div className="rounded-xl overflow-hidden h-[280px]">
          <iframe
            title="Dhaka Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.2272973271668!2d90.34704029871237!3d23.8024286349595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e45ac3c583%3A0xf118c42182b7ff42!2sBlock%20C%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1768934958397!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Info Cards under Map */}
      <div className="grid md:grid-cols-3 gap-4">

        {/* Response Time */}
        <div className="bg-[#1E293B] p-5 rounded-xl text-center">
          <FaClock className="text-sky-400 text-2xl mx-auto mb-2" />
          <h4 className="text-white font-semibold">Response Time</h4>
          <p className="text-sm text-gray-400">Within 24 hours</p>
        </div>

        {/* Timezone */}
        <div className="bg-[#1E293B] p-5 rounded-xl text-center">
          <FaGlobeAsia className="text-purple-400 text-2xl mx-auto mb-2" />
          <h4 className="text-white font-semibold">Timezone</h4>
          <p className="text-sm text-gray-400">GMT +6 (Bangladesh)</p>
        </div>

        {/* Availability */}
        <div className="bg-[#1E293B] p-5 rounded-xl text-center">
          <FaCalendarCheck className="text-green-400 text-2xl mx-auto mb-2" />
          <h4 className="text-white font-semibold">Availability</h4>
          <p className="text-sm text-gray-400">Sunday – Thursday, 9am – 6pm</p>
        </div>

      </div>
    </div>
  );
};

export default RightSide;
