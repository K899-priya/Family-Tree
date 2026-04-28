import { motion } from "framer-motion";
import { useState } from "react";

function WelcomeScreen({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleEnter = () => {
    setClicked(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <motion.div
      onClick={handleEnter}
      className="h-screen flex flex-col items-center justify-center cursor-pointer overflow-hidden relative text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* 🌌 Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 animate-[gradient_6s_linear_infinite]" />

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-ping"
            style={{
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 💥 Click Ripple Effect */}
      {clicked && (
        <motion.div
          className="absolute w-40 h-40 bg-white rounded-full opacity-20"
          initial={{ scale: 0 }}
          animate={{ scale: 10 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* 🧠 Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center z-10"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Our Family 💖
      </motion.h1>

      {/* ✨ Subtitle */}
      <motion.p
        className="mt-6 text-lg z-10 text-white/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Click karne ka 👆
      </motion.p>

      {/* 🔽 Bounce Hint */}
      <motion.div
        className="absolute bottom-10 text-white/80 text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
}

export default WelcomeScreen;