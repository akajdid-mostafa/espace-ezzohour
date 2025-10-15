import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              À propos d&apos;Espace Ezzohour
            </div>
            <div className={cn("hero", styles.title)}>
              L&apos;écosystème commercial connecté de demain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
