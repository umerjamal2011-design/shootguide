import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ShootingCondition = "bright-day" | "afternoon" | "low-light";
type StreetlightType = "warm" | "white";

interface CameraSettings {
  aperture: string;
  iso: string;
  whiteBalance: string;
  filters: string;
  notes: string;
}

export function SettingsCalculator() {
  const [condition, setCondition] = useState<ShootingCondition>("bright-day");
  const [streetlightType, setStreetlightType] = useState<StreetlightType>("warm");

  const getSettings = (): CameraSettings => {
    switch (condition) {
      case "bright-day":
        return {
          aperture: "f/4 or f/5.6",
          iso: "200",
          whiteBalance: "5400K - 5600K",
          filters: "CPL + ND filters",
          notes: "Adjust CPL before each shot. Don't adjust ND filter."
        };
      case "afternoon":
        return {
          aperture: "f/4 or f/5.6",
          iso: "200",
          whiteBalance: "4800K - 5000K",
          filters: "CPL + ND filters",
          notes: "Golden hour lighting. Adjust CPL for reflections."
        };
      case "low-light":
        return {
          aperture: "f/1.4 or f/1.8",
          iso: "Max 1800",
          whiteBalance: streetlightType === "warm" ? "3400K - 3600K" : "4800K - 5000K",
          filters: "Remove all filters",
          notes: "Remove ND and CPL filters. Open aperture wide for maximum light."
        };
      default:
        return getSettings();
    }
  };

  const settings = getSettings();

  return (
    <Card className="mb-6" data-testid="settings-calculator">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="settings-accent">⚙️</span>
          <span>Settings Calculator</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Shooting Condition</label>
            <Select value={condition} onValueChange={(value) => setCondition(value as ShootingCondition)}>
              <SelectTrigger data-testid="condition-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bright-day">Bright Sunny Day</SelectItem>
                <SelectItem value="afternoon">Afternoon/Sunset</SelectItem>
                <SelectItem value="low-light">Low Light/Night</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {condition === "low-light" && (
            <div>
              <label className="block text-sm font-medium mb-2">Streetlight Type</label>
              <Select value={streetlightType} onValueChange={(value) => setStreetlightType(value as StreetlightType)}>
                <SelectTrigger data-testid="streetlight-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warm">Warm Yellow</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Camera Settings</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-muted rounded text-sm">
                <span>Aperture</span>
                <span className="font-medium" data-testid="calculated-aperture">{settings.aperture}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded text-sm">
                <span>ISO</span>
                <span className="font-medium" data-testid="calculated-iso">{settings.iso}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted rounded text-sm">
                <span>White Balance</span>
                <span className="font-medium" data-testid="calculated-wb">{settings.whiteBalance}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold">Filters & Notes</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-muted rounded text-sm">
                <span>Filters</span>
                <span className="font-medium" data-testid="calculated-filters">{settings.filters}</span>
              </div>
              <div className="p-2 bg-accent/10 border border-accent/20 rounded text-sm">
                <p className="text-muted-foreground" data-testid="calculated-notes">{settings.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
