import { useState } from "react";
import { motion } from "framer-motion";

const memories = [
  {
    front: "First Family Trip 🌴",
    back: "We traveled together and created unforgettable memories ❤️",
  },
  {
    front: "Festival Celebration 🎉",
    back: "Celebrated with joy, lights, and happiness ✨",
  },
  {
    front: "Childhood Moments 👶",
    back: "Innocent smiles and playful days 💖",
  },
  {
    front: "Together Forever 🤝",
    back: "No matter what, we stand together 💫",
  },
];

function MemoryCards() {
  const [flipped, setFlipped] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {memories.map((m, i) => (
        <motion.div
          key={i}
          className="cursor-pointer perspective"
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          <motion.div
            className="relative w-full h-40"
            animate={{ rotateY: flipped === i ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* FRONT */}
            <div className="absolute w-full h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center text-white text-lg font-semibold">
              {m.front}
            </div>

            {/* BACK */}
            <div
              className="absolute w-full h-full bg-pink-500/20 backdrop-blur-lg border border-white/20 rounded-2xl flex items-center justify-center text-white text-sm px-4"
              style={{ transform: "rotateY(180deg)" }}
            >
              {m.back}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default MemoryCards;