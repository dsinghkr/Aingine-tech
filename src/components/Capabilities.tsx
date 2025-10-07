import { Cloud, Brain, Database, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Setup",
    description: "AWS, GCP, Azure. We build the foundation for your AI applications to run smoothly and scale effortlessly.",
  },
  {
    icon: Brain,
    title: "AI Deployment & Integration",
    description: "LLMs, chatbots, agents. We bring your AI models to life and integrate them seamlessly into your products.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Pipelines, Snowflake, dbt, Power BI/Tableau. We turn your data into actionable insights.",
  },
  {
    icon: Zap,
    title: "Automation & Workflows",
    description: "Zapier, CI/CD, MLOps. We automate your processes to improve efficiency and accelerate delivery.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300 px-4">
            We provide the technical expertise to bring your AI strategies to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 hover:scale-105 hover:shadow-glow-primary transition-all duration-500 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-glow-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-5 w-5 sm:h-6 sm:h-6 text-background group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
