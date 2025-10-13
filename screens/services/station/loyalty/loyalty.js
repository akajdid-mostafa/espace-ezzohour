import React from "react";
import cn from "classnames";
import styles from "./loyalty.module.css";
import icons from "@/constants/icons";

export default function Loyalty() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={cn("label-medium", styles.text)}>Programme de Fidélité</div>
            <div className={cn("heading-3", styles.title)}>
              Cumulez des points sur chaque plein
            </div>
            <div className={cn("paragraph-medium", styles.description)}>
              Chaque MAD dépensé à la station-service vous rapporte 1 point. 
              Échangez vos points contre des récompenses exclusives : lavages gratuits, 
              repas au restaurant, produits de la supérette ou services du garage.
            </div>
            
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>{icons.Check}</div>
                <span>1 MAD = 1 point sur tous les carburants</span>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>{icons.Check}</div>
                <span>Points cumulables avec tous nos services</span>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>{icons.Check}</div>
                <span>Récompenses exclusives et personnalisées</span>
              </div>
            </div>

            <button className={cn("button", styles.button)}>
              Rejoindre le programme {icons.ArrowRight}
            </button>
          </div>
          
          <div className={styles.visual}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>Carte Fidélité</div>
                <div className={styles.cardSubtitle}>Espace Ezzohour</div>
              </div>
              <div className={styles.points}>
                <div className={styles.pointsLabel}>Points disponibles</div>
                <div className={styles.pointsValue}>2,450</div>
              </div>
              <div className={styles.rewards}>
                <div className={styles.reward}>1 lavage gratuit</div>
                <div className={styles.reward}>2 repas offerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
