import { motion } from "framer-motion";

function WelcomeScreen({ onEnter }) {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-linear-to-r from-purple-500 to-pink-500 text-white cursor-pointer overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onEnter}
    >
      {/* Glow */}
      <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <motion.h1
        className="text-5xl font-bold z-10"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Our Family 💖
      </motion.h1>

      <motion.p
        className="mt-4 text-lg z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click anywhere to enter 🎬
      </motion.p>
    </motion.div>
  );
}

export default WelcomeScreen;