import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
            Partner with AIngine today.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto hover:text-foreground transition-colors duration-300 px-4">
            Ready to scale your agency's delivery capabilities? Let's connect and explore how we can help you deliver flawless execution for your clients.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow-primary hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 group"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
