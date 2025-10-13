import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("heading-2", styles.title)}>
            {"Questions Fréquetes"}
          </div>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            Des questions sur le complexe ? Notre FAQ est là pour vous guider.
            Et si vous ne trouvez pas ce qu&apos;il vous faut, notre équipe est à
            votre écoute.
          </div>
        </div>
      </div>
    </div>
  );
}
