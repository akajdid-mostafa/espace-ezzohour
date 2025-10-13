import React from "react";
import cn from "classnames";
import styles from "./values.module.css";
import Value from "./value";
import mock from "@/constants/mock";

export default function Values({ values = mock.values }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("label-medium", styles.text)}>Nos valeurs</div>
          <div className={cn("heading-3", styles.title)}>Ancré dans l'excellence</div>
          <div className={cn("paragraph-medium", styles.description)}>
            Nos valeurs sont inspirées par l'innovation technologique et l'excellence 
            opérationnelle. Nous nous engageons pour la connectivité, l'intégration 
            et l'expérience client 360°, garantissant que chaque interaction enrichit 
            votre parcours et votre programme de fidélité unifié.
          </div>
        </div>

        <div className={styles.values}>
          {values.map((value) => (
            <Value key={value.id} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
}
