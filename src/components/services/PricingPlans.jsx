import { FaTags, FaCheck, FaTimes } from "react-icons/fa";

export default function PricingPlans() {
    const plans = [
        {
            title: "Basic",
            subtitle: "Perfect for small projects",
            price: "$299",
            payment: "One-time payment",
            features: {
                "3 Pages Website": true,
                "Responsive Design": true,
                "Basic SEO": true,
                "CMS Integration": false,
                "E-commerce Setup": false,
                "Monthly Maintenance": false,
            },
        },
        {
            title: "Professional",
            subtitle: "Best for growing businesses",
            price: "$599",
            payment: "One-time payment",
            popular: true,
            features: {
                "7 Pages Website": true,
                "Responsive Design": true,
                "Advanced SEO": true,
                "CMS Integration": true,
                "E-commerce Setup": false,
                "Monthly Maintenance": false,
            },
        },
        {
            title: "Enterprise",
            subtitle: "For large scale projects",
            price: "$1299",
            payment: "One-time payment",
            features: {
                "Unlimited Pages": true,
                "Responsive Design": true,
                "Premium SEO": true,
                "CMS Integration": true,
                "E-commerce Setup": true,
                "Monthly Maintenance": true,
            },
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-r from-purple-900 via-fuchsia-900 to-pink-900 text-white">
            {/* PRICING HEADER */}
            <div className="text-center mb-16">
                {/* ICON BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5
                  rounded-full bg-indigo-500/10 text-indigo-400
                  text-sm font-medium mb-4">
                    <FaTags className="text-sm" />
                    Flexible Pricing
                </div>

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Choose Your Perfect Plan
                </h2>

                {/* SUBTITLE */}
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    Transparent pricing with no hidden fees.
                    Select the package that best fits your needs.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-8 border bg-slate-900 transition-all duration-300 ${plan.popular
                                ? "border-indigo-500 scale-105 shadow-xl"
                                : "border-slate-800 hover:border-slate-600"
                            }`}
                    >
                        {/* MOST POPULAR BADGE */}
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                                    MOST POPULAR
                                </span>
                            </div>
                        )}

                        {/* HEADER */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold">{plan.title}</h3>
                            <p className="text-slate-400 text-sm mt-1">
                                {plan.subtitle}
                            </p>
                        </div>

                        {/* PRICE */}
                        <div className="text-center mb-8">
                            <p className="text-4xl font-bold text-indigo-400">
                                {plan.price}
                            </p>
                            <p className="text-sm text-slate-500 mt-1">
                                {plan.payment}
                            </p>
                        </div>

                        {/* FEATURES */}
                        <ul className="space-y-3 mb-8">
                            {Object.entries(plan.features).map(
                                ([feature, available], i) => (
                                    <li
                                        key={i}
                                        className={`flex items-center gap-3 ${available ? "text-slate-300" : "text-slate-500"
                                            }`}
                                    >
                                        {available ? (
                                            <FaCheck className="text-green-400" />
                                        ) : (
                                            <FaTimes className="text-red-400" />
                                        )}
                                        <span>{feature}</span>
                                    </li>
                                )
                            )}
                        </ul>

                        {/* CTA */}
                        <button
                            className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular
                                    ? "bg-indigo-600 hover:bg-indigo-700"
                                    : "bg-slate-800 hover:bg-slate-700"
                                }`}
                        >
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
