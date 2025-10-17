import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";
import Link from "next/link";
import mock from "@/constants/mock";
import SubscribeForm from "../subscribe-form";
import icons from "@/constants/icons";
import { TextField } from "../ui";

export default function Footer({
  links = mock.links,
  sublinks = mock.sublinks,
  social_links = mock.social_links,
}) {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div>
            <div className={cn("subheading-x-large", styles.title)}>
              Abonnez-vous à notre newsletter
            </div>
            <form className={styles.form}>
              <div className={styles.content}>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse e-mail"
                  className={styles.textfield}
                />
                <button className={styles.subscribe_button}>
                  {icons.ArrowRight}
                </button>
              </div>

              <div className={cn("paragraph-x-small", styles.subscribe_text)}>
                En vous abonnant, vous acceptez notre utilisation responsable
                des données.
              </div>
            </form>{" "}
          </div>

          <div className={cn("label-x-small", styles.copyright)}>
            © 2024 Espace Ezzohour. Powered by{" "}
            <a
              href="https://dynamicimpact.ma"
              target="_blank"
              rel="noreferrer"
              className={styles.author}
            >
              Dynamic Impact
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrapper}>
            <div className={styles.links}>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn("heading-5", styles.link)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className={styles.links}>
              {sublinks.map((sublink) => (
                <Link
                  key={sublink.id}
                  href={sublink.href}
                  className={cn("paragraph-medium", styles.sublink)}
                >
                  {sublink.title}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.wrapper}>
            {/* <Link
              href="/privacy-policy"
              className={cn("label-x-small", styles.text)}
            >
              Privacy Policy
            </Link> */}

            <div className={styles.socials}>
              {social_links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
