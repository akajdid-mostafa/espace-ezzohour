import React from "react";
import cn from "classnames";
import styles from "./about.module.css";
import icons from "@/constants/icons";

export default function About() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("label-medium")}>About us</div>

        <div className={styles.wrapper}>
          <div>
            <div className={cn("paragraph-medium", styles.description)}>
              Dive into a world where every device connects you not just to the
              digital realm but to a brighter, sustainable future. This is
              technology that doesn&apos;t just perform — it inspires a new way of
              living, where sustainability and sophistication go hand in hand.
            </div>
          </div>

          <button className={cn("button-stroke", styles.button)}>
            Our story {icons.ArrowRight}
          </button>
        </div>
      </div>
    </div>
  );
}
