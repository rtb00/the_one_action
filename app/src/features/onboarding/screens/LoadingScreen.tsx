import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Layout from '../../../components/Layout';
import { useOnboardingStore } from '../store/onboardingStore';
import { Vortex } from '../../../components/ui/vortex';

export default function LoadingScreen() {
  const navigate = useNavigate();
  const { calculateHealthLever } = useOnboardingStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate health lever
    calculateHealthLever();

    // Smooth animation with pauses at 20% and 70%
    let startTime: number;
    let animationFrame: number;
    let pauseStartTime: number | null = null;
    let currentPhase: 'phase1' | 'pause1' | 'phase2' | 'pause2' | 'phase3' | 'done' = 'phase1';

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      let newProgress: number;

      if (currentPhase === 'phase1') {
        // 0-20% in 2 seconds
        if (elapsed < 2000) {
          newProgress = (elapsed / 2000) * 20;
        } else {
          newProgress = 20;
          currentPhase = 'pause1';
          pauseStartTime = timestamp;
        }
      } else if (currentPhase === 'pause1') {
        // Pause at 20% for 0.5 seconds
        newProgress = 20;
        if (pauseStartTime && timestamp - pauseStartTime >= 500) {
          currentPhase = 'phase2';
          startTime = timestamp;
        }
      } else if (currentPhase === 'phase2') {
        // 20-70% in 3 seconds
        if (elapsed < 3000) {
          newProgress = 20 + (elapsed / 3000) * 50;
        } else {
          newProgress = 70;
          currentPhase = 'pause2';
          pauseStartTime = timestamp;
        }
      } else if (currentPhase === 'pause2') {
        // Pause at 70% for 0.5 seconds
        newProgress = 70;
        if (pauseStartTime && timestamp - pauseStartTime >= 500) {
          currentPhase = 'phase3';
          startTime = timestamp;
        }
      } else if (currentPhase === 'phase3') {
        // 70-100% in 2 seconds
        if (elapsed < 2000) {
          newProgress = 70 + (elapsed / 2000) * 30;
        } else {
          newProgress = 100;
          currentPhase = 'done';
        }
      } else {
        newProgress = 100;
        setProgress(100);
        setTimeout(() => {
          navigate('/onboarding/result');
        }, 500);
        return;
      }

      setProgress(newProgress);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [calculateHealthLever, navigate]);

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          containerClassName="absolute inset-0"
          className="flex items-center flex-col justify-center w-full h-full"
          rangeY={1200}
          particleCount={400}
          baseHue={260}
          baseSpeed={0.05}
          rangeSpeed={1.0}
        >
          <div
            className="relative z-10 max-w-md mx-6 p-8 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(6px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="flex justify-center mb-6">
              <div
                className="p-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.3)',
                }}
              >
                <Sparkles size={28} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold text-center">
              Analysiere deine Daten...
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-xl mt-4 text-center">
              Wir ermitteln deinen größten Gesundheitshebel
            </p>
            <div className="w-full mt-8">
              <div
                className="relative h-3 rounded-full overflow-hidden"
                style={{
                  background: 'rgba(156, 163, 175, 0.3)',
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #A78BFA 0%, #93C5FD 50%, #60A5FA 100%)',
                    boxShadow: '0 0 12px rgba(167, 139, 250, 0.8)',
                  }}
                />
              </div>
            </div>
          </div>
        </Vortex>
      </div>
    </Layout>
  );
}
