import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sun, Moon } from 'lucide-react';

interface PresentationContextType {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

const PresentationContext = createContext<PresentationContextType>({ theme: 'dark', toggleTheme: () => { } });

export const usePresentationTheme = () => useContext(PresentationContext);

interface PresentationLayoutProps {
    slides: React.ComponentType[];
}


export const CinematicLayout: React.FC<PresentationLayoutProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const navigate = useNavigate();

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const paginate = useCallback((newDirection: number) => {
        const nextIndex = currentIndex + newDirection;
        if (nextIndex >= 0 && nextIndex < slides.length) {
            setDirection(newDirection);
            setCurrentIndex(nextIndex);
            // Scroll to top on slide change
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentIndex, slides.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.code === 'Space') {
                paginate(1);
            } else if (e.key === 'ArrowLeft') {
                paginate(-1);
            } else if (e.key === 'Escape') {
                navigate('/');
            } else if (e.key === 't') {
                toggleTheme();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [paginate, navigate]);

    const CurrentSlide = slides[currentIndex];

    // Responsive Slide Transitions
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95,
            filter: 'blur(10px)',
            position: 'absolute' as 'absolute'
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            position: 'relative' as 'relative'
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            position: 'absolute' as 'absolute'
        })
    };

    // Force Dark Mode
    const bgColor = 'bg-black';

    return (
        <PresentationContext.Provider value={{ theme: 'dark', toggleTheme: () => { } }}>
            <div className={`min-h-[100dvh] w-full ${bgColor} text-white font-sans selection:bg-white/20 overflow-x-hidden flex flex-col`}>

                {/* Responsive Container */}
                <div className="flex-grow w-full max-w-[1920px] mx-auto relative flex flex-col">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="w-full flex-grow flex flex-col"
                        >
                            {/* Inner content wrapper for consistent padding across devices */}
                            <div className="w-full flex-grow">
                                <CurrentSlide />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls - Responsive Fixed Bottom or Sticky */}
                <div className="fixed bottom-0 inset-x-0 h-24 md:h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-50 flex items-end justify-between p-6 md:p-12 pointer-events-none">
                    <div className="text-white/30 font-mono text-xs md:text-sm pointer-events-auto">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </div>

                    <div className="flex gap-4 pointer-events-auto">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 group border border-white/10"
                            disabled={currentIndex === 0}
                            aria-label="Previous Slide"
                        >
                            <ArrowLeft className={`w-5 h-5 md:w-6 md:h-6 ${currentIndex === 0 ? 'opacity-30' : 'opacity-70 group-hover:opacity-100'}`} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="p-3 md:p-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 group border border-white/10"
                            disabled={currentIndex === slides.length - 1}
                            aria-label="Next Slide"
                        >
                            <ArrowRight className={`w-5 h-5 md:w-6 md:h-6 ${currentIndex === slides.length - 1 ? 'opacity-30' : 'opacity-70 group-hover:opacity-100'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </PresentationContext.Provider>
    );
};
