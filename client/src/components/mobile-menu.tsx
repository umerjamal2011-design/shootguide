import { useState } from "react";
import { Search, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { guideData } from "@/lib/guide-data";

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function MobileMenu({ onNavigate, searchTerm, onSearchChange }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  const getIconName = (iconName: string) => {
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

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        data-testid="mobile-menu-toggle"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden" data-testid="mobile-menu-overlay">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-card border-l border-border p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                data-testid="mobile-menu-close"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative mb-6">
              <Input
                type="text"
                placeholder="Search techniques..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pr-10"
                data-testid="mobile-search-input"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <nav className="space-y-2">
              {guideData.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigate(section.id)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors flex items-center space-x-2"
                  data-testid={`mobile-nav-${section.id}`}
                >
                  <span>{getIconName(section.icon)}</span>
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
