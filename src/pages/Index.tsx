import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <CTA />
    </div>
  );
};

export default Index;
