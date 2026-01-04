import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserProfile, HealthAction } from './db';

interface AppState {
  // User state
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile) => void;

  // Current action state
  currentAction: HealthAction | null;
  setCurrentAction: (action: HealthAction | null) => void;

  // Onboarding state
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (completed: boolean) => void;

  // Navigation state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // UI state
  isSidebarOpen: boolean;
  toggleSidebar: () => void;

  // Actions
  resetApp: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      userProfile: null,
      currentAction: null,
      hasCompletedOnboarding: false,
      isLoading: false,
      isSidebarOpen: false,

      // User actions
      setUserProfile: (profile) => set({ userProfile: profile }),

      // Action management
      setCurrentAction: (action) => set({ currentAction: action }),

      // Onboarding
      setHasCompletedOnboarding: (completed) =>
        set({ hasCompletedOnboarding: completed }),

      // Loading state
      setIsLoading: (loading) => set({ isLoading: loading }),

      // UI actions
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

      // Reset
      resetApp: () =>
        set({
          userProfile: null,
          currentAction: null,
          hasCompletedOnboarding: false,
          isLoading: false,
          isSidebarOpen: false,
        }),
    }),
    {
      name: 'theoneaction-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        hasCompletedOnboarding: state.hasCompletedOnboarding,
      }),
    }
  )
);
