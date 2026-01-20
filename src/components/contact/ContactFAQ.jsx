import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "How soon will you respond to my message?",
    answer:
      "We typically respond within 24 hours on business days. Urgent requests may receive faster responses.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free initial consultation to understand your requirements and discuss possible solutions.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please include details about your project, timeline, budget (if any), and how we can help you.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Our working hours are Monday to Friday, 10:00 AM – 6:00 PM (GMT+6).",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0B1220] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-4">
            <FiHelpCircle />
            Contact FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Common <span className="text-blue-500">Questions</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Find quick answers to common contact questions
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#121A2B] rounded-xl border border-white/5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5"
              >
                <span className="text-white font-medium">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-xl text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
