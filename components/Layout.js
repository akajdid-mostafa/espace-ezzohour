"use client";

import React from "react";
import Header from "./header";
import Support from "./support";
import Footer from "./footer";
import Subscribe from "./subscribe";

export default function Layout({ children }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const initialVisit = !localStorage.getItem("visited");

      if (initialVisit) {
        setVisible(true);
        localStorage.setItem("visited", "true");
      }
    }
  }, []);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVisible(true);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Header />
      {visible && <Subscribe visible={visible} handleClose={handleClose} />}

      {children}

      <Support />
      <Footer />
    </>
  );
}
