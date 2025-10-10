import React from "react";
import cn from "classnames";
import styles from "./review.module.css";
import icons from "@/constants/icons";
import Indicators from "@/components/indicators";

export default function Review({ reviews, active, setActive }) {
  return (
    <div className={styles.container}>
      {icons.Quotes}

      <div className={styles.heading}>
        <div className={cn("heading-4", styles.review)}>
          {reviews[active].review}
        </div>
        <div className={cn("paragraph-large", styles.reviewer)}>
          - {reviews[active].reviewer}
        </div>
      </div>

      <Indicators
        indicators={reviews}
        active={active}
        setActive={setActive}
        color={"var(--white)"}
      />
    </div>
  );
}
