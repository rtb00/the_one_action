import { create } from 'zustand';

export interface OnboardingState {
  // User Info
  age: number | null;
  gender: 'male' | 'female' | 'other' | null;
  height: number | null;
  weight: number | null;

  // Health Assessment
  movement: { stepsPerDay: string } | null;
  sleep: { hoursPerNight: string } | null;
  nutrition: { ultraProcessedFood: string } | null;
  stress: { level: string } | null;

  // Risk Factors
  smoking: { smokes: boolean; motivation?: number } | null;
  alcohol: { concerned: boolean; motivation?: number } | null;

  // Result
  healthLever: 'movement' | 'sleep' | 'nutrition' | 'stress' | null;
  actionAccepted: boolean | null;
  rejectionReason: string | null;

  // Actions
  setAge: (age: number) => void;
  setGender: (gender: 'male' | 'female' | 'other') => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
  setMovement: (stepsPerDay: string) => void;
  setSleep: (hoursPerNight: string) => void;
  setNutrition: (ultraProcessedFood: string) => void;
  setStress: (level: string) => void;
  setSmoking: (smokes: boolean, motivation?: number) => void;
  setAlcohol: (concerned: boolean, motivation?: number) => void;
  setHealthLever: (lever: 'movement' | 'sleep' | 'nutrition' | 'stress') => void;
  setActionAccepted: (accepted: boolean) => void;
  setRejectionReason: (reason: string) => void;
  calculateHealthLever: () => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
  // Initial State
  age: null,
  gender: null,
  height: null,
  weight: null,
  movement: null,
  sleep: null,
  nutrition: null,
  stress: null,
  smoking: null,
  alcohol: null,
  healthLever: null,
  actionAccepted: null,
  rejectionReason: null,

  // Setters
  setAge: (age) => set({ age }),
  setGender: (gender) => set({ gender }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  setMovement: (stepsPerDay) => set({ movement: { stepsPerDay } }),
  setSleep: (hoursPerNight) => set({ sleep: { hoursPerNight } }),
  setNutrition: (ultraProcessedFood) => set({ nutrition: { ultraProcessedFood } }),
  setStress: (level) => set({ stress: { level } }),
  setSmoking: (smokes, motivation) => set({ smoking: { smokes, motivation } }),
  setAlcohol: (concerned, motivation) => set({ alcohol: { concerned, motivation } }),
  setHealthLever: (lever) => set({ healthLever: lever }),
  setActionAccepted: (accepted) => set({ actionAccepted: accepted }),
  setRejectionReason: (reason) => set({ rejectionReason: reason }),

  // Calculate Health Lever Algorithm
  calculateHealthLever: () => {
    const state = get();

    // Scoring function - higher score = worse health (higher harm)
    const scores: Record<string, number> = {
      movement: getMovementScore(state.movement?.stepsPerDay),
      sleep: getSleepScore(state.sleep?.hoursPerNight),
      nutrition: getNutritionScore(state.nutrition?.ultraProcessedFood),
      stress: getStressScore(state.stress?.level),
    };

    // Find the worst score (highest harm)
    const sortedDomains = Object.entries(scores)
      .sort(([, a], [, b]) => b - a); // Sort descending

    const worstDomain = sortedDomains[0][0] as 'movement' | 'sleep' | 'nutrition' | 'stress';

    set({ healthLever: worstDomain });
  },

  reset: () => set({
    age: null,
    gender: null,
    height: null,
    weight: null,
    movement: null,
    sleep: null,
    nutrition: null,
    stress: null,
    smoking: null,
    alcohol: null,
    healthLever: null,
    actionAccepted: null,
    rejectionReason: null,
  }),
}));

// Scoring functions - higher = worse health
function getMovementScore(stepsPerDay: string | undefined): number {
  if (!stepsPerDay) return 0;
  const scoreMap: Record<string, number> = {
    '< 3000': 5,
    '3000 - 5000': 4,
    '5000 - 7000': 3,
    '7000 - 9000': 2,
    '> 9000': 1,
  };
  return scoreMap[stepsPerDay] || 0;
}

function getSleepScore(hoursPerNight: string | undefined): number {
  if (!hoursPerNight) return 0;
  const scoreMap: Record<string, number> = {
    '< 4h': 5,
    '4-5 h': 4,
    '5-6 h': 3,
    '6-7 h': 2,
    '> 9h': 1, // Too much sleep can also be an issue
  };
  return scoreMap[hoursPerNight] || 0;
}

function getNutritionScore(ultraProcessedFood: string | undefined): number {
  if (!ultraProcessedFood) return 0;
  const scoreMap: Record<string, number> = {
    '> 50%': 5,
    '40-50%': 4,
    '20-40%': 3,
    '10-20%': 2,
    '< 10%': 1,
  };
  return scoreMap[ultraProcessedFood] || 0;
}

function getStressScore(level: string | undefined): number {
  if (!level) return 0;
  const scoreMap: Record<string, number> = {
    'Sehr stark': 5,
    'Stark': 4,
    'Moderat': 3,
    'Wenig': 2,
    'Gar nicht': 1,
  };
  return scoreMap[level] || 0;
}
