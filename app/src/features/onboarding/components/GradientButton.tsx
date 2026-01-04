import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function GradientButton({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
}: GradientButtonProps) {
  if (variant === 'secondary') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          px-8 py-4
          rounded-2xl
          font-medium
          text-gray-700
          transition-all
          duration-300
          hover:scale-[1.02]
          active:scale-95
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${className}
        `}
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(167, 139, 250, 0.2)',
          boxShadow: '0 4px 16px rgba(167, 139, 250, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        relative
        px-8 py-4
        rounded-2xl
        font-medium
        text-white
        overflow-hidden
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
        boxShadow: '0 4px 16px rgba(167, 139, 250, 0.3), 0 8px 24px rgba(96, 165, 250, 0.15)',
      }}
    >
      <span className="relative z-10">{children}</span>

      {/* Shine effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          transform: 'translateX(-100%)',
          animation: 'shine 2s infinite',
        }}
      />
    </button>
  );
}
