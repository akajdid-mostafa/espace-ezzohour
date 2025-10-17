import React from "react";
import cn from "classnames";
import styles from "./features.module.css";
import icons from "@/constants/icons";
import Feature from "@/components/feature";

const features = [
  {
    id: 1,
    image: "/images/sliders/2.jpg",
    title: "Pause Gourmande",
    subtitle: "Régalez-vous sur place",
  },
  {
    id: 2,
    image: "/images/sliders/3.jpg",
    title: "Service Auto",
    subtitle: "Votre voiture impeccable",
  },
  {
    id: 3,
    image: "/images/sliders/6.jpg",
    title: "Espace Enfants",
    subtitle: "Leur bonheur, votre pause",
  },
  {
    id: 4,
    image: "/images/sliders/supette.png",
    title: "Courses Express",
    subtitle: "L'essentiel à portée de main",
  },
];

export default function Features() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div className={cn("heading-4", styles.title)}>
          Tout pour vous. Au même endroit.
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Nous vous simplifions la vie. Trouvez tout ce dont vous avez besoin
            pour une journée sans stress : un repas délicieux, vos courses, et
            des services pour votre voiture. Les enfants ont aussi leur propre
            espace de jeux. Nous avons tout réuni pour vous faire gagner du
            temps et de la sérénité.
          </div>
          <a href="/contact-us" className={cn("button-stroke", styles.button)}>
          Découvrez nos services  {icons.ArrowRight}
          </a>
        </div>

        <div className={styles.features}>
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} className={styles.feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
