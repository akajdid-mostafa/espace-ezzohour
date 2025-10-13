"use client";

import React from "react";
import cn from "classnames";
import styles from "./marquee.module.css";
import Animation from "react-fast-marquee";

export default function Marquee() {
  const texts = ["Station Carburant", "Café Restaurant", "Superette", "Lavage Auto", "Garage Maintenance", "Espace Jeux", "Parking"];

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn(styles.container)}>
        <Animation gradient={false} speed={70} pauseOnHover={true}>
          {texts.map((text, index) => (
            <div key={index} className={cn("heading-1", styles.title)}>
              {text}
              <span className={cn("heading-1", styles.circle)}></span>
            </div>
          ))}
        </Animation>
      </div>
    </div>
  );
}
