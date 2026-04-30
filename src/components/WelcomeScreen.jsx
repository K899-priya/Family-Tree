import { motion } from "framer-motion";
import { useState, useMemo, useRef } from "react";

// ✅ asset helper
const getAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

function WelcomeScreen({ onEnter }) {
  const [scene, setScene] = useState(0);
  const audioRef = useRef(null);

  // particles stable
  const particles = useMemo(() => {
    return [...Array(25)].map(() => ({
      id: crypto.randomUUID(), // ✅ stable ID
      // eslint-disable-next-line react-hooks/purity
      top: `${Math.random() * 100}%`,
      // eslint-disable-next-line react-hooks/purity
      left: `${Math.random() * 100}%`,
    }));
  }, []);

  const handleClick = () => {
    if (scene !== 0) return;

    audioRef.current?.play().catch(() => {});
    setScene(1); // open envelope

    setTimeout(() => setScene(2), 1000); // show letter
    setTimeout(() => setScene(3), 2200); // show photo
    setTimeout(() => onEnter(), 4000); // enter app
  };

  return (
    <div
      onClick={handleClick}
      className="h-screen flex items-center justify-center relative overflow-hidden cursor-pointer text-white"
    >
      {/* 🎵 Sound */}
      <audio ref={audioRef}>
        <source src={getAsset("paper.mp3")} />
      </audio>

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-700 via-pink-600 to-purple-700 animate-[gradient_6s_linear_infinite]" />

      {/* ✨ Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-ping"
            style={{
              top: p.top,
              left: p.left,
            }}
          />
        ))}
      </div>

      {/* ✉️ Envelope */}
      <div className="relative w-80 h-52 z-10">
        {/* Body */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl" />

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-pink-400 origin-top rounded-t-xl"
          animate={{ rotateX: scene >= 1 ? -180 : 0 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />

        {/* 📜 Letter */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[80%] bg-white text-black rounded-lg shadow-lg flex flex-col items-center justify-center text-center px-4 overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: scene >= 2 ? -120 : 30,
            opacity: scene >= 2 ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          {/* 🖋️ Handwriting animation */}
          {scene >= 2 && (
            <motion.p
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="overflow-hidden whitespace-nowrap border-r-2 border-black text-sm"
            >
              Welcome to our beautiful family 💖
            </motion.p>
          )}
        </motion.div>

        {/* 🖼️ Family Photo Reveal */}
        {scene >= 3 && (
          <motion.img
            src={getAsset("family.jpg")}
            className="absolute left-1/2 -translate-x-1/2 w-40 rounded-xl shadow-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: -180 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </div>

      {/* 👇 Hint */}
      {scene === 0 && (
        <motion.p
          className="absolute bottom-10 text-white/80"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Tap to open your letter ✉️
        </motion.p>
      )}
    </div>
  );
}

export default WelcomeScreen;
