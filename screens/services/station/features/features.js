import React from "react";
import cn from "classnames";
import styles from "./features.module.css";

const features = [
  {
    id: 1,
    title: "Système ERP Intégré",
    description: "Notre station-service est connectée à l'écosystème Espace Ezzohour, permettant une gestion centralisée et une expérience client unifiée.",
  },
  {
    id: 2,
    title: "Paiement Automatique",
    description: "Reconnaissance automatique de votre carte de fidélité. Cumulez des points instantanément sur chaque achat de carburant.",
  },
  {
    id: 3,
    title: "Gestion Flottes B2B",
    description: "Solutions complètes pour entreprises : suivi des consommations, facturation centralisée et rapports détaillés.",
  },
  {
    id: 4,
    title: "Boutique Connectée",
    description: "Produits d'entretien, snacks et boissons. Chaque achat en boutique enrichit également votre programme de fidélité.",
  },
];

export default function Features() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("label-medium", styles.text)}>Fonctionnalités</div>
          <div className={cn("heading-3", styles.title)}>
            Technologie au service de votre expérience
          </div>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={feature.id} className={styles.feature}>
              <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
              <div className={styles.content}>
                <h3 className={cn("heading-5", styles.featureTitle)}>
                  {feature.title}
                </h3>
                <p className={cn("paragraph-small", styles.featureDescription)}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
