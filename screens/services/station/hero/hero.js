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
              Station-Service
            </div>
            <div className={cn("hero", styles.title)}>
              Carburants de qualité & Services B2B
            </div>
            <div className={cn("paragraph-large", styles.description)}>
              Découvrez notre station-service moderne avec gestion de flottes B2B, 
              boutique annexe et programme de fidélité unifié. Chaque plein vous 
              rapproche de récompenses exclusives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
