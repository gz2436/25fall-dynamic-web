import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePresentationTheme } from '../hooks';

export const CoverSlide: React.FC = () => {
    const { theme } = usePresentationTheme();

    return (
        <div className="w-full min-h-full flex flex-col items-center justify-center relative overflow-hidden bg-black text-white px-4 md:px-0 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-4xl p-4 md:p-8 font-mono text-left space-y-2"
            >
                <div className="text-green-500 text-base md:text-xl group w-fit">
                    gavin@nyu-web ~$ <Link to="/" className="text-white hover:text-green-400 hover:underline cursor-pointer typing-effect transition-colors">./init_sequence.sh</Link>
                </div>
                <div className="text-gray-500 text-xs md:text-sm pt-4">
                    <div>&gt; Loading react_core... [OK]</div>
                    <div>&gt; Mounting cinematic_module... [OK]</div>
                    <div>&gt; Bypass_security_protocols... [SUCCESS]</div>
                    <div className="text-yellow-500">&gt; WARNING: Emotional overflow detected.</div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="pt-8 md:pt-12 flex flex-col items-start gap-2"
                >
                    <h2 className="text-3xl md:text-5xl font-black bg-white text-black inline-block px-3 py-1 md:px-4 tracking-tighter mb-2">
                        FINAL PROJECT
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-black bg-white text-black inline-block px-3 py-1 md:px-4 tracking-tighter">
                        DAILY_FILM
                    </h1>
                    <div className="mt-2 text-gray-400 opacity-50 blinking-cursor">_</div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                    delay: 2,
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-8 md:bottom-12 text-[10px] md:text-xs font-mono tracking-widest text-center w-full"
            >
                PRESS [SPACE] OR TAP TO START
            </motion.div>
        </div>
    );
};
