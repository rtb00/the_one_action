import { useNavigate } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import { useOnboardingStore } from '../store/onboardingStore';

export default function SmokingReflectionScreen() {
  const navigate = useNavigate();
  const { smoking } = useOnboardingStore();
  const motivation = smoking?.motivation || 0;
  const [isEnabled, setIsEnabled] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 8000; // 8 seconds total
    const firstQuarterTime = 4800; // 60% of time for first 25% progress
    const remainingTime = 3200; // 40% of time for remaining 75% progress

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      let currentProgress;
      if (elapsed < firstQuarterTime) {
        // First quarter: 100% to 75% over 3 seconds
        const firstPhaseProgress = elapsed / firstQuarterTime;
        currentProgress = 100 - (25 * firstPhaseProgress);
      } else if (elapsed < duration) {
        // Remaining: 75% to 0% over 2 seconds
        const secondPhaseProgress = (elapsed - firstQuarterTime) / remainingTime;
        currentProgress = 75 - (75 * secondPhaseProgress);
      } else {
        currentProgress = 0;
        clearInterval(interval);
        setIsEnabled(true);
      }

      setProgress(Math.max(0, currentProgress));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  const question = motivation > 1
    ? 'Überlege kurz - Wieso ist deine Motivation nicht 1?'
    : 'Überlege kurz - Wieso ist deine Motivation nicht 0?';

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          <GlassCard className="space-y-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div
                  className="p-3 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                    boxShadow: '0 8px 24px rgba(167, 139, 250, 0.3)',
                  }}
                >
                  <Lightbulb size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900">
                {question}
              </h2>

              <p className="text-gray-600 text-sm mb-8">
                Nimm dir einen Moment Zeit zum Nachdenken...
              </p>
            </div>

            {!isEnabled ? (
              <div className="flex justify-center items-center py-4" style={{ minHeight: '56px' }}>
                <svg width="48" height="48" style={{ opacity: 0.6 }}>
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="rgba(167, 139, 250, 0.2)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={125.66}
                    strokeDashoffset={125.66 * (1 - progress / 100)}
                    strokeLinecap="round"
                    transform="rotate(-90 24 24)"
                    style={{
                      transition: 'stroke-dashoffset 0.1s linear',
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            ) : (
              <button
                onClick={() => navigate('/onboarding/smoking/info')}
                className="
                  w-full
                  py-4
                  px-6
                  rounded-2xl
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-95
                "
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.4)',
                  animation: 'fadeIn 0.5s ease-in',
                  minHeight: '56px',
                }}
              >
                Weiter
              </button>
            )}
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
