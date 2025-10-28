import React from "react";
import cn from "classnames";
import styles from "./responsive-design.module.css";
import icons from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";

export default function ResponsiveDesign({
  image = {
    src: "/images/espace/station-carburant.webp",
    alt: "Station Carburant",
    width: 500,
    height: 400
  },
  icon = {
    src: "/images/espace/station-carburant-icon.svg",
    alt: "Station Carburant Icon",
    width: 44,
    height: 44
  },
  title = "Station Carburant",
  subtitle = "Au sein du complexe Espaces Ezzohour, profitez d'une station Afriquia moderne pour un plein rapide, carburants de qualité, et service ouvert 24h/24.",
  href = "/station-carburant",
  className = "",
  reverse = false
}) {
  return (
    <div className={cn("section", styles.section, className)}>
      <div className={cn("container")}>
        <div className={cn(styles.content, { [styles.reverse]: reverse })}>
          <Image
            src={image.src}
            alt={image.alt}
            className={styles.image}
            width={image.width}
            height={image.height}
          />

          <div className={styles.heading}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className={styles.icon_image}
            />
            <div className={cn("heading-3", styles.title)}>
              <Link href={href}>
                {title}
              </Link>
            </div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
