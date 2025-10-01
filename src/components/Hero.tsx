import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Discover Your Style
              <span className="block text-primary">Shop the Best Deals</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Explore our curated collection of fashion, electronics, and accessories. Quality products at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group transition-smooth hover:shadow-lg hover:-translate-y-0.5">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="transition-smooth hover:shadow-md hover:border-primary">
                View Collections
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroBanner}
              alt="Shopping collection"
              className="rounded-2xl shadow-2xl hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
