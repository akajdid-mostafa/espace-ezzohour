import React from "react";
import styles from "./banner.module.css";
import cn from "classnames";
import icons from "@/constants/icons";
import mock from "@/constants/mock";

export default function Banner({
  social_links = mock.social_links,
  className,
}) {
  return (
    <div className={cn(styles.banner, className)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <a className={styles.iconStroke}>{icons.Discount}</a>
          <p className={cn("paragraph-x-small", styles.text)}>
            Save up to 60% with code ECONOVA.
          </p>
        </div>

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
  );
}
