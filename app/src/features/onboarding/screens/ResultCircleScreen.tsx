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
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="space-y-12 flex flex-col items-center">
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium">
              Basierend auf deinen Antworten ist dein größter Gesundheitshebel
            </p>
          </div>

          <AnimatedCircle healthLever={healthLever} />

          <div className="text-center max-w-[250px]">
            <p className="text-gray-400 text-xs">
              Klicke auf deinen Gesundheitshebel, um diesen umzusetzen
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
