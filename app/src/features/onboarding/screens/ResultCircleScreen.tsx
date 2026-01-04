import Layout from '../../../components/Layout';
import AnimatedCircle from '../components/AnimatedCircle';
import { useOnboardingStore } from '../store/onboardingStore';

export default function ResultCircleScreen() {
  const { healthLever } = useOnboardingStore();

  if (!healthLever) {
    // Fallback if no health lever calculated
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p>Berechne...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium mb-2">
              Basierend auf deinen Antworten
            </p>
            <p className="text-gray-500 text-xs">
              Klicke auf den Kreis, um fortzufahren
            </p>
          </div>

          <AnimatedCircle healthLever={healthLever} />
        </div>
      </div>
    </Layout>
  );
}
