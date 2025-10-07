// #genai
import { Zap } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-primary text-primary-foreground p-3 rounded-full mb-4">
            <Zap className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Scale Delivery, Not Headcount
          </h2>
          <p className="text-muted-foreground text-lg">
            We help AI and Tech agencies scale delivery without increasing headcount. You focus on winning clients, we handle flawless execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
