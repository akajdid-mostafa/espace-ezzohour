import React from "react";
import cn from "classnames";
import styles from "./intro-services.module.css";
import icons from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";

export default function IntroServices({
  icon = {
    src: "/images/espace/station-carburant-icon.svg",
    alt: "Service Icon",
    width: 48,
    height: 48
  },
  image = {
    src: "/images/sliders/2.jpg",
    alt: "Service Image",
    width: 600,
    height: 400
  },
  title = "Votre partenaire de route",
  descriptions = [
    "Description par défaut du service."
  ],
  buttonText = "Notre Histoire",
  buttonIcon = icons.ArrowRight,
  buttonLink="/contact-us"
}) {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
            />
          </div>
          <Image
            className={styles.image}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>
            {title}
          </div>
          {descriptions.map((description, index) => (
            <div key={index} className={cn("paragraph-medium", styles.description)}>
              {description}
            </div>
          ))}
           <Link href={buttonLink}>
          <button  className={cn("button", styles.button)}>
            {buttonText} {buttonIcon}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
