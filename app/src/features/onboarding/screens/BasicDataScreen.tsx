import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import Layout from '../../../components/Layout';
import GradientButton from '../components/GradientButton';
import GlassBackButton from '../components/GlassBackButton';
import Toast from '../components/Toast';
import { useOnboardingStore } from '../store/onboardingStore';

export default function BasicDataScreen() {
  const navigate = useNavigate();
  const { age, gender, height, weight, setAge, setGender, setHeight, setWeight } = useOnboardingStore();
  
  const [ageValue, setAgeValue] = useState(age?.toString() || '');
  const [genderValue, setGenderValue] = useState(gender || '');
  const [heightValue, setHeightValue] = useState(height?.toString() || '');
  const [weightValue, setWeightValue] = useState(weight?.toString() || '');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleContinue = () => {
    const ageNum = parseInt(ageValue);
    const heightNum = parseInt(heightValue);
    const weightNum = parseInt(weightValue);

    // Validation
    if (!ageValue || isNaN(ageNum) || ageNum < 18 || ageNum > 120) {
      setToastMessage('Bitte gib ein gültiges Alter ein (18-120)');
      setShowToast(true);
      return;
    }

    if (!genderValue) {
      setToastMessage('Bitte wähle ein Geschlecht');
      setShowToast(true);
      return;
    }

    if (!heightValue || isNaN(heightNum) || heightNum < 100 || heightNum > 250) {
      setToastMessage('Bitte gib eine gültige Größe ein (100-250 cm)');
      setShowToast(true);
      return;
    }

    if (!weightValue || isNaN(weightNum) || weightNum < 30 || weightNum > 300) {
      setToastMessage('Bitte gib ein gültiges Gewicht ein (30-300 kg)');
      setShowToast(true);
      return;
    }

    // Save all data
    setAge(ageNum);
    setGender(genderValue as 'male' | 'female' | 'other');
    setHeight(heightNum);
    setWeight(weightNum);
    
    navigate('/onboarding/movement');
  };

  return (
    <Layout>
      <GlassBackButton />
      <Toast message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-md w-full space-y-6">
          {/* Heading */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div
                className="p-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.3)',
                }}
              >
                <UserCircle size={28} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-gray-600 text-base">Zunächst ein paar Fragen zu dir</p>
          </div>

          <div
            className="backdrop-blur-xl rounded-3xl border p-8 space-y-6"
            style={{
              background: 'rgba(255, 255, 255, 0.25)',
              borderColor: 'rgba(167, 139, 250, 0.15)',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}
          >
            {/* Alter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Alter</label>
              <input
                type="number"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                placeholder="28"
                className="w-full px-4 py-3 rounded-xl text-gray-900 transition-all focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                }}
              />
            </div>

            {/* Geschlecht */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Geschlecht</label>
              <select
                value={genderValue}
                onChange={(e) => setGenderValue(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-gray-900 transition-all focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                }}
              >
                <option value="">Bitte wählen</option>
                <option value="male">Männlich</option>
                <option value="female">Weiblich</option>
                <option value="other">Divers</option>
              </select>
            </div>

            {/* Größe */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Größe (cm)</label>
              <input
                type="number"
                value={heightValue}
                onChange={(e) => setHeightValue(e.target.value)}
                placeholder="175"
                className="w-full px-4 py-3 rounded-xl text-gray-900 transition-all focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                }}
              />
            </div>

            {/* Gewicht */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Gewicht (kg)</label>
              <input
                type="number"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                placeholder="70"
                className="w-full px-4 py-3 rounded-xl text-gray-900 transition-all focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                }}
              />
            </div>

            <GradientButton onClick={handleContinue} className="w-full mt-4">
              Weiter
            </GradientButton>
          </div>
        </div>
      </div>
    </Layout>
  );
}
