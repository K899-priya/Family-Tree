import { motion } from "framer-motion";
import { useState } from "react";

function WelcomeScreen({ onEnter }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => onEnter(), 2000);
  };

  return (
    <div
      onClick={handleClick}
      className="h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-pink-700 to-black text-white cursor-pointer overflow-hidden"
      style={{ perspective: "1200px" }} // 🔥 3D depth
    >
      {/* 🌟 Background glow */}
      <div className="absolute w-125 h-125 bg-pink-500 blur-3xl opacity-20 rounded-full"></div>

      {/* ✉️ Envelope */}
      <div className="relative w-75 sm:w-90 md:w-105 h-55 z-10">

        {/* 📩 Letter (comes out in 3D) */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-pink-500 to-purple-600 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center px-6"
          initial={{ y: 40, rotateX: 20, opacity: 0 }}
          animate={{
            y: open ? -140 : 40,
            rotateX: open ? 0 : 20,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Welcome 💖
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-2">
            A place where memories come alive ✨
          </p>
        </motion.div>

        {/* 🔺 TOP FLAP (3D rotate) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-purple-800 rounded-t-2xl shadow-xl"
          animate={{
            rotateX: open ? -170 : 0,
          }}
          transition={{ duration: 1 }}
          style={{
            transformOrigin: "top",
            transformStyle: "preserve-3d",
          }}
        />

        {/* ◀️ LEFT FLAP */}
        <motion.div
          className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-900 clip-left shadow-lg"
          animate={{
            rotateY: open ? -20 : 0,
          }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
        />

        {/* ▶️ RIGHT FLAP */}
        <motion.div
          className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-purple-900 clip-right shadow-lg"
          animate={{
            rotateY: open ? 20 : 0,
          }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "right" }}
        />

        {/* 📦 Base shadow */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl blur-xl -z-10 translate-y-6"></div>
      </div>

      {/* 👇 Hint */}
      {!open && (
        <motion.div
          className="absolute bottom-10 text-white/80"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5.5 }}
        >
          Tap to open ✉️
        </motion.div>
      )}
    </div>
  );
}

export default WelcomeScreen;