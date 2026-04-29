import { useState } from "react";

function ImageFallback({ src, alt = "", className }) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? "/default.png" : src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default ImageFallback;