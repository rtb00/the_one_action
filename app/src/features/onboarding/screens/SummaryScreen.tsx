import { useNavigate } from 'react-router-dom';
import { Calendar, RotateCcw } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import { useOnboardingStore } from '../store/onboardingStore';

const actionTexts = {
  movement: 'Mache in den nächsten 14 Tagen jeden Tag einen kleinen Spaziergang (30 min).',
  sleep: 'Stehe in den nächsten 14 Tagen regelmäßig zur selben Uhrzeit auf. Versuche, um 22:30 Uhr ins Bett zu gehen.',
  nutrition: 'Ersetze in den nächsten 14 Tagen je ein ungesundes Lebensmittel durch ein Obst oder Gemüse',
  stress: 'Atme in den nächsten 14 Tagen Morgens, Mittags und Abends jeweils 10-mal tief ein und aus. Jeder Atemzug dauert 7 Sekunden.',
};

export default function SummaryScreen() {
  const navigate = useNavigate();
  const { healthLever, reset } = useOnboardingStore();

  if (!healthLever) {
    return null;
  }

  const handleRetake = () => {
    reset();
    navigate('/onboarding');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div
                className="p-4 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.3)',
                }}
              >
                <Calendar size={32} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="text-[40px] font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-lavender-400 via-periwinkle-400 to-lavender-400 bg-clip-text text-transparent">
              TheOneAction
            </h1>
          </div>

          <GlassCard className="space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Deine OneAction für die nächsten 14 Tage
              </h2>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(167, 139, 250, 0.1)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                }}
              >
                <p className="text-gray-900 leading-relaxed font-bold">
                  {actionTexts[healthLever]}
                </p>
              </div>
            </div>
          </GlassCard>

          <button
            onClick={handleRetake}
            className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center justify-center gap-2 py-2"
          >
            <RotateCcw size={14} strokeWidth={2} />
            <span>Assessment wiederholen</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
