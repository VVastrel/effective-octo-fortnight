import  { useState } from "react";
import Lightbox from "./Lightbox";

// Tuo kuvat suoraan
import image0 from "./image0.jpg";

const images = [image0, image0, image0, image0, image0, image0, image0, image0];

function Gallery() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => {
    console.log("Avataan Lightbox kuvalla:", src);
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    console.log("Suljetaan Lightbox");
    setLightboxImage(null);
  };

  return (
    <section id="gallery">
      <h2>Galleria</h2>
      <div className="gallery">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Valokuva ${index + 1}`} 
            className="thumbnail"
            onClick={() => openLightbox(src)}
          />
        ))}
      </div>
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </section>
  );
}

export default Gallery;
