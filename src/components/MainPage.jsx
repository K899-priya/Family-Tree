import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState, useEffect } from "react";
import FamilyTree from "./FamilyTree";
import Gallery from "./Gallery";
import { useSwipeable } from "react-swipeable";

function MainPage() {
  const { scrollYProgress } = useScroll();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const handlers = useSwipeable({
    onSwipedDown: () => window.scrollBy({ top: 500, behavior: "smooth" }),
    onSwipedUp: () => window.scrollBy({ top: -500, behavior: "smooth" }),
    trackMouse: true,
  });

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      className="min-h-screen bg-linear-to-br from-purple-900 via-pink-800 to-black text-white overflow-hidden relative p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 🎯 Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 🌌 Glow Effects */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      {/* 🎵 Music */}
      <audio ref={audioRef} loop>
        <source src="/Music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-pink-500 px-4 py-2 rounded-xl shadow-lg z-50"
      >
        {playing ? "🔊" : "🔇"}
      </button>

      {/* 🤖 Anime Section */}
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.img
          src="/namas.jpg"
          alt="anime"
          className="w-48 mb-4 drop-shadow-[0_0_30px_rgba(255,0,150,0.7)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* 💎 Glass UI */}
        <div className="mt-4 backdrop-blur-lg bg-white/10 border border-white/20 px-6 py-4 rounded-2xl shadow-xl">
          <TypeAnimation
            sequence={[
              "Hello 👋",
              1000,
              "Welcome to Our Family 💖",
              1000,
              "Scroll to explore our story ✨",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl font-bold"
          />
        </div>
      </div>

      {/* 📜 Sections */}
      <div className="mt-16 space-y-20 relative z-10">
        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300">
            We are a loving family full of memories and happiness ❤️
          </p>
        </motion.section>

        {/* Members */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Family Members</h2>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Gallery 📸</h2>

          <Gallery />
        </motion.section>

        {/* 🌳 Tree */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Family Tree 🌳
          </h2>

          <FamilyTree />
        </motion.section>
      </div>
      <motion.div {...handlers} className="min-h-screen ..."></motion.div>
    </motion.div>
  );
}

export default MainPage;
