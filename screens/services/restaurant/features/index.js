import React from "react";
import cn from "classnames";
import styles from "./features.module.css";

export default function Features() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("heading-2", styles.title)}>Nos Services</div>
          <div className={cn("paragraph-large", styles.subtitle)}>
            Profitez de notre terrasse agréable et de nos services de qualité
          </div>
        </div>
      </div>
    </div>
  );
}
