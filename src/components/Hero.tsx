import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Cpu, Zap } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="AI Infrastructure" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Interactive mouse-following glow */}
      <div 
        className="absolute w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10 animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl opacity-10 animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-15 animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        {/* Floating AI-themed icons */}
        <div className="absolute top-10 left-10 animate-bounce" style={{ animationDelay: "0.5s" }}>
          <Brain className="h-6 w-6 text-primary opacity-60" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: "1.5s" }}>
          <Cpu className="h-4 w-4 text-accent opacity-60" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: "2.5s" }}>
          <Zap className="h-5 w-5 text-secondary opacity-60" />
        </div>
        <div className="absolute top-1/3 right-10 animate-bounce" style={{ animationDelay: "3s" }}>
          <Sparkles className="h-4 w-4 text-primary opacity-50" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: "3.5s" }}>
          <Brain className="h-3 w-3 text-accent opacity-50" />
        </div>

        <h1 className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI</span>ngine
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in hover:text-foreground transition-colors duration-300 px-4" style={{ animationDelay: "0.2s" }}>
          You commit, we deliver.
        </p>

        <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow-primary hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto group"
          >
            Partner with Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
