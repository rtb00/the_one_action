import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';

export default function AlternativeScreen() {
  const navigate = useNavigate();

  const handleSelect = () => {
    // Both options lead to coming soon
    navigate('/onboarding/coming-soon');
  };

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          <GlassCard className="space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Möchtest Du eine andere Maßnahme versuchen?
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <button
                onClick={handleSelect}
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
                onClick={handleSelect}
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
