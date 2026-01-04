import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import { useOnboardingStore } from '../store/onboardingStore';

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
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          <GlassCard className="space-y-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div
                  className="p-6 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                    boxShadow: '0 8px 32px rgba(167, 139, 250, 0.4)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                >
                  <Loader2 size={48} className="text-white animate-spin" strokeWidth={1.5} />
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Analysiere deine Daten...
                </h2>
                <p className="text-gray-600">
                  Wir ermitteln deinen größten Gesundheitshebel
                </p>
              </div>

              {/* Fancy Progress Bar */}
              <div className="space-y-2">
                <div
                  className="relative h-3 rounded-full overflow-hidden"
                  style={{
                    background: 'rgba(167, 139, 250, 0.1)',
                  }}
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #A78BFA 0%, #93C5FD 50%, #60A5FA 100%)',
                      boxShadow: '0 0 12px rgba(167, 139, 250, 0.5)',
                    }}
                  />
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold bg-gradient-to-r from-lavender-400 to-periwinkle-400 bg-clip-text text-transparent">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
