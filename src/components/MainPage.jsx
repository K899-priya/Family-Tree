import { motion } from "framer-motion";
import FamilyTree from "./FamilyTree";

function MainPage() {
  return (
    <motion.div
      className="bg-pink-50 min-h-screen p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 🎵 Background Music */}
      <audio autoPlay loop>
        <source src="/Music.mp3" type="audio/mpeg" />
      </audio>

      {/* Anime Character Section */}
      <div className="flex flex-col items-center text-center">
        <motion.img
          src="https://i.pinimg.com/originals/5f/0e/7d/5f0e7d8c6f7c9c0f5a8c1f5d5c0f0d8a.png"
          alt="anime"
          className="w-40 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <h2 className="text-3xl font-bold">Hello! Welcome to Our Family 👋</h2>

        <p className="text-gray-600 mt-2">I'm your virtual guide ✨</p>
      </div>

      {/* Sections */}
      <div className="mt-10 space-y-16">
        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-gray-600 mt-2">
            We are a loving family full of memories and happiness ❤️
          </p>
        </section>

        {/* Members */}
        <section>
          <h2 className="text-2xl font-semibold">Family Members</h2>
          <p className="text-gray-600 mt-2">Father, Mother, and Me 😄</p>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <p className="text-gray-600 mt-2">
            Beautiful memories captured forever 📸
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Family Tree 🌳
          </h2>
          <FamilyTree />
        </section>
      </div>
    </motion.div>
  );
}

export default MainPage;
