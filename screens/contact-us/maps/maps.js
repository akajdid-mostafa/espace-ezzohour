import React from "react";
import cn from "classnames";
import styles from "./maps.module.css";

export default function Hero() {
  return (
    <div className={cn("section")} >
      <div className={cn("container")}>
        {/* Map Section */}
        <div className={styles.block}>
            {/* <div className={cn("paragraph-medium", styles.text)}>Localisation</div> */}
            <div className={styles.map_container}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18505.577216381913!2d-5.84861160900798!3d35.76265329108459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b870058e19eed%3A0xa292fd57b3b79595!2sEspace%20Ezzohour!5e0!3m2!1sfr!2sma!4v1761566922627!5m2!1sfr!2sma"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation Espace Ezzohour"
              ></iframe>
            </div>
          </div>
      </div>
    </div>
  );
}
