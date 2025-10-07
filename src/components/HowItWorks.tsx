// #genai
import { Users, Wrench, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Agencies Win Clients",
    description: "You focus on building relationships and closing deals.",
  },
  {
    icon: Wrench,
    title: "AIngine Executes",
    description: "We handle the technical implementation with precision and expertise.",
  },
  {
    icon: Trophy,
    title: "Clients Get Results",
    description: "Flawless delivery leads to satisfied clients and business growth.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300 px-4">
            A simple and effective partnership model.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <>
                <div key={index} className="flex flex-col items-center text-center max-w-xs">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-8 w-8 text-primary hidden md:block" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
