import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              Restaurant Connecté
            </div>
            <div className={cn("hero", styles.title)}>
              Restauration Moderne & Technologique
            </div>
            <div className={cn("paragraph-large", styles.description)}>
              Savourez une expérience culinaire unique avec notre POS tactile, 
              plan de salle interactif et système d'affichage en cuisine. 
              Chaque repas enrichit votre programme de fidélité unifié.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
