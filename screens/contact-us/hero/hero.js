import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("hero-2", styles.title)}>Contactez-nous</div>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            Nous sommes là pour vous aider. Pour toute question, suggestion ou
            information sur nos services.
          </div>
        </div>
      </div>
    </div>
  );
}
