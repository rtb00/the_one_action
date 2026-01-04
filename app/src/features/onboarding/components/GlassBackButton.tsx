import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GlassBackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        fixed
        top-6
        left-6
        z-50
        w-12
        h-12
        backdrop-blur-xl
        rounded-full
        border
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
        safe-top
        safe-left
        flex
        items-center
        justify-center
      "
      style={{
        background: 'rgba(255, 255, 255, 0.3)',
        borderColor: 'rgba(167, 139, 250, 0.2)',
        boxShadow: '0 4px 16px rgba(167, 139, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      }}
    >
      <ArrowLeft size={20} className="text-lavender-600" strokeWidth={2} />
    </button>
  );
}
