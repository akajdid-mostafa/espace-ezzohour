import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("hero-2", styles.title)}>Venez Nous Voir﻿</div>
            <div className={cn("paragraph-x-large", styles.subtitle)}>
            On vous attend à Tanger, il suffit de passer !﻿
            </div>
            <Link
              href="/products/terra-tunes"
              className={cn("button", styles.button)}
            >
              Où nous trouver﻿
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
