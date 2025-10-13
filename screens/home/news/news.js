import React from "react";
import cn from "classnames";
import styles from "./news.module.css";
import icons from "@/constants/icons";
import { BlogPost, FeaturedPost } from "@/components/blog-posts";
import mock from "@/constants/mock";

export default function News({ blog_posts = mock.blog_posts }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.wrapper}>
          <div className={cn("heading-3", styles.title)}>Galerie du Complexe</div>
          <button className={cn("button-stroke", styles.button)}>
            {icons.Eye} Voir toutes les photos
          </button>
        </div>

        <div className={styles.news}>
          <div className={styles.col}>
            <div className={styles.card}>
              <img src="/images/gallery/3.jpg" className={styles.image} />
            </div>
          </div>
          <div className={styles.col}>
            <div
              className={styles.card1}
              style={{
                backgroundImage: "url(/images/gallery/8.jpg)",
              }}
            ></div>
          </div>
          <div className={styles.col}>
            <div className={styles.card}>
              <img src="/images/gallery/12.jpg" className={styles.image} />
            </div>
          </div>
        </div>
        <div className={styles.news}>
          <div className={styles.col}>
            <div className={styles.card}>
              <img src="/images/gallery/4.jpg" className={styles.image} />
            </div>
          </div>
          <div className={styles.col}>
            <div
              className={styles.card1}
              style={{
                backgroundImage: "url(/images/gallery/5.jpg)",
              }}
            ></div>
          </div>
          <div className={styles.col}>
            <div className={styles.card}>
              <img src="/images/gallery/6.jpg" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
