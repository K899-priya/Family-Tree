import { motion } from "framer-motion";

const timeline = [
  { year: "1972", text: "Our family journey began 💖" },
  { year: "1996,1997", text: "Welcomed new members Preeti and Gaurav 👶" },
  { year: "1999", text: "Welcomed new members Abhinav and Amit 👶" },
  { year: "2000", text: "Welcomed new member Priya 👶" },
    { year: "2002", text: "Welcomed new member Khushboo 👶" },
  { year: "2004", text: "Welcomed new member Shiwani 👶" },
  { year: "2020", text: "Celebrated milestones 🎉" },
  { year: "2025", text: "Still growing with love ❤️" },
];

function Timeline() {
  return (
    <div className="relative mt-16 max-w-2xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-1/2 w-1 bg-pink-500 h-full transform -translate-x-1/2"></div>

      {timeline.map((item, i) => (
        <motion.div
          key={i}
          className={`mb-10 flex ${
            i % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl w-60 text-white shadow-lg">
            <h3 className="text-pink-400 font-bold">{item.year}</h3>
            <p className="text-sm">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
