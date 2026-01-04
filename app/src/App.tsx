import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAppStore } from './lib/store';
import { initializeDatabase } from './lib/db';

// Old Pages (to be replaced)
import Onboarding from './pages/Onboarding';
import MainAction from './pages/MainAction';
import Plan from './pages/Plan';
import Progress from './pages/Progress';
import Settings from './pages/Settings';

// New Onboarding Screens
import WelcomeScreen from './features/onboarding/screens/WelcomeScreen';
import BasicDataScreen from './features/onboarding/screens/BasicDataScreen';
import AgeScreen from './features/onboarding/screens/AgeScreen';
import GenderScreen from './features/onboarding/screens/GenderScreen';
import HeightScreen from './features/onboarding/screens/HeightScreen';
import WeightScreen from './features/onboarding/screens/WeightScreen';
import MovementScreen from './features/onboarding/screens/MovementScreen';
import SleepScreen from './features/onboarding/screens/SleepScreen';
import NutritionScreen from './features/onboarding/screens/NutritionScreen';
import StressScreen from './features/onboarding/screens/StressScreen';
import TransitionScreen from './features/onboarding/screens/TransitionScreen';
import SmokingScreen from './features/onboarding/screens/SmokingScreen';
import SmokingMotivationScreen from './features/onboarding/screens/SmokingMotivationScreen';
import SmokingReflectionScreen from './features/onboarding/screens/SmokingReflectionScreen';
import SmokingInfoScreen from './features/onboarding/screens/SmokingInfoScreen';
import AlcoholScreen from './features/onboarding/screens/AlcoholScreen';
import AlcoholMotivationScreen from './features/onboarding/screens/AlcoholMotivationScreen';
import AlcoholReflectionScreen from './features/onboarding/screens/AlcoholReflectionScreen';
import AlcoholInfoScreen from './features/onboarding/screens/AlcoholInfoScreen';
import LoadingScreen from './features/onboarding/screens/LoadingScreen';
import ResultCircleScreen from './features/onboarding/screens/ResultCircleScreen';
import ActionScreen from './features/onboarding/screens/ActionScreen';
import SuccessScreen from './features/onboarding/screens/SuccessScreen';
import SummaryScreen from './features/onboarding/screens/SummaryScreen';
import ReasonsScreen from './features/onboarding/screens/ReasonsScreen';
import AlternativeScreen from './features/onboarding/screens/AlternativeScreen';
import ComingSoonScreen from './features/onboarding/screens/ComingSoonScreen';
import AnimationDemo from './pages/AnimationDemo';

function AnimatedRoutes() {
  const location = useLocation();
  const hasCompletedOnboarding = useAppStore((state) => state.hasCompletedOnboarding);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Onboarding Flow */}
        <Route path="/onboarding" element={<WelcomeScreen />} />
        <Route path="/onboarding/basic" element={<BasicDataScreen />} />
        <Route path="/onboarding/age" element={<AgeScreen />} />
        <Route path="/onboarding/gender" element={<GenderScreen />} />
        <Route path="/onboarding/height" element={<HeightScreen />} />
        <Route path="/onboarding/weight" element={<WeightScreen />} />
        <Route path="/onboarding/movement" element={<MovementScreen />} />
        <Route path="/onboarding/sleep" element={<SleepScreen />} />
        <Route path="/onboarding/nutrition" element={<NutritionScreen />} />
        <Route path="/onboarding/stress" element={<StressScreen />} />
        <Route path="/onboarding/transition" element={<TransitionScreen />} />
        <Route path="/onboarding/smoking" element={<SmokingScreen />} />
        <Route path="/onboarding/smoking/motivation" element={<SmokingMotivationScreen />} />
        <Route path="/onboarding/smoking/reflection" element={<SmokingReflectionScreen />} />
        <Route path="/onboarding/smoking/info" element={<SmokingInfoScreen />} />
        <Route path="/onboarding/alcohol" element={<AlcoholScreen />} />
        <Route path="/onboarding/alcohol/motivation" element={<AlcoholMotivationScreen />} />
        <Route path="/onboarding/alcohol/reflection" element={<AlcoholReflectionScreen />} />
        <Route path="/onboarding/alcohol/info" element={<AlcoholInfoScreen />} />
        <Route path="/onboarding/analyzing" element={<LoadingScreen />} />
        <Route path="/onboarding/result" element={<ResultCircleScreen />} />
        <Route path="/onboarding/action" element={<ActionScreen />} />
        <Route path="/onboarding/success" element={<SuccessScreen />} />
        <Route path="/onboarding/summary" element={<SummaryScreen />} />
        <Route path="/onboarding/reasons" element={<ReasonsScreen />} />
        <Route path="/onboarding/alternative" element={<AlternativeScreen />} />
        <Route path="/onboarding/coming-soon" element={<ComingSoonScreen />} />

        {/* Animation Demo */}
        <Route path="/demo" element={<AnimationDemo />} />

        {/* Main App Screens (Protected by onboarding) */}
        <Route
          path="/action"
          element={
            hasCompletedOnboarding ? <MainAction /> : <Navigate to="/onboarding" replace />
          }
        />
        <Route
          path="/plan"
          element={
            hasCompletedOnboarding ? <Plan /> : <Navigate to="/onboarding" replace />
          }
        />
        <Route path="/progress"
          element={
            hasCompletedOnboarding ? <Progress /> : <Navigate to="/onboarding" replace />
          }
        />
        <Route
          path="/settings"
          element={
            hasCompletedOnboarding ? <Settings /> : <Navigate to="/onboarding" replace />
          }
        />

        {/* Redirect root to onboarding */}
        <Route path="/" element={<Navigate to="/onboarding" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    // Initialize database on app start
    initializeDatabase().catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
