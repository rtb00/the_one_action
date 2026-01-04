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
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {reasons.map((reason, index) => {
        const Icon = reason.icon;

        // Position bubbles in different positions
        const positions = [
          { top: '20%', left: '15%' },
          { top: '15%', right: '20%' },
          { bottom: '25%', left: '20%' },
          { bottom: '20%', right: '15%' },
        ];

        const position = positions[index];

        return (
          <button
            key={reason.label}
            onClick={() => onSelect(reason.label)}
            className="absolute bubble"
            style={{
              ...position,
              animation: `float${index + 1} 6s ease-in-out infinite`,
            }}
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
        );
      })}

      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -8px);
          }
          50% {
            transform: translate(-8px, -15px);
          }
          75% {
            transform: translate(12px, -10px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-12px, 10px);
          }
          50% {
            transform: translate(10px, 12px);
          }
          75% {
            transform: translate(-10px, 8px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(8px, 12px);
          }
          50% {
            transform: translate(-10px, 10px);
          }
          75% {
            transform: translate(8px, 15px);
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-10px, -10px);
          }
          50% {
            transform: translate(12px, -8px);
          }
          75% {
            transform: translate(-8px, -12px);
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
