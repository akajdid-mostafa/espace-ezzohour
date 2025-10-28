import React from "react";
import cn from "classnames";
import styles from "./about.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function About() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("label-medium")}>Espace Ezzohour</div>

        <div className={styles.wrapper}>
          <div>
            <div className={cn("paragraph-medium", styles.description)}>
              Espace Ezzohour est votre complexe multiservices moderne situé à
              Tanger, conçu pour simplifier votre quotidien. Ici, chaque détail
              compte. Que ce soit pour faire le plein, prendre un café,
              entretenir votre voiture ou partager un moment en famille, Espace
              Ezzohour vous accompagne à chaque instant. Carburant,
              restauration, supérette, espace enfants… tout est réuni pour
              rendre vos passages plus simples, plus agréables, et toujours
              utiles.
            </div>
          </div>
          <Link href="/contact-us" className={cn("button-stroke", styles.button)}>

          Contactez-nous {icons.ArrowRight}
          </Link>

          {/* <button className={cn("button-stroke", styles.button)}>
          Contactez-nous {icons.ArrowRight}
          </button> */}
        </div>
      </div>
    </div>
  );
}
