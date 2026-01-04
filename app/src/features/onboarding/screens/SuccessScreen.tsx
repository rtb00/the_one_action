import { useNavigate } from 'react-router-dom';
import { PartyPopper, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import GradientButton from '../components/GradientButton';
import { Vortex } from '../../../components/ui/vortex';

export default function SuccessScreen() {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          containerClassName="absolute inset-0"
          className="flex items-center flex-col justify-center w-full h-full"
          rangeY={1200}
          particleCount={400}
          baseHue={260}
          baseSpeed={0.05}
          rangeSpeed={1.0}
        >
          <div
            className="relative z-10 max-w-md mx-6 p-8 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(6px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div
                  className="p-4 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                    boxShadow: '0 8px 32px rgba(167, 139, 250, 0.4)',
                  }}
                >
                  <PartyPopper size={36} className="text-white" strokeWidth={1.5} />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Sehr gut!
                </h2>
                <p className="text-xl text-gray-700">
                  Wir glauben an Dich!
                </p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Speichere dir diese Website ab, um immer wieder an deine TheOneAction erinnert zu werden.
                </p>
              </div>

              {showInstallButton && (
                <button
                  onClick={handleInstallClick}
                  className="w-full p-4 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderColor: 'rgba(167, 139, 250, 0.2)',
                    boxShadow: '0 4px 16px rgba(167, 139, 250, 0.1)',
                  }}
                >
                  <Download size={20} className="text-lavender-600" strokeWidth={2} />
                  <span className="font-semibold text-gray-900">App installieren</span>
                </button>
              )}

              <GradientButton
                onClick={() => navigate('/onboarding/summary')}
                className="w-full"
              >
                Abschließen
              </GradientButton>
            </div>
          </div>
        </Vortex>
      </div>
    </Layout>
  );
}
