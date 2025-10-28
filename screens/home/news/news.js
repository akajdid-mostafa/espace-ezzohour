import React from "react";
import cn from "classnames";
import styles from "./news.module.css";
import icons from "@/constants/icons";
import Image from "next/image";

export default function News() {
  // Exemple d'images (tu peux remplacer par tes vraies images)
  const images = [
    "/images/gallery/1.webp",
    "/images/gallery/2.webp",
    "/images/gallery/3.webp",
    "/images/gallery/4.webp",
    "/images/gallery/5.webp",
    "/images/gallery/6.webp",
  ];

  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.wrapper}>
          <div className={cn("heading-3", styles.title)}>Galerie du Complexe</div>
          <button className={cn("button-stroke", styles.button)}>
            {icons.Eye} Voir toutes les photos
          </button>
        </div>

        {/* SECTION IMAGES */}
        <div className={styles.news}>
          {images.map((src, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                className={styles.image}
                width={500}      
                height={350}     
                quality={90}   
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
