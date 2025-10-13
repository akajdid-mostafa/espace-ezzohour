import React from "react";
import cn from "classnames";
import styles from "./compare.module.css";
import CompareSlider from "@/components/compare-slider";

export default function Compare() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("paragraph-medium", styles.subtitle)}>
          Votre arrêt sécurisé, jour et nuit
        </div>
        <div className={cn("heading-4", styles.title)}>
          Une destination accueillante, à toute heure
        </div>

        <CompareSlider />
      </div>
    </div>
  );
}
