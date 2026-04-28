import { motion } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import galleryData from "../data/galleryData";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const next = () => {
    setSelectedIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white text-sm">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN SWIPE VIEW */}
      {selectedIndex !== null && (
        <div
          {...handlers}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✖
          </button>

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-5 text-white text-3xl"
          >
            ⬅
          </button>

          {/* Image */}
          <motion.img
            key={selectedIndex}
            src={galleryData[selectedIndex].img}
            className="max-h-[80vh] rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-5 text-white text-3xl"
          >
            ➡
          </button>

          {/* Caption */}
          <p className="absolute bottom-10 text-white text-center">
            {galleryData[selectedIndex].title}
          </p>
        </div>
      )}
    </div>
  );
}

export default Gallery;