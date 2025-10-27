import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface HealthCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
}

const HealthCategoryCard = ({ 
  title, 
  description, 
  icon: Icon,
  gradient = "bg-gradient-secondary"
}: HealthCategoryCardProps) => {
  return (
    <Card className={`${gradient} border-0 p-6 transition-all hover:scale-105 hover:shadow-glow cursor-pointer group`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HealthCategoryCard;
