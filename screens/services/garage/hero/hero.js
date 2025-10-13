import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("hero", styles.title)}>Garage & Maintenance</div>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            Prenez soin de votre véhicule avec nos services de garage professionnels. 
            Entretien, vidange, pneus et réparations par nos techniciens qualifiés.
          </div>
        </div>
      </div>
    </div>
  );
}
