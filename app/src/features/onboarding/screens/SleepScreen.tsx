import { useNavigate } from 'react-router-dom';
import { Moon } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import OptionCard from '../components/OptionCard';
import { useOnboardingStore } from '../store/onboardingStore';

const sleepOptions = [
  { value: '< 4h', label: '< 4 h', icon: Moon },
  { value: '4-5 h', label: '4-5 h', icon: Moon },
  { value: '5-6 h', label: '5-6 h', icon: Moon },
  { value: '6-7 h', label: '6-7 h oder > 9h', icon: Moon },
  { value: '7-8 h', label: '7-8 h', icon: Moon },
];

export default function SleepScreen() {
  const navigate = useNavigate();
  const { setSleep } = useOnboardingStore();

  const handleSelect = (value: string) => {
    setSleep(value);
    navigate('/onboarding/nutrition');
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
                  <Moon size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Schlaf
              </h2>
              <p className="text-gray-600">
                Wie lange schläfst Du im Schnitt?
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {sleepOptions.map((option) => (
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
