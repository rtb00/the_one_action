import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../../components/Layout';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-between min-h-screen px-8 py-16 safe-top safe-bottom">
        {/* Hero Section mit Blur Circle */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
          {/* Stark geblurrter Farbverlaufs-Kreis */}
          <div className="relative w-full mx-auto">
            <div
              className="absolute inset-0 aspect-square rounded-full"
              style={{
                background: 'linear-gradient(135deg, #bb34ffff 0%, #469dffff 100%)',
                filter: 'blur(50px)',
                opacity: 0.6,
                transform: 'scale(1.1)',
              }}
            />

            {/* Text Content */}
            <div className="relative z-10 text-center space-y-4 py-24">
              <h1 className="text-white text-4xl font-normal tracking-tight leading-[1.15]">
                Willkommen bei
                <br />
                TheOneAction
              </h1>
              <p className="text-white/90 text-xl font-light tracking-wide">
                Dein Weg zu einer besseren Gesundheit
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Button Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-md pb-8">
          {/* Container für Button mit animiertem Rahmen */}
          <div className="relative flex items-center justify-center">
            {/* Animierter Rahmen */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '72px',
                height: '72px',
                border: '2px solid',
                borderColor: 'rgba(167, 139, 250, 0.4)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Runder Button mit Physik - ohne Arrow */}
            <motion.button
              whileTap={{ scale: 1.15 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
              }}
              onClick={() => navigate('/onboarding/basic')}
              className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                boxShadow: '0 10px 40px rgba(167, 139, 250, 0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            />
          </div>

          {/* Minimalistischer Text */}
          <p className="text-gray-600 text-sm font-medium tracking-wide">
            Starten
          </p>
        </div>
      </div>
    </Layout>
  );
}
