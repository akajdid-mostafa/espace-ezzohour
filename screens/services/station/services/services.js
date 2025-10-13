import React from "react";
import cn from "classnames";
import styles from "./services.module.css";
import icons from "@/constants/icons";

const services = [
  {
    id: 1,
    icon: icons.Gas,
    title: "Carburants Premium",
    description: "Essence et diesel de qualité supérieure pour tous vos véhicules. Prix compétitifs et qualité garantie.",
  },
  {
    id: 2,
    icon: icons.Truck,
    title: "Gestion Flottes B2B",
    description: "Solutions complètes pour la gestion de vos flottes d'entreprise avec suivi en temps réel et facturation centralisée.",
  },
  {
    id: 3,
    icon: icons.Shop,
    title: "Boutique Annexée",
    description: "Produits d'entretien automobile, snacks, boissons et articles de première nécessité. Tout ce dont vous avez besoin.",
  },
  {
    id: 4,
    icon: icons.Card,
    title: "Paiement Connecté",
    description: "Système de paiement intégré qui reconnaît automatiquement votre carte de fidélité et cumule vos points.",
  },
];

export default function Services() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("label-medium", styles.text)}>Nos Services</div>
          <div className={cn("heading-3", styles.title)}>
            Une station-service connectée à votre écosystème
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Chaque service de notre station est intégré à notre système ERP centralisé, 
            vous permettant de cumuler des points sur tous vos achats et de profiter 
            d'une expérience fluide et connectée.
          </div>
        </div>

        <div className={styles.services}>
          {services.map((service) => (
            <div key={service.id} className={styles.service}>
              <div className={styles.icon}>{service.icon}</div>
              <div className={styles.content}>
                <h3 className={cn("heading-5", styles.serviceTitle)}>
                  {service.title}
                </h3>
                <p className={cn("paragraph-small", styles.serviceDescription)}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
