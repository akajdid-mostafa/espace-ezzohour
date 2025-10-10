"use client";

import React from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import icons from "@/constants/icons";
import mock from "@/constants/mock";
import Category from "@/components/category";

export default function Categories({ collections = mock.collections }) {
  const categoriesRef = React.useRef(null);
  const [showLeftBtn, setShowLeftBtn] = React.useState(false);
  const [showRightBtn, setShowRightBtn] = React.useState(false);

  const checkScrollPosition = () => {
    if (!categoriesRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;

    setShowLeftBtn(scrollLeft > 0);
    setShowRightBtn(scrollLeft + clientWidth < scrollWidth);
  };

  React.useEffect(() => {
    const element = categoriesRef.current;
    element.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => {
      element.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToCategory = (index) => {
    const children = categoriesRef.current?.children;
    children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.btns}>
          <button
            className={cn(styles.skip_button, {
              [styles.hidden]: !showLeftBtn,
            })}
            onClick={() => scrollToCategory(0)}
          >
            {icons.ChevronLeft}
          </button>

          <button
            className={cn(styles.skip_button, {
              [styles.hidden]: !showRightBtn,
            })}
            onClick={() => scrollToCategory(collections.length - 1)}
          >
            {icons.ChevronRight}
          </button>
        </div>

        <div ref={categoriesRef} className={styles.categories}>
          {collections.map((category) => (
            <Category
              {...category}
              key={category.id}
              className={styles.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
