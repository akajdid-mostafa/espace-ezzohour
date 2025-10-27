"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";
import { Dropdown, TextArea, TextField } from "@/components/ui";
import Socials from "@/components/socials/socials";
import mock from "@/constants/mock";

export default function ContactForm({ options = mock.options }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://e-mail-dynamic.vercel.app/api/ezohour",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div >
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.wrapper}>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nom"
                className={styles.textfield}
                required
              />
              <TextField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={styles.textfield}
                required
              />
            </div>

            <div className={styles.wrapper1}>
              <TextField
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Numéro de téléphone"
                className={styles.textfield}
                required
              />
            </div>

            <TextArea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Votre message"
              className={styles.textarea}
              required
            />

            {submitStatus === "success" && (
              <div className={styles.success_message}>
                Message envoyé avec succès ! Nous vous contacterons bientôt.
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.error_message}>
                Erreur lors de l&apos;envoi du message. Veuillez réessayer.
              </div>
            )}

            <button
              type="submit"
              className={cn("button", styles.button)}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>

          <div className={cn("paragraph-medium", styles.protected)}>
            Ce site est protégé par CAPTCHA et la{" "}
            <a href="#" className={styles.link}>
              Politique de confidentialité
            </a>{" "}
            ainsi que les{" "}
            <a href="#" className={styles.link}>
              Conditions d&apos;utilisation
            </a>{" "}
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
            <a
              href="mailto:contact@espace-ezzohour.ma"
              className={cn("label-medium", styles.link)}
            >
              contact@ezzohour.ma
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Téléphone</div>
            <a
              href="tel:+212661918720"
              className={cn("label-medium", styles.link)}
            >
              +212 6 61 91 87 20
            </a>
            <a className={cn("label-medium", styles.link)}>
              Station Carburant: lun - dim: 24h/24
            </a>
            <a className={cn("label-medium", styles.link)}>
              Autres services: lun - dim: 07h - 00h
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>
              Suivez-nous
            </div>
            <Socials />
          </div>
          
        </div>
        
      </div>
    </div>
  );
}