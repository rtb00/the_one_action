import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden overscroll-none">
      {/* Mobile-optimized Animated Gradient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circle 1 - Large Lavender - moveVertical */}
        <div
          className="absolute -top-[40%] -right-[20%] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 1) 0%, rgba(167, 139, 250, 0) 70%)',
            filter: 'blur(60px)',
            animation: 'moveVertical 30s ease infinite',
            opacity: 0.2,
          }}
        />

        {/* Circle 2 - Medium Periwinkle - moveInCircle reverse */}
        <div
          className="absolute -left-[30%] -top-[30%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 1) 0%, rgba(147, 197, 253, 0) 70%)',
            filter: 'blur(60px)',
            animation: 'moveInCircle 20s reverse infinite',
            opacity: 0.15,
          }}
        />

        {/* Circle 3 - Large Blue - moveInCircle linear */}
        <div
          className="absolute -bottom-[50%] left-[10%] w-[550px] h-[550px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 1) 0%, rgba(96, 165, 250, 0) 70%)',
            filter: 'blur(60px)',
            animation: 'moveInCircle 40s linear infinite',
            opacity: 0.12,
          }}
        />

        {/* Circle 4 - Medium Lavender - moveHorizontal */}
        <div
          className="absolute top-[20%] right-[5%] w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 1) 0%, rgba(167, 139, 250, 0) 70%)',
            filter: 'blur(60px)',
            animation: 'moveHorizontal 40s ease infinite',
            opacity: 0.18,
          }}
        />

        {/* Circle 5 - Small Periwinkle - moveInCircle */}
        <div
          className="absolute bottom-[15%] right-[25%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 1) 0%, rgba(147, 197, 253, 0) 70%)',
            filter: 'blur(60px)',
            animation: 'moveInCircle 20s ease infinite',
            opacity: 0.2,
          }}
        />

        {/* Circle 6 - Small Blue - static */}
        <div
          className="absolute top-[60%] left-[40%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 1) 0%, rgba(96, 165, 250, 0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.15,
          }}
        />

        {/* Flowing Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(125deg, rgba(167, 139, 250, 1) 0%, rgba(147, 197, 253, 1) 25%, rgba(96, 165, 250, 1) 50%, rgba(167, 139, 250, 1) 75%, rgba(147, 197, 253, 1) 100%)',
            backgroundSize: '300% 300%',
            animation: 'gradientFlow 25s ease infinite',
            opacity: 0.08,
          }}
        />
      </div>

      {/* Content with safe area insets for iPhone */}
      <div className="relative z-10" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {children}
      </div>
    </div>
  );
}
