import { Clock, Briefcase, Wallet, MoreHorizontal } from 'lucide-react';

interface FloatingBubblesProps {
  onSelect: (reason: string) => void;
}

const reasons = [
  { icon: Clock, label: 'Zeitmangel', color: '#A78BFA' },
  { icon: Briefcase, label: 'Schichtdienst', color: '#60A5FA' },
  { icon: Wallet, label: 'Finanzielle Ressourcen', color: '#93C5FD' },
  { icon: MoreHorizontal, label: 'Sonstiges', color: '#C4B5FD' },
];

export default function FloatingBubbles({ onSelect }: FloatingBubblesProps) {
  return (
    <div className="relative w-full pt-16">
      {reasons.map((reason, index) => {
        const Icon = reason.icon;

        // Alternating alignment: even indices left, odd indices right
        const isLeft = index % 2 === 0;

        // Individual spacing for each bubble
        const spacings = ['mb-2', 'mb-4', 'mb-4', 'mb-0'];
        const spacing = spacings[index];

        // Phase delays for staggered animation
        const delays = ['0s', '1.5s', '3s', '4.5s'];
        const delay = delays[index];

        return (
          <div
            key={reason.label}
            className={`flex ${isLeft ? 'justify-start' : 'justify-end'} ${spacing}`}
            style={{
              animation: `float${index + 1} 4s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <button
              onClick={() => onSelect(reason.label)}
              className="bubble"
            >
              <div
                className="
                  p-6
                  rounded-full
                  backdrop-blur-xl
                  border
                  transition-all
                  duration-300
                  hover:scale-110
                  active:scale-95
                  flex
                  flex-col
                  items-center
                  gap-3
                  min-w-[140px]
                "
                style={{
                  background: `rgba(${hexToRgb(reason.color)}, 0.15)`,
                  borderColor: `rgba(${hexToRgb(reason.color)}, 0.3)`,
                  boxShadow: `0 8px 32px rgba(${hexToRgb(reason.color)}, 0.2)`,
                }}
              >
                <Icon size={28} style={{ color: reason.color }} strokeWidth={1.5} />
                <span className="text-sm font-medium text-gray-900 text-center">
                  {reason.label}
                </span>
              </div>
            </button>
          </div>
        );
      })}

      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-8px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-8px);
          }
        }
      `}</style>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '167, 139, 250'; // fallback to lavender
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}
