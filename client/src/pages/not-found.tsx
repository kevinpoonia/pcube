import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0,rgba(0,0,0,0)_50%)]" />

      <div className="relative z-10 max-w-md w-full mx-6 glass border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6 border border-red-500/20">
          <AlertCircle className="h-8 w-8 text-red-400" />
        </div>
        
        <h1 className="text-3xl font-display font-bold text-white mb-3">Page Not Found</h1>
        
        <p className="text-white/60 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12">
            <ChevronLeft className="mr-2 w-4 h-4" /> Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
