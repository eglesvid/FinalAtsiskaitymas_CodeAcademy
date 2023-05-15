import React, { useState } from "react";
import styles from "./Gallery.module.css";

const images = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d1bfa592687519.5e5182cf4dd80.jpg",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaign",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ad022592687519.5e5182cf4cea1.jpg",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaign",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9124f592687519.5e5182cf4e3e9.jpg",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaign",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/cf3bd992687519.5e5182cf4d60c.jpg",
    title: "Golden Pothos",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaign",
  },
];

function GalleryItem({ src, category, subtitle, title, updateActiveImage, index }) {
  const handleClick = () => {
    updateActiveImage(index);
  };

  return (
    <div className={styles.galleryItemWrapper} onClick={handleClick}>
      <div className={styles.galleryItem}>
        <div className={styles.galleryItemInfo}>
          <h1 className={styles.galleryInfoTitle}>{title}</h1>
          <h2 className={styles.galleryInfoSubtitle}>{subtitle}</h2>
          <p className={styles.galleryInfoCategory}>{category}</p>
        </div>
        <div className={styles.galleryItemImage} style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(0); // Changed initial active image to 0

  return (
    <section className={styles.galleryWrap}>
      <div className={styles.gallery}>
        <div className={styles.galleryCounter}>
          <span>{activeImage + 1}</span> {/* Added +1 to display correct image number */}
          <span>/</span>
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={setActiveImage} // Changed to directly set the active image index
          />
        ))}
      </div>
    </section>
  );
}
