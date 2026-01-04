import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative
        backdrop-blur-[20px]
        rounded-[28px]
        p-8
        border
        transition-all
        duration-300
        ${onClick ? 'cursor-pointer hover:scale-[1.01]' : ''}
        ${className}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.18)',
        borderColor: 'rgba(167, 139, 250, 0.12)',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(147, 197, 253, 0.08) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
