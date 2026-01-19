import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Ready to Automate Your Reputation?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Schedule a confidential enterprise demonstration to evaluate operational fit and ROI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90">
              Request Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="mt-6 text-white/40 text-sm">
              Or email us at <a href="mailto:info@pcubesolution.com" className="text-primary hover:underline">info@pcubesolution.com</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
