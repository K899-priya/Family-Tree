import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState, useEffect } from "react";
import MemoryCards from "./MemoryCards";
import Timeline from "./Timeline";
import FamilyTree from "./FamilyTree";
import Gallery from "./Gallery";
import Footer from "./Footer";
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
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* 🌟 Glow Background */}
          <div className="absolute w-96 h-96 bg-pink-500 blur-3xl opacity-20 -z-10 left-1/2 -translate-x-1/2"></div>

          {/* 🧠 Heading */}
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Story 💖
          </h2>

          {/* 💎 Glass Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto text-center">
            {/* ✨ Typewriter */}
            <TypeAnimation
              sequence={[
                "We are not just a family...",
                1500,
                "We are a bond of love, trust, and memories ❤️",
                1500,
                "From laughter to struggles, we grow together 🌱",
                1500,
                "Every moment we share becomes a story ✨",
                1500,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-lg text-gray-200"
            />

            {/* 🧬 Memory Cards */}
            <MemoryCards />

            {/* 🎞 Timeline */}
            <Timeline />
          </div>

          {/* 📊 Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { label: "Members", value: "15+" },
              { label: "Memories", value: "100+" },
              { label: "Years Together", value: "30+" },
              { label: "Love", value: "∞ ❤️" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center"
                whileHover={{ scale: 1.1 }}
              >
                <h3 className="text-2xl font-bold text-pink-400">
                  {item.value}
                </h3>
                <p className="text-gray-300 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
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
      <motion.div {...handlers} className=" ..."></motion.div>
      <Footer />
    </motion.div>
  );
}

export default MainPage;
