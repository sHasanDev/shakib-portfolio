import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the project scope. A standard website usually takes 7–14 days, while larger or more complex projects may take longer.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes, I offer ongoing maintenance and support plans including updates, security monitoring, backups, and bug fixes.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All websites are built using a mobile-first approach to ensure they look and work perfectly on all devices.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "I primarily use modern technologies such as React, Next.js, Tailwind CSS, and other industry-standard tools.",
    },
    {
      question: "What's included in the pricing?",
      answer:
        "Pricing includes design, development, responsiveness, basic SEO optimization, and deployment. No hidden fees.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* HEADER */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5
                     rounded-full bg-indigo-500/10 text-indigo-400
                     text-sm font-medium mb-4"
        >
          <FaQuestionCircle className="text-sm" />
          FAQ
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Find answers to common questions about my services
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700
                         rounded-xl overflow-hidden transition"
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between
                           text-left px-6 py-4 font-medium
                           hover:bg-slate-800 transition"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-indigo-400" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              {isOpen && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
