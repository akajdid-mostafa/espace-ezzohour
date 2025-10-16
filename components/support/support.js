import React from "react";
import cn from "classnames";
import styles from "./support.module.css";
import mock from "@/constants/mock";

export default function Support({ support = mock.support  ,data = [] }) {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.items}>
          {data?.map((item) => (
            <div className={styles.item} key={item.id}>
              {item.icon}
              <div className={cn("subheading-medium", styles.title)}>
                {item.title}
              </div>
              <div className={cn("paragraph-small", styles.subtitle)}>
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
