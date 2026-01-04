import { useNavigate } from 'react-router-dom';
import { User, Users } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import OptionCard from '../components/OptionCard';
import { useOnboardingStore } from '../store/onboardingStore';

export default function GenderScreen() {
  const navigate = useNavigate();
  const { setGender } = useOnboardingStore();

  const handleSelect = (gender: 'male' | 'female' | 'other') => {
    setGender(gender);
    navigate('/onboarding/height');
  };

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full space-y-12">
          <GlassCard className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">
                Wie identifizierst du dich?
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              <OptionCard
                icon={User}
                label="Männlich"
                onClick={() => handleSelect('male')}
              />
              <OptionCard
                icon={User}
                label="Weiblich"
                onClick={() => handleSelect('female')}
              />
              <OptionCard
                icon={Users}
                label="Divers"
                onClick={() => handleSelect('other')}
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
