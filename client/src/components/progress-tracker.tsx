import { useProgress } from "@/hooks/use-progress";

interface ProgressTrackerProps {
  className?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ProgressTracker({ 
  className = "", 
  showPercentage = true, 
  size = "md" 
}: ProgressTrackerProps) {
  const { percentage } = useProgress();
  
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16", 
    lg: "w-20 h-20"
  };
  
  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const circumference = 87.96; // 2 * π * r where r = 14
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`} data-testid="progress-tracker">
      <svg 
        className={`${sizeClasses[size]} transform -rotate-90`} 
        viewBox="0 0 32 32"
        data-testid="progress-ring"
      >
        <circle 
          cx="16" 
          cy="16" 
          r="14" 
          fill="none" 
          stroke="hsl(var(--muted))" 
          strokeWidth="2"
        />
        <circle 
          cx="16" 
          cy="16" 
          r="14" 
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="progress-ring transition-all duration-300"
        />
      </svg>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className={`${textSizeClasses[size]} font-medium`}
            data-testid="progress-percentage"
          >
            {percentage}%
          </span>
        </div>
      )}
    </div>
  );
}
