import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    // Animate progress bar with pauses at 20% and 70%
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 3;

      // Pause at 20%
      if (currentProgress >= 20 && currentProgress < 25) {
        currentProgress = 20;
        setTimeout(() => {
          currentProgress = 25;
        }, 800);
      }

      // Pause at 70%
      if (currentProgress >= 70 && currentProgress < 75) {
        currentProgress = 70;
        setTimeout(() => {
          currentProgress = 75;
        }, 800);
      }

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          navigate('/onboarding/result');
        }, 500);
      }

      setProgress(currentProgress);
    }, 150);

    return () => clearInterval(interval);
  }, [calculateHealthLever, navigate]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-[calc(100%-2rem)] mx-auto rounded-3xl h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="transparent"
            className="flex items-center flex-col justify-center px-6 py-4 w-full h-full"
            rangeY={800}
            particleCount={500}
            baseHue={260}
          >
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
              Analysiere deine Daten...
            </h2>
            <p className="text-white/80 text-sm md:text-lg max-w-xl mt-6 text-center">
              Wir ermitteln deinen größten Gesundheitshebel
            </p>
            <div className="w-full max-w-md mt-8 space-y-2">
              <div
                className="relative h-3 rounded-full overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #A78BFA 0%, #93C5FD 50%, #60A5FA 100%)',
                    boxShadow: '0 0 12px rgba(167, 139, 250, 0.8)',
                  }}
                />
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-white">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </Vortex>
        </div>
      </div>
    </Layout>
  );
}
