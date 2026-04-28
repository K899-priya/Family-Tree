import { useState } from "react";
import { motion } from "framer-motion";

function MemoryCards() {
  const [flipped, setFlipped] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const memories = [
    {
      front: "First Family Trip 🌴",
      images: ["/g1.jpg", "/g2.jpg", "/g3.jpg"],
    },
    {
      front: "Festival Celebration 🎉",
      images: ["/g4.jpg", "/g5.jpg"],
    },
  ];

  const next = () => {
    setImgIndex((prev) =>
      prev === activeGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setImgIndex((prev) =>
      prev === 0 ? activeGallery.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="mt-12 grid md:grid-cols-2 gap-10">

      {memories.map((m, i) => (
        <motion.div
          key={i}
          style={{ perspective: 1200 }}
          className="cursor-pointer"
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          <motion.div
            className="relative w-full h-48 rounded-2xl"
            animate={{ rotateY: flipped === i ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* FRONT */}
            <div className="absolute w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-lg text-white rounded-2xl">
              {m.front}
            </div>

            {/* BACK */}
            <div
              className="absolute w-full h-full flex flex-col items-center justify-center bg-pink-500/20 backdrop-blur-lg text-white rounded-2xl"
              style={{ transform: "rotateY(180deg)" }}
            >
              <p>{m.back}</p>

              {/* 🔥 OPEN GALLERY BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveGallery(m);
                  setImgIndex(0);
                }}
                className="mt-3 bg-pink-500 px-3 py-1 rounded"
              >
                View Memories 📸
              </button>
            </div>

          </motion.div>
        </motion.div>
      ))}

      {/* 🎬 MINI GALLERY MODAL */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50">

          {/* Close */}
          <button
            onClick={() => setActiveGallery(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✖
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-5 text-white text-3xl"
          >
            ⬅
          </button>

          {/* Image */}
          <motion.img
            key={imgIndex}
            src={activeGallery.images[imgIndex]}
            className="max-h-[80vh] rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-5 text-white text-3xl"
          >
            ➡
          </button>

        </div>
      )}

    </div>
  );
}

export default MemoryCards;