import { Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StreakCounterProps {
  days: number;
}

const StreakCounter = ({ days }: StreakCounterProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-primary border-0 p-8 shadow-glow animate-pulse-glow">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-primary-foreground/80 mb-1">
            Daily Streak
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold text-primary-foreground">
              {days}
            </span>
            <span className="text-2xl font-semibold text-primary-foreground/80">
              days
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-2">
            Keep going! You're on fire 🔥
          </p>
        </div>
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm">
          <Flame className="w-12 h-12 text-primary-foreground animate-pulse" />
        </div>
      </div>
    </Card>
  );
};

export default StreakCounter;
