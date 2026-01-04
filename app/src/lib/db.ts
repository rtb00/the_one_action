import Dexie, { type EntityTable } from 'dexie';

// User profile and settings
export interface UserProfile {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  hasCompletedOnboarding: boolean;
  healthFocusAreas: string[]; // Selected during onboarding
  name?: string;
  birthDate?: Date;
}

// The One Action (14-day health action)
export interface HealthAction {
  id: number;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  category: string; // e.g., "Movement", "Nutrition", "Sleep", etc.
  isActive: boolean;
  isCompleted: boolean;
  completedAt?: Date;
}

// Daily check-ins for tracking action completion
export interface DailyCheckIn {
  id: number;
  actionId: number; // Foreign key to HealthAction
  date: Date;
  completed: boolean;
  notes?: string;
  createdAt: Date;
}

// Biological age trend data (not absolute values, just trends)
export interface BioAgeTrend {
  id: number;
  date: Date;
  trendValue: number; // Relative value for visualization (not actual age)
  category: string; // e.g., "Overall", "Cardiovascular", "Metabolic"
  createdAt: Date;
}

// Health metrics and measurements
export interface HealthMetric {
  id: number;
  date: Date;
  type: string; // e.g., "weight", "steps", "sleep_hours"
  value: number;
  unit: string;
  createdAt: Date;
}

// Settings and preferences
export interface AppSettings {
  id: number;
  key: string;
  value: string;
  updatedAt: Date;
}

// Database class
export class TheOneActionDB extends Dexie {
  userProfile!: EntityTable<UserProfile, 'id'>;
  healthActions!: EntityTable<HealthAction, 'id'>;
  dailyCheckIns!: EntityTable<DailyCheckIn, 'id'>;
  bioAgeTrends!: EntityTable<BioAgeTrend, 'id'>;
  healthMetrics!: EntityTable<HealthMetric, 'id'>;
  appSettings!: EntityTable<AppSettings, 'id'>;

  constructor() {
    super('TheOneActionDB');

    this.version(1).stores({
      userProfile: '++id, createdAt, updatedAt, hasCompletedOnboarding',
      healthActions: '++id, startDate, endDate, isActive, isCompleted, category',
      dailyCheckIns: '++id, actionId, date, completed',
      bioAgeTrends: '++id, date, category',
      healthMetrics: '++id, date, type',
      appSettings: '++id, key',
    });
  }
}

// Export singleton instance
export const db = new TheOneActionDB();

// Initialize default user profile if needed
export async function initializeDatabase() {
  try {
    const profileCount = await db.userProfile.count();

    if (profileCount === 0) {
      await db.userProfile.add({
        createdAt: new Date(),
        updatedAt: new Date(),
        hasCompletedOnboarding: false,
        healthFocusAreas: [],
      });
    }
  } catch (error) {
    // Profile already exists, ignore error
    console.log('Database already initialized');
  }
}
