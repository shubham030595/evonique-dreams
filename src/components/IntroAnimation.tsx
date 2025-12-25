import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import evoniqueLogo from "@/assets/evonique-logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => setStage(4), 3500),
      setTimeout(() => onComplete(), 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* 3D Perspective Background */}
        <div 
          className="absolute inset-0 bg-gradient-hero"
          style={{ perspective: "1000px" }}
        >
          {/* Animated 3D Grid */}
          <motion.div
            className="absolute inset-0"
            initial={{ rotateX: 60, translateZ: -500, opacity: 0 }}
            animate={{ 
              rotateX: stage >= 1 ? 0 : 60, 
              translateZ: stage >= 1 ? 0 : -500,
              opacity: stage >= 1 ? 1 : 0 
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Floating 3D Elements */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-40 h-40 border border-primary/10 rounded-full"
                style={{
                  left: `${(i % 4) * 25 + 12.5}%`,
                  top: `${Math.floor(i / 4) * 33 + 16.5}%`,
                  transformStyle: "preserve-3d",
                }}
                initial={{ 
                  scale: 0, 
                  rotateX: Math.random() * 360,
                  rotateY: Math.random() * 360,
                  translateZ: Math.random() * 200 - 100
                }}
                animate={{ 
                  scale: stage >= 1 ? [0, 1.2, 1] : 0,
                  rotateX: stage >= 1 ? [0, 180, 360] : 0,
                  rotateY: stage >= 1 ? [0, 180, 360] : 0,
                  translateZ: stage >= 1 ? [0, 50, 0] : 0
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>

          {/* Golden Particles */}
          {stage >= 2 && [...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                y: [0, -100],
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}

          {/* Central 3D Logo Reveal */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              {/* 3D Rotating Ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: stage >= 1 ? 1 : 0, 
                  scale: stage >= 1 ? 1 : 0,
                  rotateY: stage >= 1 ? 360 : 0,
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-primary/30 relative">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-4 rounded-full border border-primary/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Logo with 3D Effect */}
              <motion.div
                className="relative z-10"
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotateY: -180,
                  translateZ: -200
                }}
                animate={{ 
                  opacity: stage >= 2 ? 1 : 0, 
                  scale: stage >= 2 ? 1 : 0.5,
                  rotateY: stage >= 2 ? 0 : -180,
                  translateZ: stage >= 2 ? 0 : -200
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
                  src={evoniqueLogo}
                  alt="Evonique"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                  animate={{
                    filter: stage >= 3 
                      ? ["drop-shadow(0 0 20px rgba(201, 169, 110, 0.5))", "drop-shadow(0 0 40px rgba(201, 169, 110, 0.8))", "drop-shadow(0 0 20px rgba(201, 169, 110, 0.5))"]
                      : "none"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center text-sm md:text-base font-body tracking-[0.3em] text-primary/80 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 20 }}
                transition={{ duration: 0.8 }}
              >
                LUXURY INDIAN WEDDINGS
              </motion.p>
            </motion.div>
          </div>

          {/* Final Reveal Animation */}
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: stage >= 4 ? 1 : 0 }}
            style={{ transformOrigin: "bottom" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
