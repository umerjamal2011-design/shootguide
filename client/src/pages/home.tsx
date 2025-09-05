import { useState, useEffect } from "react";
import { Search, Camera, Moon, Sun, Printer, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { GuideSection } from "@/components/guide-section";
import { ProgressTracker } from "@/components/progress-tracker";
import { MobileMenu } from "@/components/mobile-menu";
import { SettingsCalculator } from "@/components/settings-calculator";
import { useTheme } from "@/components/theme-provider";
import { useProgress } from "@/hooks/use-progress";
import { guideData, getAllChecklistItems } from "@/lib/guide-data";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { percentage, resetProgress, registerTotalItems } = useProgress();

  useEffect(() => {
    const totalItems = getAllChecklistItems().length;
    registerTotalItems(totalItems);
  }, [registerTotalItems]);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = guideData.filter(section => 
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.steps.some(step => 
      step.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      step.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    (section.subsections && section.subsections.some(subsection =>
      subsection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subsection.steps.some(step =>
        step.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        step.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ))
  );

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border no-print">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Camera className="text-primary text-xl" />
                <h1 className="text-xl font-bold" data-testid="app-title">Car Photoshoot Guide</h1>
              </div>
              <div className="hidden md:flex items-center space-x-1 bg-muted rounded-lg p-1">
                <span className="text-sm text-muted-foreground">Progress:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300" 
                      style={{ width: `${percentage}%` }}
                      data-testid="progress-bar"
                    />
                  </div>
                  <span className="text-sm font-medium" data-testid="progress-text">
                    {percentage}%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative hidden md:block">
                <Input
                  type="text"
                  placeholder="Search techniques..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pr-10"
                  data-testid="search-input"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="theme-toggle"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <MobileMenu 
                onNavigate={handleNavigate}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="sticky top-16 h-[calc(100vh-4rem)] w-80 bg-card border-r border-border overflow-y-auto hidden md:block no-print">
          <div className="p-4">
            <div className="space-y-2">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={handlePrint}
                    data-testid="print-button"
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Print Guide
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={resetProgress}
                    data-testid="reset-progress-button"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset Progress
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Table of Contents
                </h3>
                <ul className="space-y-1">
                  {guideData.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleNavigate(section.id)}
                        className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors flex items-center space-x-2"
                        data-testid={`nav-${section.id}`}
                      >
                        <span className={section.color}>
                          {section.icon === "info-circle" && "ℹ️"}
                          {section.icon === "car" && "🚗"}
                          {section.icon === "couch" && "🪑"}
                          {section.icon === "cog" && "⚙️"}
                          {section.icon === "tools" && "🔧"}
                          {section.icon === "video" && "📹"}
                        </span>
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            
            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-lg text-primary-foreground mb-6">
                <h2 className="text-2xl font-bold mb-2">Car Photoshoot Guide</h2>
                <p className="text-primary-foreground/90">
                  A comprehensive step-by-step process for professional car photography, 
                  covering exterior and interior shots with specific camera techniques.
                </p>
              </div>
              
              {/* Quick Reference Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Camera className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Main Lens</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Sigma 18-35mm f/1.8</p>
                    <p className="text-xs text-muted-foreground mt-1">Best lens for this shoot type</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="settings-accent">📹</span>
                      <h3 className="font-semibold">Frame Rate</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">4K @ 60fps</p>
                    <p className="text-xs text-muted-foreground mt-1">For slow-motion flexibility</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span>⚖️</span>
                      <h3 className="font-semibold">Gimbal Mode</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Pan Follow</p>
                    <p className="text-xs text-muted-foreground mt-1">Avoid standard Follow mode</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Settings Calculator */}
            <SettingsCalculator />

            {/* Guide Sections */}
            {filteredSections.map((section) => (
              <section key={section.id} id={section.id}>
                <GuideSection section={section} />
              </section>
            ))}
          </div>
        </main>
      </div>

      {/* Floating Progress Indicator (Mobile) */}
      <div className="fixed bottom-4 right-4 md:hidden no-print">
        <div className="bg-card border border-border rounded-full p-3 shadow-lg">
          <ProgressTracker size="sm" />
        </div>
      </div>
    </div>
  );
}
