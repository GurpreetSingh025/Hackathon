import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, MapPin, Video } from "lucide-react";

const professionals = [
  {
    icon: Users,
    title: "Lifestyle Coaches",
    description: "Expert guidance for healthy living"
  },
  {
    icon: MessageCircle,
    title: "Therapy Professionals",
    description: "Mental health support"
  },
  {
    icon: MapPin,
    title: "Nearest Gym Trainer",
    description: "Find trainers near you"
  },
  {
    icon: Video,
    title: "Virtual Trainer",
    description: "Online training sessions"
  }
];

const ConnectProfessionals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {professionals.map((professional) => (
        <Card 
          key={professional.title}
          className="bg-gradient-secondary border-0 p-6 transition-all hover:scale-105 hover:shadow-glow cursor-pointer group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <professional.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {professional.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {professional.description}
              </p>
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Connect Now
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ConnectProfessionals;
