import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for solopreneurs and small businesses just starting with AI.",
    features: [
      "Basic Messenger Automation",
      "5 Social Posts / Week",
      "Standard Support",
      "1 User Account"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    description: "For growing agencies needing robust automation tools.",
    features: [
      "Advanced Workflow Builder",
      "Unlimited Social Posting",
      "Priority Email Support",
      "5 User Accounts",
      "CRM Integration"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-scale custom solutions for large organizations.",
    features: [
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Unlimited Users",
      "On-premise Deployment"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-deepBlack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400">
            Choose the plan that fits your growth needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                plan.highlight
                  ? "bg-white/10 border-neonPink shadow-2xl shadow-neonPink/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-neonPink to-reddishOrange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neonPink shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.highlight
                    ? "bg-white text-deepBlack hover:bg-gray-100"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
