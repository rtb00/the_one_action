import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import GlassBackButton from '../components/GlassBackButton';
import Toast from '../components/Toast';
import { useOnboardingStore } from '../store/onboardingStore';

export default function AgeScreen() {
  const navigate = useNavigate();
  const { age, setAge } = useOnboardingStore();
  const [inputValue, setInputValue] = useState(age?.toString() || '');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleContinue = () => {
    const ageNum = parseInt(inputValue);

    if (!inputValue || isNaN(ageNum)) {
      setToastMessage('Bitte gib dein Alter ein');
      setShowToast(true);
      return;
    }

    if (ageNum < 18 || ageNum > 120) {
      setToastMessage('Bitte gib ein gültiges Alter ein (18-120)');
      setShowToast(true);
      return;
    }

    setAge(ageNum);
    navigate('/onboarding/gender');
  };

  return (
    <Layout>
      <GlassBackButton />
      <Toast message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 safe-top safe-bottom">
        <div className="max-w-md w-full space-y-8">
          {/* Progress indicator */}
          <div className="text-center">
            <p className="text-sm text-white/70 font-medium tracking-wide">Zuerst ein paar Fragen zu Dir</p>
          </div>

          <GlassCard className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">
                Wie alt bist du?
              </h2>
              <p className="text-gray-600">
                Dies hilft uns, deine Gesundheitsziele besser einzuschätzen
              </p>
            </div>

            <div className="space-y-6">
              {/* Age Input */}
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Dein Alter"
                className="
                  w-full
                  px-6
                  py-4
                  rounded-xl
                  font-light
                  text-gray-900
                  text-center
                  text-2xl
                  transition-all
                  duration-200
                  focus:outline-none
                  focus:scale-[1.01]
                "
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(167, 139, 250, 0.15)',
                  boxShadow: '0 4px 16px rgba(167, 139, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(167, 139, 250, 0.4)';
                  e.target.style.boxShadow = '0 8px 24px rgba(167, 139, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 3px rgba(167, 139, 250, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(167, 139, 250, 0.15)';
                  e.target.style.boxShadow = '0 4px 16px rgba(167, 139, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                }}
              />

              <GradientButton onClick={handleContinue} className="w-full">
                Weiter
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
