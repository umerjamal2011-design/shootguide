import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { GuideSection as GuideSectionType, GuideStep } from "@/lib/guide-data";
import { useProgress } from "@/hooks/use-progress";

interface GuideSectionProps {
  section: GuideSectionType;
  level?: number;
}

export function GuideSection({ section, level = 0 }: GuideSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isCompleted, toggleItem } = useProgress();

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, string> = {
      "info-circle": "ℹ️",
      "car": "🚗",
      "couch": "🪑",
      "cog": "⚙️",
      "tools": "🔧",
      "video": "📹",
      "camera": "📷",
      "triangle-exclamation": "⚠️",
      "star": "⭐",
      "sun": "☀️",
      "moon": "🌙",
      "expand": "↔️"
    };
    return iconMap[iconName] || "•";
  };

  const getStepIcon = (step: GuideStep) => {
    switch (step.type) {
      case "warning":
        return "⚠️";
      case "tip":
        return "💡";
      case "checklist":
        return "☑️";
      default:
        return "•";
    }
  };

  const getStepVariant = (type: string) => {
    switch (type) {
      case "warning":
        return "destructive";
      case "tip":
        return "secondary";
      case "checklist":
        return "default";
      default:
        return "outline";
    }
  };

  const renderStep = (step: GuideStep, stepIndex: number) => {
    const isChecklistItem = step.type === 'checklist' || step.type === 'step';
    const completed = isCompleted(step.id);

    return (
      <div 
        key={step.id} 
        className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50 transition-colors"
        data-testid={`step-${step.id}`}
      >
        {step.type === 'step' && (
          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
            {stepIndex + 1}
          </div>
        )}
        {step.type !== 'step' && (
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <span>{getStepIcon(step)}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-medium">{step.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              {isChecklistItem && (
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox
                    id={step.id}
                    checked={completed}
                    onCheckedChange={() => toggleItem(step.id)}
                    data-testid={`checkbox-${step.id}`}
                  />
                  <label htmlFor={step.id} className="text-sm cursor-pointer">
                    Completed
                  </label>
                </div>
              )}
            </div>
            <Badge variant={getStepVariant(step.type)} className="ml-2 flex-shrink-0">
              {step.type}
            </Badge>
          </div>
        </div>
      </div>
    );
  };

  if (section.steps.length === 0 && !section.subsections) {
    return null;
  }

  return (
    <div className={level > 0 ? "ml-4" : ""} data-testid={`section-${section.id}`}>
      <Card className="mb-6">
        <CardHeader 
          className="cursor-pointer" 
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid={`section-header-${section.id}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {level === 0 && (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  section.color === 'exterior-accent' ? 'bg-green-100 dark:bg-green-900' :
                  section.color === 'interior-accent' ? 'bg-purple-100 dark:bg-purple-900' :
                  section.color === 'settings-accent' ? 'bg-orange-100 dark:bg-orange-900' :
                  'bg-gray-100 dark:bg-gray-800'
                }`}>
                  <span className={section.color}>
                    {getIconComponent(section.icon)}
                  </span>
                </div>
              )}
              <h2 className={level === 0 ? "text-2xl font-bold" : "text-lg font-semibold"}>
                {section.title}
              </h2>
            </div>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              data-testid={`chevron-${section.id}`}
            />
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent>
            {section.steps.length > 0 && (
              <div className="space-y-2 mb-4">
                {section.steps.map((step, index) => renderStep(step, index))}
              </div>
            )}
            
            {section.subsections && (
              <div className="space-y-4">
                {section.subsections.map((subsection) => (
                  <GuideSection 
                    key={subsection.id} 
                    section={subsection} 
                    level={level + 1}
                  />
                ))}
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}
