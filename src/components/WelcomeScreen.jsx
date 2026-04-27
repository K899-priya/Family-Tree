import { motion } from "framer-motion";

function WelcomeScreen({ onEnter }) {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-linear-to-r from-purple-400 to-pink-400 text-white cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onEnter}
    >
      <motion.h1
        className="text-5xl font-bold"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Our Family 💖
      </motion.h1>

      <p className="mt-4 text-lg">Click anywhere to enter</p>
    </motion.div>
  );
}

export default WelcomeScreen;