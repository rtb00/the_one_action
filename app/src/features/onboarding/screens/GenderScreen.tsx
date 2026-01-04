import { useNavigate } from 'react-router-dom';
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

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          {/* Progress indicator */}
          <div className="text-center">
            <p className="text-sm text-white/70 font-medium tracking-wide">Zuerst ein paar Fragen zu Dir</p>
          </div>

          <GlassCard className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900">
                Wie identifizierst du dich?
              </h2>
            </div>

            <div className="space-y-4">
              <OptionCard
                label="Männlich"
                onClick={() => handleSelect('male')}
              />
              <OptionCard
                label="Weiblich"
                onClick={() => handleSelect('female')}
              />
              <OptionCard
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
