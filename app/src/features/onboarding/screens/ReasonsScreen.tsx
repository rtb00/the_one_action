import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import FloatingBubbles from '../components/FloatingBubbles';
import { useOnboardingStore } from '../store/onboardingStore';

export default function ReasonsScreen() {
  const navigate = useNavigate();
  const { setRejectionReason } = useOnboardingStore();

  const handleSelect = (reason: string) => {
    setRejectionReason(reason);
    navigate('/onboarding/alternative');
  };

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full space-y-12">
          <GlassCard className="space-y-10">
            <div className="text-center space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Es ist für mich nicht umsetzbar, weil …
              </h2>
              <p className="text-gray-600 text-sm">
                Wähle einen Grund aus
              </p>
            </div>

            <div className="pt-2">
              <FloatingBubbles onSelect={handleSelect} />
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
