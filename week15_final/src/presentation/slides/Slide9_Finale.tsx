import React from 'react';
import { motion } from 'framer-motion';
import { usePresentationTheme } from '../hooks';

// V2: The Credits (Split Style)
// Left: Thank you title, Right: QR Code/Links
// V2: The Credits (Split Style)
// Left: Thank you title, Right: QR Code/Links
export const FinalSlide: React.FC = () => {
    const { theme } = usePresentationTheme();

    return (
        <div className="w-full min-h-full flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden bg-black text-white py-20">
            {/* Header - Flow Position */}
            <div className="w-full text-center z-20 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
                >
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">End</span>
                </motion.h2>
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-7xl relative z-10">
                {/* Left: Thank You */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-center md:text-right flex flex-col items-center md:items-end"
                >
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2">
                        Thank<br /><span className="text-red-600">You</span>
                    </h2>
                    <p className="font-mono text-xs md:text-sm opacity-50 tracking-widest uppercase">
                        Designed & Built by Gavin
                    </p>
                </motion.div>

                {/* Divider */}
                <div className="w-32 h-[1px] md:h-32 md:w-[1px] bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* Right: QR Code */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="p-4 rounded-xl bg-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com/gz2436/DynamicWebClassNotes"
                            alt="Github Repo"
                            className="w-32 h-32 md:w-48 md:h-48 mix-blend-multiply"
                        />
                    </div>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-40">
                        Source Code
                    </span>
                </motion.div>
            </div>
        </div>
    );
};
