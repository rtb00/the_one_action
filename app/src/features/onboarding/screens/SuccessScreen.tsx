import { useNavigate } from 'react-router-dom';
import { PartyPopper } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';

export default function SuccessScreen() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          <GlassCard className="text-center space-y-8">
            <div className="flex justify-center">
              <div
                className="p-6 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 32px rgba(167, 139, 250, 0.4)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              >
                <PartyPopper size={48} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Sehr gut!
              </h2>
              <p className="text-2xl font-light text-gray-700">
                Wir glauben an Dich!
              </p>
            </div>

            <GradientButton
              onClick={() => navigate('/onboarding/summary')}
              className="w-full"
            >
              Weiter
            </GradientButton>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
