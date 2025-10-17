import React from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";
import { Dropdown, TextArea, TextField } from "@/components/ui";
import Socials from "@/components/socials/socials";
import mock from "@/constants/mock";

export default function ContactForm({ options = mock.options }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <form className={styles.form}>
            <div className={styles.wrapper}>
              <TextField placeholder="Nom" className={styles.textfield} />
              <TextField placeholder="Email" className={styles.textfield} />
            </div>

            <div className={styles.wrapper1}>
              <TextField
                placeholder="Numéro de téléphone"
                className={styles.textfield}
              />
            </div>

            <TextArea placeholder="Votre message" className={styles.textarea} />

            <button className={cn("button", styles.button)}>Envoyer</button>
          </form>

          <div className={cn("paragraph-medium", styles.protected)}>
            Ce site est protégé par reCAPTCHA et la 
            <a className={styles.link}>Politique de Confidentialité</a>
             et les 
            <a className={styles.link}>Conditions d&apos;Utilisation</a>
             de Google s&apos;appliquent.
          </div>
        </div>
        <div className={styles.side_content}>
          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Adresse</div>
            <a className={cn("label-medium", styles.link)}>
              Espace Ezzohour, Tanger, Maroc
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Email</div>
            <a href="mailto:contact@espace-ezzohour.ma" className={cn("label-medium", styles.link)}>
            contact@espace-ezzohour.ma
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Téléphone</div>
            <a href="tel:+212661918720" className={cn("label-medium", styles.link)}>
            +212 6 61 91 87 20
            </a>
            <a  className={cn("label-medium", styles.link)}>
            Station Carburant: lun - dim: 24h/24
            </a>
            <a  className={cn("label-medium", styles.link)}>
              Autres services: lun - dim: 07h - 00h
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Suivez-nous</div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
