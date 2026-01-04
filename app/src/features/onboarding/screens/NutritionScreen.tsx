import { useNavigate } from 'react-router-dom';
import { Apple } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import OptionCard from '../components/OptionCard';
import { useOnboardingStore } from '../store/onboardingStore';

const nutritionOptions = [
  { value: '> 50%', label: '> 50%', icon: Apple },
  { value: '40-50%', label: '40-50%', icon: Apple },
  { value: '20-40%', label: '20-40%', icon: Apple },
  { value: '10-20%', label: '10-20%', icon: Apple },
  { value: '< 10%', label: '< 10%', icon: Apple },
];

export default function NutritionScreen() {
  const navigate = useNavigate();
  const { setNutrition } = useOnboardingStore();

  const handleSelect = (value: string) => {
    setNutrition(value);
    navigate('/onboarding/stress');
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
                  <Apple size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-900">
                Ernährung
              </h2>
              <p className="text-gray-600">
                Welchen Anteil haben hoch verarbeitete Lebensmittel (ultra processed food) an Deiner Ernährung?
              </p>
            </div>

            <div className="h-4"></div>

            <div className="space-y-3">
              {nutritionOptions.map((option) => (
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
