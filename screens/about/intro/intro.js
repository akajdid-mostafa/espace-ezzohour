import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import icons from "@/constants/icons";

export default function Intro() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>{icons.Leaf}</div>
          <img
            className={styles.image}
            src="/images/stations.webp"
            alt="Écosystème commercial connecté"
          />
        </div>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>
            Connecté par la technologie
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Découvrez notre vision révolutionnaire : un écosystème commercial où 
            station-service, restaurant, supérette et garage fonctionnent comme un 
            seul organisme grâce à notre système ERP centralisé. Chaque service 
            enrichit l'expérience globale et votre programme de fidélité unifié.
          </div>

          <button className={cn("button", styles.button)}>
            Notre Histoire {icons.ArrowRight}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
