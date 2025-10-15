import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import icons from "@/constants/icons";
import Image from "next/image";

export default function Intro() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <Image
              src="/images/espace/station-carburant-icon.svg"
              alt="Station Carburant Icon"
              width={48}
              height={48}
            />
          </div>
          <Image
            className={styles.image}
            src="/images/sliders/2.jpg"
            alt="Écosystème commercial connecté"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>
            Votre partenaire de route
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            La station-service Afriquia Espaces Ezzohour à Tanger vous accueille
            24h/24 et 7j/7 avec un service rapide, fiable et adapté à tous les
            véhicules. Que vous soyez professionnel, particulier ou simplement
            de passage, chaque arrêt devient une pause efficace et sereine.
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Nous proposons de l’essence et du gasoil Afriquia, reconnus pour
            leur qualité et leur performance, ainsi qu’une sélection Afriquia
            Lubrifiants pour accompagner l’entretien de votre véhicule. L’équipe
            est professionnelle, le service est fluide, et les avantages
            d’Afriquia sont là pour simplifier vos trajets à Tanger et partout
            au Maroc.
          </div>

          <button className={cn("button", styles.button)}>
            Notre Histoire {icons.ArrowRight}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
