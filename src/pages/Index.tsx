import StreakCounter from "@/components/StreakCounter";
import HealthCategoryCard from "@/components/HealthCategoryCard";
import BMICalculator from "@/components/BMICalculator";
import MindWellness from "@/components/MindWellness";
import ConnectProfessionals from "@/components/ConnectProfessionals";
import QuotesCarousel from "@/components/QuotesCarousel";
import { Heart, Activity, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            WellnessHub
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Streak Section */}
        <section className="animate-fade-in">
          <StreakCounter days={7} />
        </section>

        {/* Health Categories */}
        <section className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Health Categories</h2>
            <p className="text-muted-foreground">Choose your wellness path</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HealthCategoryCard
              title="Adult - Normal"
              description="General wellness and fitness programs for healthy adults"
              icon={Heart}
            />
            <HealthCategoryCard
              title="Diabetic / High BP"
              description="Specialized programs for managing chronic conditions"
              icon={Activity}
              gradient="bg-gradient-accent"
            />
            <HealthCategoryCard
              title="Lifestyle Factors"
              description="Address smoking, alcohol, stress, and sleep issues"
              icon={TrendingUp}
            />
          </div>
        </section>

        {/* BMI Calculator */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <BMICalculator />
        </section>

        {/* Mind Wellness */}
        <section className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Mind Wellness</h2>
            <p className="text-muted-foreground">Track your daily wellness journey</p>
          </div>
          <MindWellness />
        </section>

        {/* Connect to Professionals */}
        <section className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Connect to Professionals</h2>
            <p className="text-muted-foreground">Get expert guidance from certified professionals</p>
          </div>
          <ConnectProfessionals />
        </section>

        {/* Quotes */}
        <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <QuotesCarousel />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-lg mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 WellnessHub. Your journey to better health starts here.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
