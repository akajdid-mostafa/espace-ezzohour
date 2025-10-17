import React from "react";
import cn from "classnames";
import styles from "./hero-services.module.css";

export default function HeroServices({
  subtitle = "À propos d'Espace Ezzohour",
  title = "L'écosystème commercial connecté de demain",
  backgroundImage = "/images/sliders/3.jpg"
}) {
  return (
    <div 
      className={cn("section", styles.section)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              {subtitle}
            </div>
            <div className={cn("hero-2", styles.title)}>
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
