import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 text-white"
    >
      {/* 🌌 Glow */}
      <div className="absolute w-72 h-72 bg-pink-500 blur-3xl opacity-20 bottom-0 left-10"></div>

      <div className="relative backdrop-blur-lg bg-white/10 border-t border-white/20 px-6 py-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

          <div>
            <h2 className="text-xl font-bold mb-3">Our Family 💖</h2>
            <p className="text-gray-300 text-sm">
              A place where love lives forever ✨
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Location 📍</h2>
            <p className="text-gray-300 text-sm">
              Patratoli, Lohardaga, Jharkhand, India 🇮🇳
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Contact 📞</h2>
            <p className="text-gray-300 text-sm">family@email.com</p>
          </div>

        </div>

        <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Our Family ❤️
        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;