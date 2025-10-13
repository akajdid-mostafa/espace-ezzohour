import React from "react";
import cn from "classnames";
import styles from "./loyalty.module.css";

export default function Loyalty() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("heading-2", styles.title)}>Programme de Fidélité</div>
          <div className={cn("paragraph-large", styles.subtitle)}>
            Gagnez des points à chaque visite et profitez d'avantages exclusifs
          </div>
        </div>
      </div>
    </div>
  );
}
