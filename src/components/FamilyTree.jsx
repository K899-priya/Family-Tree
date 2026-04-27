// components/FamilyTree.jsx

import familyTree from "../data/FamilyTree";
import TreeNode from "./TreeNode";
import { useState } from "react";

function FamilyTree() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="text-center mt-20">

      {/* Grandparents */}
      <div className="flex justify-center gap-10">
        <TreeNode person={familyTree} onClick={setSelected} />
        <TreeNode person={familyTree.spouse} onClick={setSelected} />
      </div>

      {/* Children Row */}
      <div className="flex justify-center gap-16 mt-10">
        {familyTree.children.map((child, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* Son + Wife */}
            <div className="flex gap-4">
              <TreeNode person={child} onClick={setSelected} />
              <TreeNode person={child.spouse} onClick={setSelected} />
            </div>

            {/* Grandchildren */}
            <div className="flex gap-4 mt-4">
              {child.children.map((c, idx) => (
                <TreeNode key={idx} person={c} onClick={setSelected} />
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center w-80">

            <img
              src={selected.img}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl font-bold">{selected.name}</h2>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
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