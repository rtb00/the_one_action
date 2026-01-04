import React from 'react';

interface OptionCardProps {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  label: string;
  onClick: () => void;
  selected?: boolean;
  className?: string;
}

export default function OptionCard({
  icon: Icon,
  label,
  onClick,
  selected = false,
  className = '',
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        p-3
        backdrop-blur-xl
        rounded-2xl
        border
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        flex
        items-center
        justify-center
        ${selected ? 'ring-2 ring-lavender-400' : ''}
        ${className}
      `}
      style={{
        background: selected
          ? 'rgba(167, 139, 250, 0.15)'
          : 'rgba(255, 255, 255, 0.2)',
        borderColor: selected
          ? 'rgba(167, 139, 250, 0.4)'
          : 'rgba(167, 139, 250, 0.15)',
        boxShadow: selected
          ? '0 8px 32px rgba(167, 139, 250, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          : '0 4px 16px rgba(167, 139, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      }}
    >
      <span className={`font-semibold ${selected ? 'text-lavender-900' : 'text-gray-700'}`}>
        {label}
      </span>
    </button>
  );
}
