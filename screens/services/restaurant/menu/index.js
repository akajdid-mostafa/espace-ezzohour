import React from "react";
import cn from "classnames";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("heading-2", styles.title)}>Notre Menu</div>
          <div className={cn("paragraph-large", styles.subtitle)}>
            Découvrez notre carte variée du petit-déjeuner au dîner
          </div>
        </div>
      </div>
    </div>
  );
}
