"use client";

import React from "react";
import cn from "classnames";
import styles from "./faqs.module.css";
import Faq from "./faq/faq";
import Avatars from "@/components/avatars";
import Form from "./form";
import mock from "@/constants/mock";

export default function Faqs({ faqs = mock.faqs }) {
  const [activeFaq, setActiveFaq] = React.useState(null);

  const handleFaqClick = (id) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };

  return (
    <div >
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={styles.extended_faqs}>
            <div className={styles.faqs}>
              {faqs.map((faq) => (
                <Faq
                  key={faq.id}
                  {...faq}
                  activeFaq={activeFaq === faq.id}
                  handleFaqClick={() => handleFaqClick(faq.id)}
                  className={styles.faq}
                />
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.side_content}>
              <div className={cn("heading-5", styles.text)}>
                Vous n&apos;avez pas trouvé votre réponse ?
              </div>
              <div className={cn("paragraph-medium", styles.span)}>
                N&apos;hésitez pas à nous contacter
              </div>

              {/* <Avatars className={styles.avatar} /> */}


              <Form className={styles.form} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
