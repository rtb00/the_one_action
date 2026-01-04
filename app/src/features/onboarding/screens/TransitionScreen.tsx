import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardCheck } from 'lucide-react';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';

export default function TransitionScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    const timer = setTimeout(() => {
      navigate('/onboarding/smoking');
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full space-y-8">
          <GlassCard className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div
                className="p-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.3)',
                }}
              >
                <ClipboardCheck size={28} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-gray-900">
                Fast geschafft!
              </h2>
              <p className="text-base text-gray-600">
                Noch ein paar letzte Risikofaktoren …
              </p>
            </div>

            <div className="w-full h-2 rounded-full overflow-hidden mt-8" style={{ background: 'rgba(167, 139, 250, 0.15)' }}>
              <div
                className="h-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 0 8px rgba(167, 139, 250, 0.4)',
                }}
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
