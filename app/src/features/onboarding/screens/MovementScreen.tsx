import { useNavigate } from 'react-router-dom';
import { Footprints } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import OptionCard from '../components/OptionCard';
import { useOnboardingStore } from '../store/onboardingStore';

const stepOptions = [
  { value: '< 3000', label: '< 3.000 Schritte', icon: Footprints },
  { value: '3000 - 5000', label: '3.000 - 5.000', icon: Footprints },
  { value: '5000 - 7000', label: '5.000 - 7.000', icon: Footprints },
  { value: '7000 - 9000', label: '7.000 - 9.000', icon: Footprints },
  { value: '> 9000', label: '> 9.000 Schritte', icon: Footprints },
];

export default function MovementScreen() {
  const navigate = useNavigate();
  const { setMovement } = useOnboardingStore();

  const handleSelect = (value: string) => {
    setMovement(value);
    navigate('/onboarding/sleep');
  };

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
                  <Footprints size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Bewegung
              </h2>
              <p className="text-gray-600">
                Wie viele Schritte gehst du etwa pro Tag?
              </p>
            </div>

            <div className="h-4"></div>

            <div className="space-y-3">
              {stepOptions.map((option) => (
                <OptionCard
                  key={option.value}

                  label={option.label}
                  onClick={() => handleSelect(option.value)}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
