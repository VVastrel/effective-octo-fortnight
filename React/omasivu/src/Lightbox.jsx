function Lightbox({ image, onClose }) {
  console.log("Lightboxin kuva (prop):", image); // Tarkistetaan, tuleeko oikea kuva

  if (!image) return null; // Jos kuva puuttuu, ei renderöidä mitään

  return (
    <div className="lightbox" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="lightbox-content" src={image} alt="Gallery preview" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Lightbox;
