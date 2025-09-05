export interface GuideStep {
  id: string;
  title: string;
  description: string;
  type: 'step' | 'checklist' | 'warning' | 'tip';
}

export interface GuideSection {
  id: string;
  title: string;
  icon: string;
  color: string;
  steps: GuideStep[];
  subsections?: GuideSection[];
}

export const guideData: GuideSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: "info-circle",
    color: "text-primary",
    steps: [
      {
        id: "overview-intro",
        title: "Car Photoshoot Guide",
        description: "A comprehensive step-by-step process for professional car photography, covering exterior and interior shots with specific camera techniques.",
        type: "step"
      }
    ]
  },
  {
    id: "exterior-shots",
    title: "Exterior Profile Shots",
    icon: "car",
    color: "exterior-accent",
    steps: [],
    subsections: [
      {
        id: "profile-shots",
        title: "Profile Shots (Sides, Front, Back)",
        icon: "camera",
        color: "exterior-accent",
        steps: [
          {
            id: "start-wide",
            title: "Start Wide",
            description: "Begin with a wide-angle shot of the car",
            type: "step"
          },
          {
            id: "pan-in",
            title: "Pan In",
            description: "While recording, slowly and steadily walk towards the car",
            type: "step"
          },
          {
            id: "maintain-stability",
            title: "Maintain Stability",
            description: "Ensure smooth, stable steps to avoid shaky footage",
            type: "step"
          },
          {
            id: "left-side-profile",
            title: "Left Side Profile",
            description: "Complete left side profile shot",
            type: "checklist"
          },
          {
            id: "right-side-profile",
            title: "Right Side Profile",
            description: "Complete right side profile shot",
            type: "checklist"
          },
          {
            id: "front-profile",
            title: "Front Profile",
            description: "Complete front profile shot",
            type: "checklist"
          },
          {
            id: "back-profile",
            title: "Back Profile",
            description: "Complete back profile shot",
            type: "checklist"
          }
        ]
      },
      {
        id: "angle-shots",
        title: "45-Degree Angle Shots",
        icon: "triangle-exclamation",
        color: "warning-accent",
        steps: [
          {
            id: "front-left-45",
            title: "Front Left 45°",
            description: "Capture 45-degree angle from front left corner",
            type: "checklist"
          },
          {
            id: "front-right-45",
            title: "Front Right 45°",
            description: "Capture 45-degree angle from front right corner",
            type: "checklist"
          },
          {
            id: "rear-left-45",
            title: "Rear Left 45°",
            description: "Capture 45-degree angle from rear left corner",
            type: "checklist"
          },
          {
            id: "rear-right-45",
            title: "Rear Right 45°",
            description: "Capture 45-degree angle from rear right corner",
            type: "checklist"
          }
        ]
      },
      {
        id: "hero-shots",
        title: "Hero Shots",
        icon: "star",
        color: "settings-accent",
        steps: [
          {
            id: "wide-angle-hero",
            title: "Wide Angle Shot",
            description: "Capture with wide lens to show car in environment",
            type: "step"
          },
          {
            id: "zoomed-hero",
            title: "Zoomed In Shot",
            description: "From same position, zoom in for detailed hero shot",
            type: "step"
          }
        ]
      }
    ]
  },
  {
    id: "interior-shots",
    title: "Interior & Detail Shots",
    icon: "couch",
    color: "interior-accent",
    steps: [],
    subsections: [
      {
        id: "exterior-details",
        title: "Exterior Details",
        icon: "car",
        color: "exterior-accent",
        steps: [
          {
            id: "brake-calipers",
            title: "Brake Calipers",
            description: "The part of a disc brake system that holds the brake pads and applies pressure to the rotor",
            type: "checklist"
          },
          {
            id: "charging-port",
            title: "Electric Charging Port / Fuel Door",
            description: "Small door on the side covering the charging port or gas cap",
            type: "checklist"
          },
          {
            id: "badges",
            title: "Badges",
            description: "Emblems or logos of the car's make, model, or trim level",
            type: "checklist"
          }
        ]
      },
      {
        id: "interior-details",
        title: "Interior Details",
        icon: "couch",
        color: "interior-accent",
        steps: [
          {
            id: "gear-shifter",
            title: "Gear Shifter",
            description: "The lever or button used to change gears",
            type: "checklist"
          },
          {
            id: "speedometer",
            title: "Speedometer",
            description: "Close-up of the speedometer",
            type: "checklist"
          },
          {
            id: "upholstery",
            title: "Upholstery & Stitching",
            description: "Beautiful interior features, especially leather details",
            type: "checklist"
          },
          {
            id: "dashboard",
            title: "Dashboard & Monograms",
            description: "Dashboard details and any monograms or car name",
            type: "checklist"
          },
          {
            id: "porsche-watch",
            title: "Center Console Watch (Porsche)",
            description: "Close-up of the watch in the center console for Porsche vehicles",
            type: "tip"
          }
        ]
      },
      {
        id: "wide-interior",
        title: "Wide Interior Shots",
        icon: "expand",
        color: "interior-accent",
        steps: [
          {
            id: "passenger-side-wide",
            title: "From Passenger Side",
            description: "Wide shot showing both front seats and steering wheel",
            type: "checklist"
          },
          {
            id: "driver-side-wide",
            title: "From Driver Side",
            description: "Wide shot showing both front seats and steering wheel",
            type: "checklist"
          }
        ]
      }
    ]
  },
  {
    id: "camera-settings",
    title: "Camera Settings",
    icon: "cog",
    color: "settings-accent",
    steps: [],
    subsections: [
      {
        id: "daytime-settings",
        title: "Daytime Settings & Filters",
        icon: "sun",
        color: "settings-accent",
        steps: [
          {
            id: "daytime-aperture",
            title: "Aperture: f/4 or f/5.6",
            description: "Use f/4 or f/5.6 for daytime shooting",
            type: "step"
          },
          {
            id: "daytime-iso",
            title: "ISO: 200",
            description: "Set ISO to 200 for bright conditions",
            type: "step"
          },
          {
            id: "frame-rate",
            title: "Frame Rate: 4K @ 60fps",
            description: "Record in 4K at 60fps for slow-motion flexibility",
            type: "step"
          },
          {
            id: "filter-setup",
            title: "Filter Setup",
            description: "Use 72mm to 77mm step-up ring. Attach ND filter first, then CPL filter on front. Always adjust CPL before each shot - Do NOT adjust ND filter.",
            type: "warning"
          }
        ]
      },
      {
        id: "night-settings",
        title: "Low Light / Night Settings",
        icon: "moon",
        color: "settings-accent",
        steps: [
          {
            id: "remove-filters",
            title: "Remove All Filters",
            description: "Remove all ND and CPL filters from the lens",
            type: "warning"
          },
          {
            id: "night-aperture",
            title: "Aperture: f/1.4 or f/1.8",
            description: "Set aperture to f/1.4 or f/1.8 for maximum light intake",
            type: "step"
          },
          {
            id: "night-iso",
            title: "ISO: Max 1800",
            description: "Set ISO to maximum 1800, adjust as needed for brightness",
            type: "step"
          }
        ]
      }
    ]
  },
  {
    id: "equipment",
    title: "Equipment Notes",
    icon: "tools",
    color: "text-muted-foreground",
    steps: [
      {
        id: "main-lens",
        title: "Main Lens: Sigma 18-35mm f/1.8",
        description: "Best lens for this type of shoot with GH5 camera",
        type: "step"
      },
      {
        id: "close-up-lens",
        title: "Close-Up Lens: 50mm",
        description: "For extra close-up shots. Remember to re-stabilize gimbal after changing lenses",
        type: "step"
      },
      {
        id: "vignetting-fix",
        title: "18mm Vignetting Fix",
        description: "At 18mm, you may see black circular shadows. Zoom to around 20mm to eliminate vignetting",
        type: "warning"
      },
      {
        id: "gimbal-battery",
        title: "Gimbal Battery Warning",
        description: "One of the gimbal batteries is broken - be careful during initial setup",
        type: "warning"
      },
      {
        id: "gimbal-mode",
        title: "Gimbal Mode: Pan Follow",
        description: "Use Pan Follow mode for all shots. Avoid standard Follow Mode as it follows all axes and can cause unwanted shaking",
        type: "step"
      }
    ]
  },
  {
    id: "techniques",
    title: "Focus Techniques",
    icon: "video",
    color: "text-muted-foreground",
    steps: [
      {
        id: "identify-midpoint",
        title: "Identify Midpoint",
        description: "Find the center point of your planned pan where the car will be perfectly framed",
        type: "step"
      },
      {
        id: "set-focus",
        title: "Set Focus",
        description: "Manually set camera focus on the car at this midpoint position",
        type: "step"
      },
      {
        id: "start-and-pan",
        title: "Start and Pan",
        description: "Return to starting position, begin recording, and execute the pan",
        type: "step"
      },
      {
        id: "focus-technique-tip",
        title: "Why This Works",
        description: "The car gradually comes into perfect focus during the pan and stays sharp as you pass through center and continue to the end. This prevents out-of-focus footage in the most important part of the shot.",
        type: "tip"
      }
    ]
  }
];

export function getAllChecklistItems(): string[] {
  const items: string[] = [];
  
  function extractItems(sections: GuideSection[]) {
    sections.forEach(section => {
      section.steps.forEach(step => {
        if (step.type === 'checklist' || step.type === 'step') {
          items.push(step.id);
        }
      });
      if (section.subsections) {
        extractItems(section.subsections);
      }
    });
  }
  
  extractItems(guideData);
  return items;
}
