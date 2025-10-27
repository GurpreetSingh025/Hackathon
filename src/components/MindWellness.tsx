import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TreePine, Droplets, Dumbbell, Target } from "lucide-react";
import { toast } from "sonner";

const MindWellness = () => {
  const [stressors, setStressors] = useState("");
  const [goals, setGoals] = useState("");
  const [waterIntake, setWaterIntake] = useState("");
  const [workoutRecord, setWorkoutRecord] = useState("");

  const handleSave = () => {
    toast.success("Wellness data saved successfully!");
    setStressors("");
    setGoals("");
    setWaterIntake("");
    setWorkoutRecord("");
  };

  return (
    <Card className="bg-gradient-secondary border-0 p-8 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/20">
          <TreePine className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Mind Wellness</h2>
          <p className="text-sm text-muted-foreground">Track your daily wellness journey</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Target className="w-4 h-4 text-primary" />
            Daily Stressors
          </label>
          <Textarea
            placeholder="What's causing stress today?"
            value={stressors}
            onChange={(e) => setStressors(e.target.value)}
            className="bg-background/50 border-border min-h-[80px]"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Target className="w-4 h-4 text-primary" />
            Mental Health Goals
          </label>
          <Textarea
            placeholder="What are your mental health goals?"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="bg-background/50 border-border min-h-[80px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Droplets className="w-4 h-4 text-primary" />
              Water Intake (glasses)
            </label>
            <Input
              type="number"
              placeholder="8"
              value={waterIntake}
              onChange={(e) => setWaterIntake(e.target.value)}
              className="bg-background/50 border-border"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Dumbbell className="w-4 h-4 text-primary" />
              Workout Duration (mins)
            </label>
            <Input
              type="number"
              placeholder="30"
              value={workoutRecord}
              onChange={(e) => setWorkoutRecord(e.target.value)}
              className="bg-background/50 border-border"
            />
          </div>
        </div>

        <Button 
          onClick={handleSave}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
        >
          Save Today's Log
        </Button>
      </div>
    </Card>
  );
};

export default MindWellness;
