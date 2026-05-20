import { useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { collection, addDoc } from "firebase/firestore";

import { storage, db } from "../firebase";

function UploadMedia() {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLoading(true);

    try {
      const storageRef = ref(storage, `family/${Date.now()}-${file.name}`);

      await uploadBytes(storageRef, file);

      const url = await getDownloadURL(storageRef);

      await addDoc(collection(db, "gallery"), {
        url,
        title: file.name,

        type: file.type.startsWith("video") ? "video" : "image",

        createdAt: Date.now(),
      });

      alert("Uploaded 🎉");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div
      className="
bg-white/10
p-6
rounded-3xl
backdrop-blur-lg
text-center
"
    >
      <h2 className="text-2xl font-bold mb-4">Upload Family Memory 📸</h2>

      <input
        type="file"
        accept="
image/*,
video/*
"
        onChange={handleUpload}
      />

      {loading && <p>Uploading...</p>}
    </div>
  );
}

export default UploadMedia;
