import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Commercial Model</h2>
          <p className="text-white/60 text-lg">
            Choose the automation tier that fits your enterprise scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Professional Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Professional Tier</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-primary"></span>
                <span className="text-white/40"></span>
              </div>
              <p className="text-white/60">Core automation and analytics for growing brands.</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {["Real-time monitoring", "Basic AI response drafts", "Sentiment analysis", "Email automation", "Standard reporting"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 py-6 text-lg rounded-xl">
              Select Professional
            </Button>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-primary/10 to-card border border-primary/50 rounded-3xl p-8 lg:p-10 flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
              RECOMMENDED
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Enterprise Tier</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white"></span>
                <span className="text-white/40"></span>
              </div>
              <p className="text-white/60">Advanced automation, intelligence, and custom integrations.</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Everything in Professional",
                "Advanced AI Tone Enforcement",
                "Custom Workflow Automation",
                "Crisis Prevention Systems",
                "SLA Governance",
                "Dedicated Success Manager"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-black">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 py-6 text-lg rounded-xl">
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
