import { MessageSquare, Share2, Zap, BarChart, Users, Database } from "lucide-react";

const services = [
  {
    title: "Messenger Automation",
    description: "Instant AI responses for customer queries 24/7. Handle support tickets and lead generation automatically.",
    icon: MessageSquare,
  },
  {
    title: "Social Media Posting",
    description: "Automate your content calendar. Generate, schedule, and post content across all platforms with AI.",
    icon: Share2,
  },
  {
    title: "Productized Services",
    description: "Turn your expertise into scalable AI products. We help agencies productize their offerings.",
    icon: Zap,
  },
  {
    title: "Agency Scaling",
    description: "Streamline operations with custom AI workflows designed to help your agency grow 10x faster.",
    icon: BarChart,
  },
  {
    title: "CRM Integration",
    description: "Seamlessly connect AI interactions with your existing CRM to keep customer data synchronized.",
    icon: Users,
  },
  {
    title: "Data Analytics",
    description: "Deep insights into your automation performance. track ROI and optimize your AI strategy.",
    icon: Database,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-deepBlack relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligent Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI services tailored for modern businesses and agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neonPink/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neonPink/20 to-reddishOrange/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-neonPink group-hover:text-reddishOrange transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
