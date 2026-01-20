import { useState } from "react";

const ContactForm = () => {
  const [values, setValues] = useState({
    plan: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);

  const regex = {
    name: /^[a-zA-Z\s]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    phone: /^[0-9]{10,15}$/,
    subject: /^.{3,}$/,
    message: /^.{10,}$/,
  };

  const validateField = (name, value) => {
    if (["name", "email", "subject", "message"].includes(name) && !value) {
      return "This field is required";
    }
    if (regex[name] && value && !regex[name].test(value)) {
      const map = {
        name: "Name must be at least 3 letters",
        email: "Enter a valid email address",
        phone: "Phone must be 10–15 digits",
        subject: "Minimum 3 characters",
        message: "Minimum 10 characters",
      };
      return map[name];
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));

    if (touched[name]) {
      setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(values).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({
      plan: true,
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (Object.keys(newErrors).length === 0) {
      console.log(values);

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      // 🔁 RESET FORM
      setValues({
        plan: "",
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
      setTouched({});
    }
  };

  const baseInput =
    "w-full bg-[#0F172A] text-[#E5E7EB] border rounded-lg px-4 py-3 outline-none transition";

  const inputClass = (field) =>
    `${baseInput} ${
      errors[field] && touched[field]
        ? "border-red-500 focus:border-red-500"
        : "border-white/10 focus:border-blue-500"
    }`;

  return (
    <div className="bg-[#1E293B] rounded-2xl p-8 border border-white/5">
      <h3 className="text-xl font-semibold text-white mb-6">
        Send a Message
      </h3>

      {success && (
        <div className="mb-6 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
          ✅ Message sent successfully! I’ll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Plan */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Service Interest (Optional)
          </label>
          <select
            name="plan"
            value={values.plan}
            onChange={handleChange}
            className="w-full bg-[#0F172A] text-gray-200 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="" className="bg-[#020617] text-gray-400">
              Select a service plan
            </option>
            <option className="bg-[#020617]">Basic ($299)</option>
            <option className="bg-[#020617]">Professional ($599)</option>
            <option className="bg-[#020617]">Enterprise ($1299)</option>
            <option className="bg-[#020617]">Custom Projects</option>
            <option className="bg-[#020617]">Free Consultation</option>
            <option className="bg-[#020617]">Other Inquiry</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("name")}
          />
          {errors.name && touched.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("email")}
          />
          {errors.email && touched.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Phone Number (Optional)
          </label>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("phone")}
          />
          {errors.phone && touched.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Subject *
          </label>
          <input
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("subject")}
          />
          {errors.subject && touched.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass("message")}
          />
          {errors.message && touched.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
