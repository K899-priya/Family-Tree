// components/FamilyTree.jsx

import familyTree from "../data/FamilyTree";
import TreeNode from "./TreeNode";
import { useState } from "react";

function FamilyTree() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative text-center mt-20">

      {/* 🌳 SVG CONNECTING LINES */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">

        {/* Grandparents to children */}
        <line x1="50%" y1="80" x2="20%" y2="200" stroke="white" strokeWidth="2"/>
        <line x1="50%" y1="80" x2="50%" y2="200" stroke="white" strokeWidth="2"/>
        <line x1="50%" y1="80" x2="80%" y2="200" stroke="white" strokeWidth="2"/>

      </svg>

      {/* 👴 Grandparents */}
      <div className="flex justify-center gap-12 relative z-10">
        <TreeNode person={familyTree} onClick={setSelected} />
        <TreeNode person={familyTree.spouse} onClick={setSelected} />
      </div>

      {/* 👨‍👩‍👧 Children Row */}
      <div className="flex justify-center gap-20 mt-20 relative z-10">
        {familyTree.children.map((child, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* Couple */}
            <div className="flex gap-4">
              <TreeNode person={child} onClick={setSelected} />
              <TreeNode person={child.spouse} onClick={setSelected} />
            </div>

            {/* Children */}
            <div className="flex gap-4 mt-6">
              {child.children.map((c, idx) => (
                <TreeNode key={idx} person={c} onClick={setSelected} />
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* 💎 CINEMATIC MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">
          
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl text-white text-center w-80 shadow-xl">

            <img
              src={selected.img}
              alt={selected.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-pink-400"
            />

            <h2 className="text-xl font-bold">{selected.name}</h2>

            {/* Optional extra info */}
            {selected.role && (
              <p className="text-gray-300 mt-1">{selected.role}</p>
            )}

            <button
              onClick={() => setSelected(null)}
              className="mt-4 bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default FamilyTree;