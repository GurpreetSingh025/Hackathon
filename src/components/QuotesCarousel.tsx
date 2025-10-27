import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Real food doesn't have ingredients, real food is ingredients.",
    author: "Jamie Oliver"
  },
  {
    text: "Let food be thy medicine and medicine be thy food.",
    author: "Hippocrates"
  },
  {
    text: "Eating is not just about filling your stomach, it's about nourishing your body.",
    author: "Rujuta Diwekar"
  },
  {
    text: "Your body is not a temple, it's an amusement park. Enjoy the ride.",
    author: "Anthony Bourdain"
  }
];

const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-accent border-0 p-8 shadow-card relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-20">
        <Quote className="w-16 h-16 text-foreground" />
      </div>
      <div className="relative animate-fade-in" key={currentIndex}>
        <p className="text-xl md:text-2xl font-semibold text-foreground mb-4 leading-relaxed">
          "{quotes[currentIndex].text}"
        </p>
        <p className="text-sm text-muted-foreground font-medium">
          — {quotes[currentIndex].author}
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </Card>
  );
};

export default QuotesCarousel;
