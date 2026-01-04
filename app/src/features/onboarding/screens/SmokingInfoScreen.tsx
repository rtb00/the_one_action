import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import GlassBackButton from '../components/GlassBackButton';

export default function SmokingInfoScreen() {
  const navigate = useNavigate();

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
                  <Info size={28} className="text-white" strokeWidth={1.5} />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Ein Rauchstopp und auch schon die Reduktion hat viele positive Effekte.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Du aufhören möchtest, wende Dich an das <strong>Bundesinstitut für öffentliche
                    Gesundheit</strong> oder deinen <strong>Hausarzt</strong>.
                </p>
              </div>
            </div>

            <div className="h-6"></div>

            <div className="space-y-4">
              <GradientButton
                onClick={() => navigate('/onboarding/alcohol')}
                className="w-full"
              >
                Weiter
              </GradientButton>

              <p className="text-gray-500 text-sm text-center leading-relaxed">
                Klicke weiter, um mit Deinem nächstgrößeren Gesundheitshebel fortzufahren.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
