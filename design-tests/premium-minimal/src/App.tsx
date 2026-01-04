import { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(72)

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FAFBFC]">
      {/* Flowing Mesh Gradient Background - Multi-Orb Technique */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circle 1 - Large Lavender - moveVertical */}
        <div
          className="absolute -top-[40%] -right-[20%] w-[1000px] h-[1000px] rounded-full opacity-20 blur-3xl animate-first"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0) 70%)',
          }}
        />

        {/* Circle 2 - Medium Periwinkle - moveInCircle reverse */}
        <div
          className="absolute -left-[30%] -top-[30%] w-[800px] h-[800px] rounded-full opacity-15 blur-3xl animate-second"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.18) 0%, rgba(147, 197, 253, 0) 70%)',
          }}
        />

        {/* Circle 3 - Large Blue - moveInCircle linear */}
        <div
          className="absolute -bottom-[50%] left-[10%] w-[900px] h-[900px] rounded-full opacity-12 blur-3xl animate-third"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0) 70%)',
          }}
        />

        {/* Circle 4 - Medium Lavender - moveHorizontal */}
        <div
          className="absolute top-[40%] -right-[20%] w-[700px] h-[700px] rounded-full opacity-18 blur-3xl animate-fourth"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0) 70%)',
          }}
        />

        {/* Circle 5 - Small Periwinkle - moveInCircle */}
        <div
          className="absolute bottom-[20%] right-[30%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-fifth"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.22) 0%, rgba(147, 197, 253, 0) 70%)',
          }}
        />

        {/* Circle 6 - Extra Blue accent - slow moveVertical */}
        <div
          className="absolute top-[60%] left-[20%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-first"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.12) 0%, rgba(96, 165, 250, 0) 70%)',
          }}
        />

        {/* Flowing Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-25 animate-gradient-flow"
          style={{
            background: 'linear-gradient(125deg, rgba(167, 139, 250, 0.08) 0%, rgba(147, 197, 253, 0.06) 25%, rgba(96, 165, 250, 0.08) 50%, rgba(167, 139, 250, 0.05) 75%, rgba(147, 197, 253, 0.08) 100%)',
            backgroundSize: '300% 300%',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        {/* Header */}
        <header className="mb-20">
          <div className="text-center space-y-4">
            <h1 className="text-[56px] font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-[#8B5CF6] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
              Premium Minimal
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Enhanced with lavender dreams and flowing gradients
            </p>
          </div>
        </header>

        {/* Component Sections */}
        <div className="space-y-20">

          {/* 1. Main Action Card - Ultra Glass */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-8 tracking-tight uppercase text-sm">
              1. The One Action Card
            </h2>

            <div className="relative group">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-lavender-400/20 via-periwinkle-400/20 to-blue-400/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Ultra-transparent glass card */}
              <div
                className="relative backdrop-blur-[12px] rounded-[28px] p-12 border transition-all duration-500 group-hover:backdrop-blur-[15px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.18)',
                  borderColor: 'rgba(167, 139, 250, 0.12)',
                  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                {/* Subtle inner gradient */}
                <div
                  className="absolute inset-0 rounded-[28px] opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(147, 197, 253, 0.08) 100%)',
                  }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="inline-block">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full backdrop-blur-xl"
                      style={{
                        background: 'rgba(167, 139, 250, 0.15)',
                        color: '#7C3AED',
                        border: '1px solid rgba(167, 139, 250, 0.2)',
                      }}
                    >
                      Your Focus • Next 14 Days
                    </span>
                  </div>

                  <h3 className="text-[36px] font-bold text-gray-900 tracking-tight leading-[1.15]">
                    Establish consistent sleep routine
                  </h3>

                  <p className="text-gray-700 text-lg leading-relaxed font-light">
                    Going to bed at the same time will improve your recovery
                    and biological age trend.
                  </p>

                  <button
                    className="group/btn relative px-8 py-4 rounded-2xl font-medium text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                      boxShadow: '0 4px 16px rgba(167, 139, 250, 0.3), 0 8px 24px rgba(96, 165, 250, 0.15)',
                    }}
                  >
                    <span className="relative z-10">View Your Plan</span>

                    {/* Shine effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transform: 'translateX(-100%)',
                        animation: 'shine 2s infinite',
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Ultra-Glass Stats Cards */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-8 tracking-tight uppercase text-sm">
              2. Glass Stats Cards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lavender tinted card */}
              <div
                className="backdrop-blur-[14px] rounded-2xl p-6 space-y-2 transition-all duration-300 hover:backdrop-blur-[16px] hover:scale-[1.02] border"
                style={{
                  background: 'rgba(167, 139, 250, 0.08)',
                  borderColor: 'rgba(167, 139, 250, 0.15)',
                  boxShadow: '0 8px 24px rgba(167, 139, 250, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#7C3AED' }}>
                  Days Completed
                </div>
                <div className="text-4xl font-bold bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">
                  10 / 14
                </div>
                <div className="text-sm text-gray-600 font-light">Keep it up!</div>
              </div>

              {/* Periwinkle tinted card */}
              <div
                className="backdrop-blur-[14px] rounded-2xl p-6 space-y-2 transition-all duration-300 hover:backdrop-blur-[16px] hover:scale-[1.02] border"
                style={{
                  background: 'rgba(147, 197, 253, 0.08)',
                  borderColor: 'rgba(147, 197, 253, 0.15)',
                  boxShadow: '0 8px 24px rgba(147, 197, 253, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#3B82F6' }}>
                  Bio Age Trend
                </div>
                <div className="text-4xl font-bold text-green-600">↓ Improving</div>
                <div className="text-sm text-gray-600 font-light">Great progress</div>
              </div>

              {/* Blue tinted card */}
              <div
                className="backdrop-blur-[14px] rounded-2xl p-6 space-y-2 transition-all duration-300 hover:backdrop-blur-[16px] hover:scale-[1.02] border"
                style={{
                  background: 'rgba(96, 165, 250, 0.08)',
                  borderColor: 'rgba(96, 165, 250, 0.15)',
                  boxShadow: '0 8px 24px rgba(96, 165, 250, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#60A5FA' }}>
                  Current Streak
                </div>
                <div className="text-4xl font-bold bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">
                  10 days
                </div>
                <div className="text-sm text-gray-600 font-light">Personal best!</div>
              </div>
            </div>
          </section>

          {/* 3. Animated Progress */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-8 tracking-tight uppercase text-sm">
              3. Animated Progress
            </h2>

            <div
              className="backdrop-blur-[12px] rounded-2xl p-8 space-y-6 border"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(167, 139, 250, 0.12)',
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.08)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-bold bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">
                  {progress}%
                </span>
              </div>

              {/* Gradient progress bar */}
              <div className="relative h-2 bg-gray-100/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #A78BFA 0%, #93C5FD 50%, #60A5FA 100%)',
                    boxShadow: '0 0 12px rgba(167, 139, 250, 0.5)',
                  }}
                />
              </div>

              {/* Animated gradient bars visualization */}
              <div className="grid grid-cols-14 gap-2 h-24">
                {Array.from({ length: 14 }).map((_, i) => {
                  const height = Math.min(100, (i + 1) * 7 + Math.random() * 10)
                  const isCompleted = i < 10
                  return (
                    <div key={i} className="flex flex-col justify-end">
                      <div
                        className="w-full rounded-t-md transition-all duration-500 hover:scale-105"
                        style={{
                          height: `${height}%`,
                          background: isCompleted
                            ? `linear-gradient(to top, #A78BFA, #60A5FA)`
                            : 'rgba(209, 213, 219, 0.3)',
                          boxShadow: isCompleted ? '0 4px 12px rgba(167, 139, 250, 0.3)' : 'none',
                        }}
                      />
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                  className="px-4 py-2 text-sm rounded-xl font-medium transition-all backdrop-blur-xl hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(167, 139, 250, 0.2)',
                    color: '#6B7280',
                  }}
                >
                  -10%
                </button>
                <button
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                  className="px-4 py-2 text-sm rounded-xl font-medium text-white transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA, #60A5FA)',
                    boxShadow: '0 4px 12px rgba(167, 139, 250, 0.3)',
                  }}
                >
                  +10%
                </button>
              </div>
            </div>
          </section>

          {/* 4. Glass Input Fields */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-8 tracking-tight uppercase text-sm">
              4. Glass Input Fields
            </h2>

            <div className="space-y-5 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl font-light text-gray-900 transition-all duration-200 focus:outline-none focus:scale-[1.01]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(167, 139, 250, 0.15)',
                    boxShadow: '0 4px 16px rgba(167, 139, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(167, 139, 250, 0.4)'
                    e.target.style.boxShadow = '0 8px 24px rgba(167, 139, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 3px rgba(167, 139, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(167, 139, 250, 0.15)'
                    e.target.style.boxShadow = '0 4px 16px rgba(167, 139, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Sleep Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-xl font-light text-gray-900 transition-all duration-200 focus:outline-none focus:scale-[1.01]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(96, 165, 250, 0.15)',
                    boxShadow: '0 4px 16px rgba(96, 165, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(96, 165, 250, 0.4)'
                    e.target.style.boxShadow = '0 8px 24px rgba(96, 165, 250, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 3px rgba(96, 165, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(96, 165, 250, 0.15)'
                    e.target.style.boxShadow = '0 4px 16px rgba(96, 165, 250, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}
                />
              </div>
            </div>
          </section>

          {/* 5. Glass Buttons Variety */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-8 tracking-tight uppercase text-sm">
              5. Glass Button Variants
            </h2>

            <div className="flex flex-wrap gap-4">
              {/* Gradient glass button */}
              <button
                className="px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                  boxShadow: '0 4px 16px rgba(167, 139, 250, 0.3)',
                }}
              >
                Primary Action
              </button>

              {/* Ultra-glass secondary */}
              <button
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                  color: '#7C3AED',
                  boxShadow: '0 4px 16px rgba(167, 139, 250, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                Secondary Glass
              </button>

              {/* Text with glass hover */}
              <button
                className="px-6 py-3 rounded-xl font-medium text-gray-700 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.backdropFilter = 'blur(8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.backdropFilter = 'none'
                }}
              >
                Text Button
              </button>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <p
            className="text-sm backdrop-blur-sm inline-block px-4 py-2 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#9CA3AF',
              border: '1px solid rgba(167, 139, 250, 0.1)',
            }}
          >
            Premium Minimal Enhanced • Lavender Dreams
          </p>
        </footer>
      </div>

      {/* Global Styles for Mobile Optimizations */}
      <style>{`
        /* Mobile optimizations - reduce blur for better performance */
        @media (max-width: 768px) {
          [style*="backdrop-blur"] {
            backdrop-filter: blur(8px) !important;
          }

          /* Reduce animation on mobile for performance */
          .animate-first,
          .animate-second,
          .animate-third,
          .animate-fourth,
          .animate-fifth {
            animation-duration: 40s !important;
          }
        }
      `}</style>
    </div>
  )
}

export default App
