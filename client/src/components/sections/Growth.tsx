import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const growthFeatures = [
  "Smart delivery timing optimization",
  "QR-based review funnels",
  "Employee advocacy workflows",
  "Review velocity optimization",
  "Funnel analytics and conversion tracking"
];

export function Growth() {
  return (
    <section id="growth" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
              Growth Engine
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Reputation Improvement <br />
              <span className="text-white/40">Engineered Through Automation</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Transform reputation signals into actionable intelligence. Create a predictable pipeline of authentic positive reviews with automated triggers and smart optimizations.
            </p>

            <ul className="space-y-4 mb-10">
              {growthFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="bg-white text-black hover:bg-white/90 rounded-full h-12 px-8 font-medium">
              Explore Intelligence Features
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract UI Representation */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass p-8 aspect-square flex flex-col justify-center">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
               
               {/* Stats Card */}
               <div className="bg-card border border-white/10 rounded-xl p-6 mb-6 relative z-10 animate-in slide-in-from-bottom-8 duration-700 fade-in">
                 <div className="flex justify-between items-center mb-4">
                   <h4 className="text-white/70 font-medium">Trust Score</h4>
                   <span className="text-green-400 font-bold">+12%</span>
                 </div>
                 <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-[78%] rounded-full" />
                 </div>
               </div>

               {/* Review Stream */}
               <div className="space-y-4 relative z-10">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card/50 border border-white/5 rounded-lg p-4 flex gap-4 items-center animate-in slide-in-from-bottom-4 duration-500 fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs">User</div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                      </div>
                      <div className="text-yellow-500 text-xs">★★★★★</div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
