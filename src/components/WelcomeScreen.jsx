import { motion } from "framer-motion";
import { useState, useMemo } from "react";

function WelcomeScreen({ onEnter }) {
  const [open, setOpen] = useState(false);

  // ✅ stable particles
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      // eslint-disable-next-line react-hooks/purity
      top: `${Math.random() * 100}%`,
      // eslint-disable-next-line react-hooks/purity
      left: `${Math.random() * 100}%`,
    }));
  }, []);

  const handleClick = () => {
    setOpen(true);

    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div
      onClick={handleClick}
      className="h-screen flex items-center justify-center relative overflow-hidden cursor-pointer text-white"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-700 via-pink-600 to-purple-700 animate-[gradient_6s_linear_infinite]" />

      {/* ✨ Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-ping"
            style={{ top: p.top, left: p.left }}
          />
        ))}
      </div>

      {/* ✉️ Envelope Container */}
      <div className="relative w-80 h-52 z-10">

        {/* 📩 Envelope Body */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl" />

        {/* 🔺 Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-pink-400 origin-top rounded-t-xl"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: open ? -180 : 0 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />

        {/* 📜 Letter */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[80%] bg-white text-black rounded-lg shadow-lg flex flex-col items-center justify-center text-center px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: open ? -120 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-2">
            Welcome 💖
          </h2>
          <p className="text-sm">
            Our family story begins here ✨
          </p>
        </motion.div>

      </div>

      {/* 👇 Hint */}
      {!open && (
        <motion.p
          className="absolute bottom-10 text-white/80"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Tap to open ✉️
        </motion.p>
      )}
    </div>
  );
}

export default WelcomeScreen;