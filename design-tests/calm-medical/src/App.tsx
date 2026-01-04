import { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(50)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-gradient-start via-background-base to-background-gradient-end">
      {/* Subtle animated background orb */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-purple/10 to-primary-blue/10 rounded-full blur-3xl animate-breathe pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Calm Medical Design System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Medical-grade trust with subtle innovation. Calm, professional, and accessible.
          </p>
        </header>

        {/* Component Sections */}
        <div className="space-y-16">

          {/* 1. Main Action Card - The One Thing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Main Action Card</h2>
            <div className="relative bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-3xl p-10 shadow-glass hover:shadow-glass-hover transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl" />
              <div className="relative z-10 space-y-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Your Focus • Next 14 Days
                </div>
                <h3 className="text-4xl font-bold text-gray-900">
                  Establish consistent sleep routine
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Going to bed at the same time every night will significantly improve
                  your recovery and biological age trend.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-200">
                  View Your 14-Day Plan
                </button>
              </div>
            </div>
          </section>

          {/* 2. Buttons */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-blue text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-200">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-white/70 backdrop-blur-xl border border-purple-500/15 text-gray-900 font-medium rounded-xl hover:border-purple-500/30 transition-all duration-200">
                Secondary Button
              </button>
              <button className="px-6 py-3 text-primary-purple font-medium hover:bg-purple-50 rounded-xl transition-all duration-200">
                Text Button
              </button>
            </div>
          </section>

          {/* 3. Stats Cards */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Stats Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-2xl p-6 space-y-2">
                <div className="text-sm font-medium text-gray-500">Days Completed</div>
                <div className="text-4xl font-bold text-gray-900">7 / 14</div>
                <div className="text-sm text-gray-600">Keep it up!</div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-blue-500/15 rounded-2xl p-6 space-y-2">
                <div className="text-sm font-medium text-gray-500">Bio Age Trend</div>
                <div className="text-4xl font-bold text-green-600">↓ Improving</div>
                <div className="text-sm text-gray-600">Great progress</div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-2xl p-6 space-y-2">
                <div className="text-sm font-medium text-gray-500">Streak</div>
                <div className="text-4xl font-bold text-gray-900">5 days</div>
                <div className="text-sm text-gray-600">Personal best!</div>
              </div>
            </div>
          </section>

          {/* 4. Progress Indicators */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Progress Indicators</h2>
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Overall Progress</span>
                  <span className="text-sm font-semibold text-primary-purple">{progress}%</span>
                </div>
                <div className="relative h-3 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-purple to-primary-blue rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    -10%
                  </button>
                  <button
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                  >
                    +10%
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Input Fields */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Input Fields</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-xl focus:outline-none focus:border-primary-purple/50 focus:ring-2 focus:ring-primary-purple/20 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sleep Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-xl focus:outline-none focus:border-primary-purple/50 focus:ring-2 focus:ring-primary-purple/20 transition"
                />
              </div>
            </div>
          </section>

          {/* 6. Badges */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Badges</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-primary-purple font-medium rounded-full text-sm">
                Active
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-700 font-medium rounded-full text-sm">
                Improving
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-700 font-medium rounded-full text-sm">
                In Progress
              </span>
            </div>
          </section>

          {/* 7. Alerts/Notifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Alerts</h2>
            <div className="space-y-4">
              <div className="bg-green-50/80 backdrop-blur-xl border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <div>
                  <div className="font-medium text-green-900">Success!</div>
                  <div className="text-sm text-green-700">Your action has been recorded for today.</div>
                </div>
              </div>
              <div className="bg-blue-50/80 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">i</div>
                <div>
                  <div className="font-medium text-blue-900">Reminder</div>
                  <div className="text-sm text-blue-700">Don't forget to log your sleep time tonight.</div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. List Items */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. List Items</h2>
            <div className="bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-2xl divide-y divide-gray-200/50">
              {[1, 2, 3].map((day) => (
                <div key={day} className="p-4 hover:bg-purple-50/30 transition cursor-pointer flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Day {day} - Sleep Routine</div>
                    <div className="text-sm text-gray-600">Completed at 10:30 PM</div>
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Toggle/Switch */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Toggle Switch</h2>
            <div className="bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Enable Notifications</div>
                  <div className="text-sm text-gray-600">Get reminders for your daily action</div>
                </div>
                <button className="relative w-12 h-6 bg-primary-purple rounded-full transition">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow transition" />
                </button>
              </div>
            </div>
          </section>

          {/* 10. Typography Scale */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Typography</h2>
            <div className="bg-white/70 backdrop-blur-xl border border-purple-500/15 rounded-2xl p-8 space-y-4">
              <div className="text-5xl font-bold text-gray-900">Hero Text</div>
              <div className="text-3xl font-semibold text-gray-900">Heading 1</div>
              <div className="text-2xl font-semibold text-gray-900">Heading 2</div>
              <div className="text-xl font-medium text-gray-900">Heading 3</div>
              <div className="text-lg text-gray-600">Body Large - The quick brown fox jumps over the lazy dog.</div>
              <div className="text-base text-gray-600">Body Regular - The quick brown fox jumps over the lazy dog.</div>
              <div className="text-sm text-gray-600">Body Small - The quick brown fox jumps over the lazy dog.</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">Label Text</div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Calm Medical Design System • TheOneAction</p>
        </footer>
      </div>
    </div>
  )
}

export default App
