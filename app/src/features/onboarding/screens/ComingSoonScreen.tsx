import { Sparkles } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';

export default function ComingSoonScreen() {
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
                <Sparkles size={48} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Bald verfügbar!
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wir arbeiten daran, dir noch mehr individuelle Maßnahmen anzubieten.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Schau bald wieder vorbei, um weitere personalisierte Gesundheitshebel zu entdecken.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-500">
                  Deine Gesundheit liegt uns am Herzen ❤️
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
