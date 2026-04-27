import { motion } from "framer-motion";

function TreeNode({ person, onClick }) {
  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => onClick(person)}
    >
      <motion.img
        src={person.img}
        alt={person.name}
        className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        whileTap={{ scale: 0.9 }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <span className="text-white text-sm font-semibold">
          {person.name}
        </span>
      </div>
    </div>
  );
}

export default TreeNode;