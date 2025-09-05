import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SettingsCalculator() {
  return (
    <Card className="mb-6" data-testid="settings-calculator">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="settings-accent">⚙️</span>
          <span>Quick Settings Reference</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daytime Settings */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center space-x-2">
              <span>☀️</span>
              <span>Bright Day Settings</span>
            </h4>
            <div className="space-y-2">
              <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded text-sm">
                <div className="font-medium text-green-800 dark:text-green-200">Aperture: f/4 or f/5.6</div>
                <div className="font-medium text-green-800 dark:text-green-200">ISO: 200</div>
                <div className="font-medium text-green-800 dark:text-green-200">Frame Rate: 4K @ 60fps</div>
                <div className="font-medium text-green-800 dark:text-green-200">White Balance: 5400K-5600K</div>
                <div className="font-medium text-green-800 dark:text-green-200">Filters: CPL + ND</div>
                <div className="text-green-700 dark:text-green-300 mt-1 text-xs">Always adjust CPL before each shot</div>
              </div>
            </div>
          </div>

          {/* Afternoon Settings */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center space-x-2">
              <span>🌅</span>
              <span>Afternoon/Sunset</span>
            </h4>
            <div className="space-y-2">
              <div className="p-3 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded text-sm">
                <div className="font-medium text-orange-800 dark:text-orange-200">Aperture: f/4 or f/5.6</div>
                <div className="font-medium text-orange-800 dark:text-orange-200">ISO: 200</div>
                <div className="font-medium text-orange-800 dark:text-orange-200">Frame Rate: 4K @ 60fps</div>
                <div className="font-medium text-orange-800 dark:text-orange-200">White Balance: 4800K-5000K</div>
                <div className="font-medium text-orange-800 dark:text-orange-200">Filters: CPL + ND</div>
                <div className="text-orange-700 dark:text-orange-300 mt-1 text-xs">Golden hour lighting</div>
              </div>
            </div>
          </div>

          {/* Night Settings */}
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center space-x-2">
              <span>🌙</span>
              <span>Low Light/Night</span>
            </h4>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded text-sm">
                <div className="font-medium text-blue-800 dark:text-blue-200">Aperture: f/1.4 or f/1.8</div>
                <div className="font-medium text-blue-800 dark:text-blue-200">ISO: Max 1800</div>
                <div className="font-medium text-blue-800 dark:text-blue-200">Frame Rate: 4K @ 60fps</div>
                <div className="font-medium text-blue-800 dark:text-blue-200">White Balance:</div>
                <div className="text-blue-700 dark:text-blue-300 text-xs ml-2">• Warm lights: 3400K-3600K</div>
                <div className="text-blue-700 dark:text-blue-300 text-xs ml-2">• White lights: 4800K-5000K</div>
                <div className="font-medium text-red-600 dark:text-red-400">⚠️ Remove ALL filters</div>
              </div>
            </div>
          </div>
        </div>

        {/* General Notes */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded">
          <h4 className="font-semibold mb-2">Important Filter Setup Notes</h4>
          <div className="text-sm space-y-1">
            <div>• Use 72mm to 77mm step-up ring</div>
            <div>• Attach ND filter first, then CPL filter on front</div>
            <div>• Always adjust CPL before each shot</div>
            <div>• <span className="text-red-600 dark:text-red-400 font-medium">DO NOT adjust ND filter</span></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
