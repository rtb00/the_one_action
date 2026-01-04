import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GlassBackButton from '../components/GlassBackButton';
import { useOnboardingStore } from '../store/onboardingStore';

const actionTexts = {
  movement: 'Mache in den nächsten 14 Tagen jeden Tag einen kleinen Spaziergang (30 min).',
  sleep: 'Stehe in den nächsten 14 Tagen regelmäßig zur selben Uhrzeit auf.\nVersuche, um 22:30 Uhr ins Bett zu gehen.',
  nutrition: 'Ersetze in den nächsten 14 Tagen je ein ungesundes Lebensmittel durch ein Obst oder Gemüse',
  stress: 'Atme in den nächsten 14 Tagen Morgens, Mittags und Abends jeweils 10-mal tief ein und aus. Jeder Atemzug dauert 7 Sekunden.',
};

export default function ActionScreen() {
  const navigate = useNavigate();
  const { healthLever, setActionAccepted } = useOnboardingStore();

  if (!healthLever) {
    return null;
  }

  const handleSelect = (accepted: boolean) => {
    setActionAccepted(accepted);
    if (accepted) {
      navigate('/onboarding/success');
    } else {
      navigate('/onboarding/reasons');
    }
  };

  return (
    <Layout>
      <GlassBackButton />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full space-y-12">
          <div className="text-center">
            <h1 className="text-[40px] font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-lavender-400 via-periwinkle-400 to-lavender-400 bg-clip-text text-transparent">
              TheOneAction
            </h1>
          </div>

          <GlassCard className="space-y-10">
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {actionTexts[healthLever]}
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <p className="text-center text-gray-600 font-medium text-base">
                Ist das für Dich umsetzbar?
              </p>

              <div className="grid grid-cols-2 gap-5">
                <button
                  onClick={() => handleSelect(true)}
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
                  onClick={() => handleSelect(false)}
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
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
