import { ShieldCheck, Scaling, GaugeCircle, BrainCircuit } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "We are the dependable backbone for your technical execution, ensuring every project is delivered to the highest standard.",
  },
  {
    icon: Scaling,
    title: "Scalability",
    description: "Our solutions are built to grow with your clients' needs, providing a flexible and scalable foundation for their success.",
  },
  {
    icon: GaugeCircle,
    title: "Speed",
    description: "We accelerate your delivery timeline, enabling you to impress clients with rapid and efficient implementation.",
  },
  {
    icon: BrainCircuit,
    title: "Expertise",
    description: "Our team of seasoned experts in AI and cloud technologies ensures flawless execution and technical excellence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
            Why Partner with AIngine?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300 px-4">
            We are the implementation engine that powers your agency's growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group cursor-pointer animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-4 sm:p-6 items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-glow-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-5 w-5 sm:h-6 sm:h-6 text-background group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base group-hover:text-foreground transition-colors duration-300 pt-2">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
