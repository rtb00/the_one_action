import { useNavigate } from 'react-router-dom';

interface AnimatedCircleProps {
  healthLever: 'movement' | 'sleep' | 'nutrition' | 'stress';
}

const leverLabels = {
  movement: 'Deine Bewegung',
  sleep: 'Dein Schlaf',
  nutrition: 'Deine Ernährung',
  stress: 'Deine Stressreduktion',
};

export default function AnimatedCircle({ healthLever }: AnimatedCircleProps) {
  const navigate = useNavigate();

  return (
    <div className="relative w-[320px] h-[320px] flex justify-center items-center">
      {/* Orbit Path */}
      <div
        className="absolute w-full h-full rounded-full"
        style={{
          border: '1.5px solid rgba(138, 135, 255, 0.3)',
          boxShadow: '0 0 20px rgba(138, 135, 255, 0.2)',
        }}
      />

      {/* Orbiting Stars */}
      <div className="orbit-star" />
      <div className="orbit-star orbit-star-2" />

      {/* Sleep Circle */}
      <div className="sleep-circle relative w-[260px] h-[260px] z-10">
        {/* Outer Glow */}
        <div className="outer-glow" />

        {/* Curved Text "TheOneAction" */}
        <div className="curved-text absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg viewBox="0 0 260 260" className="w-full h-full">
            <defs>
              <path id="circlePath" d="M 130,30 A 100,100 0 0,1 230,130" fill="none" />
            </defs>
            <text>
              <textPath href="#circlePath" startOffset="0%"  className="fill-white text-[11px] font-light tracking-[2px] uppercase opacity-60">
                The One Action
              </textPath>
            </text>
          </svg>
        </div>

        {/* Main Circle */}
        <div
          onClick={() => navigate('/onboarding/action')}
          className="main-circle w-full h-full rounded-full cursor-pointer transition-all duration-400 hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 159, 255, 0.5) 0%, rgba(138, 135, 255, 0.45) 25%, rgba(123, 159, 255, 0.48) 50%, rgba(110, 179, 255, 0.42) 75%, rgba(88, 150, 255, 0.45) 100%)',
            backdropFilter: 'blur(30px) saturate(200%)',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 32px 0 rgba(138, 135, 255, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 1px 0 rgba(138, 135, 255, 0.3)',
          }}
        >
          {/* Color Waves */}
          <div className="color-wave-1" />
          <div className="color-wave-2" />
          <div className="color-wave-3" />

          {/* Inner Light */}
          <div className="inner-light" />

          {/* Circle Text */}
          <div className="relative z-10 text-center text-white p-8 flex flex-col items-center justify-center h-full">
            <div className="text-[10px] font-normal opacity-75 uppercase tracking-[3px] mb-3">
              Dein größter
            </div>
            <div className="text-[10px] font-normal opacity-75 uppercase tracking-[3px] mb-3">
              Gesundheitshebel ist
            </div>
            <div className="text-[28px] font-light leading-tight text-shadow">
              {leverLabels[healthLever]}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .orbit-star {
          position: absolute;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 30%,
            rgba(255, 255, 255, 0.4) 60%,
            transparent 100%);
          border-radius: 50%;
          box-shadow:
            0 0 15px 5px rgba(255, 255, 255, 1),
            0 0 30px 10px rgba(255, 255, 255, 0.8),
            0 0 50px 15px rgba(138, 135, 255, 0.8),
            0 0 70px 20px rgba(138, 135, 255, 0.6),
            0 0 100px 25px rgba(110, 179, 255, 0.5);
          animation: orbit 8s linear infinite, starPulse 2s ease-in-out infinite;
          top: calc(50% - 6px);
          left: calc(50% - 6px);
          transform-origin: 6px 6px;
        }

        .orbit-star-2 {
          animation-delay: -4s;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(160px);
          }
          100% {
            transform: rotate(360deg) translateX(160px);
          }
        }

        @keyframes starPulse {
          0%, 100% {
            box-shadow:
              0 0 15px 5px rgba(255, 255, 255, 1),
              0 0 30px 10px rgba(255, 255, 255, 0.8),
              0 0 50px 15px rgba(138, 135, 255, 0.8),
              0 0 70px 20px rgba(138, 135, 255, 0.6),
              0 0 100px 25px rgba(110, 179, 255, 0.5);
          }
          50% {
            box-shadow:
              0 0 20px 8px rgba(255, 255, 255, 1),
              0 0 40px 15px rgba(255, 255, 255, 0.9),
              0 0 60px 20px rgba(138, 135, 255, 0.9),
              0 0 90px 30px rgba(138, 135, 255, 0.7),
              0 0 120px 35px rgba(110, 179, 255, 0.6);
          }
        }

        .outer-glow {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: radial-gradient(circle at center,
            rgba(138, 135, 255, 0.4) 0%,
            rgba(110, 179, 255, 0.3) 40%,
            transparent 70%);
          filter: blur(25px);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .color-wave-1, .color-wave-2, .color-wave-3 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          opacity: 0;
        }

        .color-wave-1 {
          background: radial-gradient(circle at 30% 40%,
            rgba(168, 159, 255, 0.4) 0%,
            transparent 60%);
          animation: wave1 8s ease-in-out infinite;
        }

        .color-wave-2 {
          background: radial-gradient(circle at 70% 60%,
            rgba(88, 150, 255, 0.4) 0%,
            transparent 60%);
          animation: wave2 8s ease-in-out infinite 2s;
        }

        .color-wave-3 {
          background: radial-gradient(circle at 50% 20%,
            rgba(110, 179, 255, 0.35) 0%,
            transparent 60%);
          animation: wave3 8s ease-in-out infinite 4s;
        }

        @keyframes wave1 {
          0%, 100% {
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-10%, -10%) scale(1.2);
          }
        }

        @keyframes wave2 {
          0%, 100% {
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(10%, 10%) scale(1.2);
          }
        }

        @keyframes wave3 {
          0%, 100% {
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(0, -15%) scale(1.2);
          }
        }

        .inner-light {
          position: absolute;
          width: 140%;
          height: 140%;
          top: -20%;
          left: -20%;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 50%);
          pointer-events: none;
        }

        .text-shadow {
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
