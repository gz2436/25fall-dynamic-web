import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = {
    bg: '/presentation-assets/docs/01.png'
};

export const PhilosophySlide: React.FC = () => {
    return (
        <div className="w-full min-h-full relative bg-black overflow-hidden flex flex-col md:flex-row">
            {/* Left Side: Image */}
            <div className="w-full h-64 md:h-full md:w-1/2 relative flex-shrink-0">
                <img
                    src={IMAGES.bg}
                    alt="DailyFilm Philosophy"
                    className="w-full h-full object-cover object-[center_20%] md:object-[20%_center]"
                />
            </div>

            {/* Right Side: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-black z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="space-y-8 md:space-y-12 md:pl-16 border-l-0 border-transparent"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter text-left">
                        One Day.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">One Film.</span>
                    </h2>

                    <div className="h-1 md:h-2 w-24 md:w-32 bg-white" />

                    <p className="text-lg md:text-2xl font-mono text-gray-300 leading-relaxed text-left max-w-lg">
                        In an era of infinite scroll,<br />
                        we chose <span className="text-white font-bold border-b-2 border-white">curation</span>.<br />
                        A single masterpiece,<br />
                        every 24 hours.
                    </p>

                    <div className="pt-4 md:pt-8 opacity-50 font-mono text-xs md:text-sm tracking-widest text-left">
                        // DAILY_FILM_PROTOCOL_V3.0
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
