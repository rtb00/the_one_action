import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import OptionCard from '../components/OptionCard';
import { useOnboardingStore } from '../store/onboardingStore';

const stressOptions = [
  { value: 'Sehr stark', label: 'Sehr stark', icon: Brain },
  { value: 'Stark', label: 'Stark', icon: Brain },
  { value: 'Moderat', label: 'Moderat', icon: Brain },
  { value: 'Wenig', label: 'Wenig', icon: Brain },
  { value: 'Gar nicht', label: 'Gar nicht', icon: Brain },
];

export default function StressScreen() {
  const navigate = useNavigate();
  const { setStress } = useOnboardingStore();

  const handleSelect = (value: string) => {
    setStress(value);
    navigate('/onboarding/transition');
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
                  <Brain size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Stress
              </h2>
              <p className="text-gray-600">
                Wie gestresst hast Du Dich in der letzten Zeit gefühlt?
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {stressOptions.map((option) => (
                <OptionCard
                  key={option.value}
                  icon={option.icon}
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
