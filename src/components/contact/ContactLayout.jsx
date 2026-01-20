import ContactSidebar from "./ContactSidebar";
import ContactForm from "./ContactForm";
import RightSide from "./RightSide";

const ContactLayout = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#0b1d2a] to-[#050b13] text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-indigo-900 mb-16">
                <div className="text-center max-w-3xl mx-auto pt-20 pb-16 px-6">
                    <span className="text-sm bg-blue-600/20 px-4 py-1 rounded-full text-blue-400">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4">
                        Let's <span className="text-blue-500">Work</span>{" "}
                        <span className="text-purple-500">Together</span>
                    </h1>
                    <p className="text-gray-400 mt-4">
                        Have a project in mind? Contact me to discuss your ideas and get a free
                        consultation.
                    </p>
                </div>
            </div>

            {/* Layout */}
            <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT – Fixed */}
                <ContactSidebar />

                {/* RIGHT – Scrollable */}
                <div className="lg:col-span-2 gap-8">
                    <ContactForm />
                    <div className="mt-16"><RightSide /></div>

                </div>
            </div>
        </section>
    );
};

export default ContactLayout;
