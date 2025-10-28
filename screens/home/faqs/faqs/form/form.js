import React, { useState } from "react";
import cn from "classnames";
import styles from "./form.module.css";
import { TextArea, TextField } from "@/components/ui";
import Modal from "@/components/modal";

export default function Form({ className }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [modalInfo, setModalInfo] = useState({
    visible: false,
    message: "",
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setModalInfo({ visible: false, message: "", isError: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setModalInfo({
          visible: true,
          message: "Merci de nous avoir contactés !",
          isError: false,
        });
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        setModalInfo({
          visible: true,
          message: "Échec de l'envoi du message. Veuillez réessayer.",
          isError: true,
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setModalInfo({
        visible: true,
        message: "Une erreur s'est produite. Veuillez réessayer plus tard.",
        isError: true,
      });
    }
  };

  return (
    <>
      <form className={cn(styles.container, className)} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Numéro de téléphone"
          placeholder="Numéro de téléphone"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          label="Message"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={cn("button", styles.button)}>
          Envoyer un message
        </button>
      </form>
      <Modal visible={modalInfo.visible} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
          <p
            className={
              modalInfo.isError ? styles.errorMessage : styles.successMessage
            }
          >
            {modalInfo.message}
          </p>

          {!modalInfo.isError && (
            <p className={styles.Message}>
              Votre message a été envoyé avec succès. Un membre de l&apos;équipe
              d&apos;Espace Ezzouhour prendra en charge votre demande et vous
              répondra dans les plus brefs délais.
            </p>
          )}

          <button
            onClick={handleCloseModal}
            className={cn("button", styles.modalButton)}
          >
            OK
          </button>
        </div>
      </Modal>
    </>
  );
}
