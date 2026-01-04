import { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(72)

  return (
    <div className="min-h-screen relative">
      {/* Ultra-subtle background gradient */}
      <div className="fixed inset-0 bg-white" />
      <div
        className="fixed inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 0%, rgba(139, 92, 246, 0.03), transparent 70%),
            radial-gradient(ellipse 80% 80% at 0% 100%, rgba(59, 130, 246, 0.03), transparent 70%)
          `
        }}
      />

      {/* Subtle breathing orb */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-purple/5 to-primary-blue/5 rounded-full blur-3xl animate-breathe-subtle pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-6xl">
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-[52px] font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Premium Minimal Design System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Apple-Health-level polish. Perfect balance between innovation and trust.
          </p>
        </header>

        {/* Component Sections */}
        <div className="space-y-20">

          {/* 1. Main Action Card */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">1. Main Action Card</h2>
            <div className="relative bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-[28px] p-12 shadow-glass hover:shadow-glass-lg transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-purple-50/80 rounded-[28px]" />

              <div className="relative z-10 space-y-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Your Focus • Next 14 Days
                </div>
                <h3 className="text-[32px] font-semibold text-gray-900 tracking-tight leading-tight">
                  Establish consistent sleep routine
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Going to bed at the same time will improve your recovery
                  and biological age trend.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-medium rounded-xl shadow-[0_4px_12px_rgba(139,92,246,0.25)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.3)] hover:opacity-95 active:scale-[0.98] transition-all duration-200">
                  View Your Plan
                </button>
              </div>
            </div>
          </section>

          {/* 2. Refined Buttons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">2. Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-medium rounded-xl shadow-[0_4px_12px_rgba(139,92,246,0.25)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.3)] hover:opacity-95 active:scale-[0.98] transition-all duration-200">
                Primary Gradient
              </button>
              <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-gray-800 active:scale-[0.98] transition-all duration-200">
                Dark Solid
              </button>
              <button className="px-6 py-3 bg-white/75 backdrop-blur-2xl border border-primary-purple/12 text-gray-900 font-medium rounded-xl hover:border-primary-purple/25 active:scale-[0.98] transition-all duration-200">
                Secondary Glass
              </button>
              <button className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 rounded-xl active:scale-[0.98] transition-all duration-200">
                Text Button
              </button>
            </div>
          </section>

          {/* 3. Minimal Stats Cards */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">3. Stats Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50/50 backdrop-blur-xl border border-primary-purple/10 rounded-2xl p-6 space-y-2">
                <div className="text-sm font-medium text-gray-500">Days Completed</div>
                <div className="text-4xl font-semibold text-gray-900">10 / 14</div>
                <div className="text-sm text-gray-600">Keep it up!</div>
              </div>
              <div className="bg-blue-50/50 backdrop-blur-xl border border-primary-blue/10 rounded-2xl p-6 space-y-2">
                <div className="text-sm font-medium text-gray-500">Biological Age Trend</div>
                <div className="text-4xl font-semibold text-green-600">↓ Improving</div>
                <div className="text-sm text-gray-600">Great progress</div>
              </div>
              <div className="bg-purple-50/50 backdrop-blur-xl border border-primary-purple/10 rounded-2xl p-6 space-y-2">
                <div className="text-sm font-medium text-gray-500">Current Streak</div>
                <div className="text-4xl font-semibold text-gray-900">10 days</div>
                <div className="text-sm text-gray-600">Personal best!</div>
              </div>
            </div>
          </section>

          {/* 4. Minimal Progress */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">4. Progress Indicator</h2>
            <div className="bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Overall Progress</span>
                <span className="text-sm font-semibold text-gray-900">{progress}%</span>
              </div>

              {/* Minimal line progress */}
              <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Trend visualization */}
              <div className="grid grid-cols-14 gap-1.5 h-20">
                {Array.from({ length: 14 }).map((_, i) => {
                  const height = Math.min(100, (i + 1) * 7 + Math.random() * 10)
                  const isCompleted = i < 10
                  return (
                    <div key={i} className="flex flex-col justify-end">
                      <div
                        className={`w-full rounded-sm transition-all duration-300 ${
                          isCompleted
                            ? 'bg-gradient-to-t from-primary-purple to-primary-blue'
                            : 'bg-gray-200'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition active:scale-95"
                >
                  -10%
                </button>
                <button
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                  className="px-4 py-2 text-sm bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-medium transition active:scale-95"
                >
                  +10%
                </button>
              </div>
            </div>
          </section>

          {/* 5. Premium Input Fields */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">5. Input Fields</h2>
            <div className="space-y-5 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-xl focus:outline-none focus:border-primary-purple/30 focus:ring-4 focus:ring-primary-purple/10 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Sleep Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-xl focus:outline-none focus:border-primary-purple/30 focus:ring-4 focus:ring-primary-purple/10 transition"
                />
              </div>
            </div>
          </section>

          {/* 6. Refined Badges */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">6. Badges</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-medium rounded-full text-sm">
                Active
              </span>
              <span className="px-4 py-1.5 bg-green-50 border border-green-200 text-green-700 font-medium rounded-full text-sm">
                Improving
              </span>
              <span className="px-4 py-1.5 bg-amber-50 border border-amber-200 text-amber-700 font-medium rounded-full text-sm">
                In Progress
              </span>
              <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-full text-sm">
                Neutral
              </span>
            </div>
          </section>

          {/* 7. Subtle Alerts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">7. Alerts</h2>
            <div className="space-y-4">
              <div className="bg-green-50/80 backdrop-blur-xl border border-green-200/50 rounded-xl p-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">✓</div>
                <div>
                  <div className="font-medium text-green-900">Success</div>
                  <div className="text-sm text-green-700">Your action has been recorded for today.</div>
                </div>
              </div>
              <div className="bg-blue-50/80 backdrop-blur-xl border border-blue-200/50 rounded-xl p-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">i</div>
                <div>
                  <div className="font-medium text-blue-900">Reminder</div>
                  <div className="text-sm text-blue-700">Don't forget to log your sleep time tonight.</div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Clean List */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">8. List Items</h2>
            <div className="bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-2xl divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((day) => (
                <div key={day} className="p-4 hover:bg-gray-50/50 transition cursor-pointer flex items-center justify-between group">
                  <div>
                    <div className="font-medium text-gray-900">Day {day} - Sleep Routine</div>
                    <div className="text-sm text-gray-600">Completed at 10:30 PM</div>
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Minimal Toggle */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">9. Toggle Switch</h2>
            <div className="bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Enable Notifications</div>
                  <div className="text-sm text-gray-600">Get reminders for your daily action</div>
                </div>
                <button className="relative w-12 h-6 bg-primary-purple rounded-full transition shadow-sm">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow transition" />
                </button>
              </div>
            </div>
          </section>

          {/* 10. Premium Typography */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">10. Typography Scale</h2>
            <div className="bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-2xl p-10 space-y-5">
              <div className="text-[52px] font-bold text-gray-900 tracking-tight leading-none">
                Hero Text
              </div>
              <div className="text-[32px] font-semibold text-gray-900 tracking-tight leading-tight">
                Heading 1
              </div>
              <div className="text-2xl font-semibold text-gray-900 tracking-tight">
                Heading 2
              </div>
              <div className="text-lg font-medium text-gray-900">
                Heading 3
              </div>
              <div className="text-lg text-gray-600 leading-relaxed">
                Body Large - The quick brown fox jumps over the lazy dog.
              </div>
              <div className="text-base text-gray-600 leading-relaxed">
                Body Regular - The quick brown fox jumps over the lazy dog.
              </div>
              <div className="text-sm text-gray-600 leading-normal">
                Body Small - The quick brown fox jumps over the lazy dog.
              </div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">
                Label Text
              </div>
            </div>
          </section>

          {/* 11. Data Visualization */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">11. Data Visualization</h2>
            <div className="bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-2xl p-8">
              <div className="mb-6">
                <div className="font-medium text-gray-900">Weekly Activity</div>
                <div className="text-sm text-gray-600">Last 7 days</div>
              </div>
              <div className="flex items-end gap-2 h-32">
                {[85, 92, 78, 95, 88, 100, 90].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-primary-purple to-primary-blue rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer"
                      style={{ height: `${value}%` }}
                    />
                    <div className="text-xs text-gray-500 text-center font-medium">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 12. Icon Buttons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">12. Icon Buttons</h2>
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-xl hover:border-primary-purple/25 transition flex items-center justify-center text-gray-700">
                ⚙️
              </button>
              <button className="w-12 h-12 bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-xl hover:border-primary-purple/25 transition flex items-center justify-center text-gray-700">
                📊
              </button>
              <button className="w-12 h-12 bg-white/75 backdrop-blur-2xl border border-primary-purple/12 rounded-xl hover:border-primary-purple/25 transition flex items-center justify-center text-gray-700">
                ❤️
              </button>
              <button className="w-12 h-12 bg-gray-900 rounded-xl hover:bg-gray-800 transition flex items-center justify-center text-white">
                +
              </button>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500 text-sm">
          <p>Premium Minimal Design System • TheOneAction</p>
        </footer>
      </div>
    </div>
  )
}

export default App
