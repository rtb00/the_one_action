import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import GlassBackButton from '../components/GlassBackButton';
import { useOnboardingStore } from '../store/onboardingStore';

export default function SmokingMotivationScreen() {
  const navigate = useNavigate();
  const { setSmoking } = useOnboardingStore();
  const [motivation, setMotivation] = useState(5);

  const handleContinue = () => {
    setSmoking(true, motivation);
    if (motivation === 0) {
      navigate('/onboarding/smoking/info');
    } else {
      navigate('/onboarding/smoking/reflection');
    }
  };

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          <GlassCard className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-500 font-medium">Auf einer Skala von 0 bis 10:</p>
              <h2 className="text-3xl font-semibold text-gray-900">
                Wie hoch ist deine Motivation aufzuhören?
              </h2>
            </div>

            <div className="space-y-6">
              {/* Slider */}
              <div className="space-y-6">
                <div
                  className="text-center text-6xl font-bold bg-gradient-to-r from-lavender-400 to-periwinkle-400 bg-clip-text text-transparent"
                >
                  {motivation}
                </div>

                <input
                  type="range"
                  min="0"
                  max="10"
                  value={motivation}
                  onChange={(e) => setMotivation(parseInt(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #A78BFA ${motivation * 10}%, rgba(167,139,250,0.2) ${motivation * 10}%)`,
                  }}
                />

                <div className="flex justify-between text-xs text-gray-500">
                  <span>0 - Keine</span>
                  <span>10 - Sehr hoch</span>
                </div>
              </div>

              <GradientButton onClick={handleContinue} className="w-full">
                Weiter
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
