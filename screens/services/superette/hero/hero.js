import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("hero", styles.title)}>Supérette</div>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            Trouvez tout ce dont vous avez besoin dans notre supérette : snacks, boissons, 
            produits essentiels et courses rapides au même endroit.
          </div>
        </div>
      </div>
    </div>
  );
}
