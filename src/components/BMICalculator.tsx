import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // convert cm to m
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 25) setCategory("Normal");
      else if (bmiValue < 30) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "text-muted-foreground";
    if (bmi < 18.5) return "text-blue-400";
    if (bmi < 25) return "text-primary";
    if (bmi < 30) return "text-yellow-400";
    return "text-destructive";
  };

  return (
    <Card className="bg-gradient-secondary border-0 p-8 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/20">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">BMI Calculator</h2>
          <p className="text-sm text-muted-foreground">Calculate your Body Mass Index</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Height (cm)
          </label>
          <Input
            type="number"
            placeholder="170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="bg-background/50 border-border"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Weight (kg)
          </label>
          <Input
            type="number"
            placeholder="70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-background/50 border-border"
          />
        </div>
      </div>

      <Button 
        onClick={calculateBMI}
        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
      >
        Calculate BMI
      </Button>

      {bmi && (
        <div className="mt-6 p-6 rounded-xl bg-background/50 border border-border animate-fade-in">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
            <p className={`text-5xl font-bold ${getBMIColor()} mb-2`}>{bmi}</p>
            <p className={`text-lg font-semibold ${getBMIColor()}`}>{category}</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default BMICalculator;
