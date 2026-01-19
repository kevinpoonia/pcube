import { motion } from "framer-motion";
import { Search, MessageSquare, Workflow, TrendingUp, ShieldAlert, Bot } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Automated Monitoring",
    description: "Real-time ingestion pipelines across Trustpilot, Glassdoor, G2, Google Reviews, and social channels."
  },
  {
    icon: Bot,
    title: "AI Sentiment Intelligence",
    description: "Advanced NLP to detect tone, sentiment, keywords, and viral anomalies instantly."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Orchestrate responses with AI drafts, approval chains, and SLA escalation policies."
  },
  {
    icon: TrendingUp,
    title: "Reputation Growth",
    description: "Automated post-interaction triggers via WhatsApp/SMS to drive authentic positive reviews."
  },
  {
    icon: ShieldAlert,
    title: "Crisis Prevention",
    description: "Detect viral spikes and anomalies before they damage investor confidence or revenue."
  },
  {
    icon: MessageSquare,
    title: "Response Orchestration",
    description: "Multi-entity, multi-location aggregation with bulk response capabilities."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            An Always-On <span className="text-primary">Control Layer</span>
          </h2>
          <p className="text-white/60 text-lg">
            Instead of manually tracking reviews and managing fragmented workflows, 
            our platform automates governance across every public channel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
