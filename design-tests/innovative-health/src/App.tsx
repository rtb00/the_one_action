import { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(65)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 bg-white" />
      <div
        className="fixed inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% -20%, rgba(124, 58, 237, 0.15), transparent),
            radial-gradient(ellipse 60% 60% at 0% 100%, rgba(37, 99, 235, 0.15), transparent),
            radial-gradient(ellipse 60% 60% at 100% 100%, rgba(245, 158, 11, 0.1), transparent)
          `
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Innovative Health Design System
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Modern, innovative, eye-catching. Shows cutting-edge while staying trustworthy.
          </p>
        </header>

        {/* Component Sections */}
        <div className="space-y-16">

          {/* 1. Main Action Card with Animations */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Main Action Card</h2>
            <div className="relative group bg-white/65 backdrop-blur-2xl border border-primary-purple/20 rounded-[32px] p-12 shadow-glass hover:shadow-glass-hover transition-all duration-500 overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/8 via-primary-blue/8 to-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple via-primary-blue to-accent-pink opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              <div className="relative z-10 space-y-6">
                <div className="text-xs font-bold uppercase tracking-widest text-primary-purple">
                  Your Focus • Next 14 Days
                </div>
                <h3 className="text-5xl font-extrabold text-gray-900 leading-tight">
                  Establish consistent sleep routine
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Going to bed at the same time every night will significantly improve
                  your recovery and biological age trend.
                </p>
                <button className="relative px-8 py-4 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-purple bg-[length:200%_100%] text-white font-semibold text-lg rounded-2xl shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden group">
                  <span className="relative z-10">Start Your Action</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>
          </section>

          {/* 2. Vibrant Buttons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-semibold rounded-2xl shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.4)] hover:scale-105 transition-all duration-300">
                Primary Gradient
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-accent-orange to-accent-pink text-white font-semibold rounded-2xl shadow-[0_8px_24px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-300">
                Accent Gradient
              </button>
              <button className="px-8 py-4 bg-white/65 backdrop-blur-2xl border-2 border-primary-purple/20 text-gray-900 font-semibold rounded-2xl hover:border-primary-purple/40 hover:scale-105 transition-all duration-300">
                Glass Secondary
              </button>
            </div>
          </section>

          {/* 3. Floating Stats Cards */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Floating Stats Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-white/50 backdrop-blur-2xl border border-primary-purple/20 rounded-3xl p-8 space-y-3 hover:scale-105 transition-transform duration-300 animate-float">
                <div className="text-sm font-bold uppercase tracking-wider text-primary-purple">Days Completed</div>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
                  10 / 14
                </div>
                <div className="text-sm text-gray-600 font-medium">Crushing it!</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white/50 backdrop-blur-2xl border border-primary-blue/20 rounded-3xl p-8 space-y-3 hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-sm font-bold uppercase tracking-wider text-primary-blue">Bio Age Trend</div>
                <div className="text-5xl font-extrabold text-green-600">↓ -2.3y</div>
                <div className="text-sm text-gray-600 font-medium">Amazing progress</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white/50 backdrop-blur-2xl border border-accent-orange/20 rounded-3xl p-8 space-y-3 hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-sm font-bold uppercase tracking-wider text-accent-orange">Current Streak</div>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent">
                  10 🔥
                </div>
                <div className="text-sm text-gray-600 font-medium">On fire!</div>
              </div>
            </div>
          </section>

          {/* 4. Animated Progress */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Animated Progress</h2>
            <div className="bg-white/65 backdrop-blur-2xl border border-primary-purple/20 rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">Overall Progress</span>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
                  {progress}%
                </span>
              </div>

              {/* Circular Progress */}
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="rgba(124, 58, 237, 0.1)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${progress * 5.53} 553`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-gray-900">{progress}%</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition"
                >
                  -10%
                </button>
                <button
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                  className="px-6 py-2 bg-gradient-to-r from-primary-purple to-primary-blue text-white rounded-xl font-medium transition hover:scale-105"
                >
                  +10%
                </button>
              </div>
            </div>
          </section>

          {/* 5. Glass Input Fields */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Glass Input Fields</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 bg-white/65 backdrop-blur-2xl border-2 border-primary-purple/20 rounded-2xl focus:outline-none focus:border-primary-purple focus:ring-4 focus:ring-primary-purple/20 transition text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">
                  Target Sleep Time
                </label>
                <input
                  type="time"
                  className="w-full px-5 py-4 bg-white/65 backdrop-blur-2xl border-2 border-primary-blue/20 rounded-2xl focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/20 transition text-lg"
                />
              </div>
            </div>
          </section>

          {/* 6. Vibrant Badges */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Vibrant Badges</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-2.5 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-bold rounded-full text-sm shadow-lg">
                Active
              </span>
              <span className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full text-sm shadow-lg">
                Improving
              </span>
              <span className="px-5 py-2.5 bg-gradient-to-r from-accent-orange to-accent-pink text-white font-bold rounded-full text-sm shadow-lg">
                On Fire
              </span>
              <span className="px-5 py-2.5 bg-white/65 backdrop-blur-2xl border-2 border-primary-purple/30 text-primary-purple font-bold rounded-full text-sm">
                Glass Badge
              </span>
            </div>
          </section>

          {/* 7. Bold Alerts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Bold Alerts</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500/30 rounded-2xl p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <div className="font-bold text-green-900 text-lg">Success!</div>
                  <div className="text-green-700 font-medium">Your action has been recorded for today.</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-primary-purple/30 rounded-2xl p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full flex items-center justify-center text-white font-bold">!</div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Reminder</div>
                  <div className="text-gray-700 font-medium">Don't forget to log your sleep time tonight at 10 PM.</div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Interactive List */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Interactive List</h2>
            <div className="bg-white/65 backdrop-blur-2xl border border-primary-purple/20 rounded-3xl divide-y divide-gray-200/50 overflow-hidden">
              {[1, 2, 3, 4].map((day) => (
                <div key={day} className="p-5 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 transition cursor-pointer flex items-center justify-between group">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Day {day} - Sleep Routine</div>
                    <div className="text-sm text-gray-600 font-medium">Completed at 10:30 PM</div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Glass Toggle */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Glass Toggle</h2>
            <div className="bg-white/65 backdrop-blur-2xl border border-primary-purple/20 rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 text-lg">Enable Notifications</div>
                  <div className="text-gray-600 font-medium">Get reminders for your daily action</div>
                </div>
                <button className="relative w-16 h-8 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full transition shadow-lg">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full shadow-lg transition" />
                </button>
              </div>
            </div>
          </section>

          {/* 10. Typography Scale */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Bold Typography</h2>
            <div className="bg-white/65 backdrop-blur-2xl border border-primary-purple/20 rounded-3xl p-10 space-y-4">
              <div className="text-6xl font-extrabold bg-gradient-to-r from-primary-purple via-primary-blue to-accent-pink bg-clip-text text-transparent">
                Hero Gradient
              </div>
              <div className="text-4xl font-extrabold text-gray-900">Heading 1 Bold</div>
              <div className="text-3xl font-bold text-gray-900">Heading 2 Bold</div>
              <div className="text-2xl font-semibold text-gray-900">Heading 3 Semibold</div>
              <div className="text-xl text-gray-700 font-medium">Body Large Medium - The quick brown fox jumps over the lazy dog.</div>
              <div className="text-base text-gray-600">Body Regular - The quick brown fox jumps over the lazy dog.</div>
              <div className="text-sm text-gray-600">Body Small - The quick brown fox jumps over the lazy dog.</div>
              <div className="text-xs uppercase tracking-widest font-bold text-primary-purple">Bold Label Text</div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 font-medium">
          <p>Innovative Health Design System • TheOneAction</p>
        </footer>
      </div>
    </div>
  )
}

export default App
