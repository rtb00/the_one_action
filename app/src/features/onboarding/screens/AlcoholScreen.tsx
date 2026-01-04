import { useNavigate } from 'react-router-dom';
import { Wine, Check, X } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import { useOnboardingStore } from '../store/onboardingStore';

export default function AlcoholScreen() {
  const navigate = useNavigate();
  const { setAlcohol } = useOnboardingStore();

  const handleSelect = (concerned: boolean) => {
    setAlcohol(concerned);
    if (concerned) {
      navigate('/onboarding/alcohol/motivation');
    } else {
      navigate('/onboarding/analyzing');
    }
  };

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full space-y-12">
          <GlassCard className="space-y-10">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div
                  className="p-3 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                    boxShadow: '0 8px 24px rgba(167, 139, 250, 0.3)',
                  }}
                >
                  <Wine size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
                Denkst du manchmal, dass Du weniger Alkohol trinken solltest?
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-2">
              <button
                onClick={() => handleSelect(true)}
                className="
                  p-8
                  backdrop-blur-xl
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-95
                  flex
                  flex-col
                  items-center
                  gap-3
                "
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(167, 139, 250, 0.15)',
                  boxShadow: '0 4px 16px rgba(167, 139, 250, 0.08)',
                }}
              >
                <Check size={32} className="text-lavender-500" strokeWidth={1.5} />
                <span className="font-semibold text-gray-900">Ja</span>
              </button>

              <button
                onClick={() => handleSelect(false)}
                className="
                  p-8
                  backdrop-blur-xl
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-95
                  flex
                  flex-col
                  items-center
                  gap-3
                "
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(167, 139, 250, 0.15)',
                  boxShadow: '0 4px 16px rgba(167, 139, 250, 0.08)',
                }}
              >
                <X size={32} className="text-lavender-500" strokeWidth={1.5} />
                <span className="font-semibold text-gray-900">Nein</span>
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
