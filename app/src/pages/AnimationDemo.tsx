import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import GradientButton from '../features/onboarding/components/GradientButton';
import GlassCard from '../features/onboarding/components/GlassCard';

const transitionTypes = [
    { name: 'Slide Right', initial: { x: -100 }, animate: { x: 0 }, exit: { x: 100 } },
    { name: 'Slide Left', initial: { x: 100 }, animate: { x: 0 }, exit: { x: -100 } },
    { name: 'Slide Up', initial: { y: 100 }, animate: { y: 0 }, exit: { y: -100 } },
    { name: 'Slide Down', initial: { y: -100 }, animate: { y: 0 }, exit: { y: 100 } },
    { name: 'Fade', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
    { name: 'Scale', initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 } },
    { name: 'Rotate', initial: { rotate: -180, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 180, opacity: 0 } },
    { name: 'Flip', initial: { rotateY: 90, opacity: 0 }, animate: { rotateY: 0, opacity: 1 }, exit: { rotateY: -90, opacity: 0 } },
];

const springPresets = [
    { name: 'Bouncy', stiffness: 400, damping: 17 },
    { name: 'Smooth', stiffness: 260, damping: 20 },
    { name: 'Gentle', stiffness: 120, damping: 14 },
    { name: 'Snappy', stiffness: 500, damping: 25 },
];

export default function AnimationDemo() {
    const [selectedTransition, setSelectedTransition] = useState(0);
    const [selectedSpring, setSelectedSpring] = useState(1);
    const [show, setShow] = useState(true);

    const currentTransition = transitionTypes[selectedTransition];
    const currentSpring = springPresets[selectedSpring];

    const trigger = () => {
        setShow(false);
        setTimeout(() => setShow(true), 300);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-start min-h-screen px-6 py-12">
                <div className="max-w-2xl w-full space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-lavender-400 via-periwinkle-400 to-lavender-400 bg-clip-text text-transparent">
                            Animation Demo
                        </h1>
                        <p className="text-gray-600">Alle verfügbaren Framer Motion Transitions</p>
                    </div>

                    {/* Preview Area */}
                    <GlassCard className="space-y-6">
                        <div className="h-64 flex items-center justify-center border-2 border-dashed border-lavender-200 rounded-xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                {show && (
                                    <motion.div
                                        key={`${selectedTransition}-${selectedSpring}`}
                                        initial={currentTransition.initial}
                                        animate={currentTransition.animate}
                                        exit={currentTransition.exit}
                                        transition={{
                                            type: 'spring',
                                            stiffness: currentSpring.stiffness,
                                            damping: currentSpring.damping,
                                        }}
                                        className="w-32 h-32 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                                        }}
                                    >
                                        Demo
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <GradientButton onClick={trigger} className="w-full">
                            Abspielen
                        </GradientButton>
                    </GlassCard>

                    {/* Transition Types */}
                    <GlassCard className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Transition Type</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {transitionTypes.map((transition, index) => (
                                <button
                                    key={transition.name}
                                    onClick={() => setSelectedTransition(index)}
                                    className={`p-3 rounded-xl border transition-all ${selectedTransition === index
                                            ? 'bg-lavender-100 border-lavender-400 text-lavender-900'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-lavender-300'
                                        }`}
                                >
                                    {transition.name}
                                </button>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Spring Presets */}
                    <GlassCard className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Spring Physics</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {springPresets.map((spring, index) => (
                                <button
                                    key={spring.name}
                                    onClick={() => setSelectedSpring(index)}
                                    className={`p-3 rounded-xl border transition-all ${selectedSpring === index
                                            ? 'bg-lavender-100 border-lavender-400 text-lavender-900'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-lavender-300'
                                        }`}
                                >
                                    <div className="font-medium">{spring.name}</div>
                                    <div className="text-xs opacity-70">
                                        S:{spring.stiffness} D:{spring.damping}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Code Display */}
                    <GlassCard className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">Code</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`<motion.div
  initial={${JSON.stringify(currentTransition.initial)}}
  animate={${JSON.stringify(currentTransition.animate)}}
  exit={${JSON.stringify(currentTransition.exit)}}
  transition={{
    type: 'spring',
    stiffness: ${currentSpring.stiffness},
    damping: ${currentSpring.damping},
  }}
>
  Content
</motion.div>`}
                        </pre>
                    </GlassCard>
                </div>
            </div>
        </Layout>
    );
}
