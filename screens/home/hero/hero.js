"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Slide from "./slide";
import mock from "@/constants/mock";

export default function Hero({ slides = mock.slides }) {
  const [[active, direction], setActive] = React.useState([0, 0]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
    }),
    active: {
      zIndex: 0,
      x: 0,
    },

    exit: (direction) => ({
      zIndex: 1,
      x: direction < 0 ? 1000 : -1000,
    }),
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = React.useCallback(
    (offset, velocity) => Math.abs(offset) * velocity,
    []
  );

  const changeSlide = React.useCallback((increment) => {
    setActive((current) => {
      const nextIndex = wrap(0, slides.length, current[0] + increment);
      return [nextIndex, increment];
    });
  }, [slides.length]);

  const nextSlide = () => changeSlide(1);
  const prevSlide = () => changeSlide(-1);

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <motion.div className={styles.slides}>
          {slides.map((slide, index) => (
            <AnimatePresence key={index} initial={false} custom={direction}>
              <Slide
                key={index}
                custom={direction}
                slides={slides}
                active={active}
                variants={variants}
                transition={transition}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide();
                  }
                }}
                setActive={setActive}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
              />
            </AnimatePresence>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
