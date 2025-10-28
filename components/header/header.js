"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import icons from "@/constants/icons";
import Link from "next/link";
import Image from "next/image";
import Banner from "./banner";
import mock from "@/constants/mock";
import Socials from "../socials/socials";
import useCart from "@/store/useCart";

export default function Header({ header_links = mock.header_links }) {
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(false);
  const [searchModalVisible, setSearchModalVisible] = React.useState(false);
  const [cartModalVisible, setCartModalVisible] = React.useState(false);
  const { cartItems, isAdded, resetIsAdded } = useCart();

  React.useEffect(() => {
    if (isAdded) {
      setCartModalVisible(true);
      resetIsAdded();
    }
  }, [isAdded, resetIsAdded]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleHeader);
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  const disableScroll = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    if (visibleNav) {
      window.addEventListener("touchmove", disableScroll, { passive: false });
      window.addEventListener("wheel", disableScroll, { passive: false });
    } else {
      window.removeEventListener("touchmove", disableScroll);
      window.removeEventListener("wheel", disableScroll);
    }

    return () => {
      window.removeEventListener("touchmove", disableScroll);
      window.removeEventListener("wheel", disableScroll);
    };
  }, [visibleNav]);

  const handleHeader = () => {
    if (window.scrollY > 48) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };

  const handleMouseEnter = (type) => {
    if (window.innerWidth <= 768) {
      setActiveMenu(null);
    } else {
      setActiveMenu(type);
    }
  };


  return (
    <>
      {/* <Banner
        className={cn(styles.banner, {
          [styles.active]: visibleNav,
        })}
      /> */}

      <header
        className={cn(styles.header, {
          [styles.fixed_header]: fixedHeader,
        })}
      >
        <div className={cn("container", styles.container)}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo/espace-ezzohour-logo.svg" 
              alt="Ezzohour Logo" 
              width={170} 
              height={100}
              priority
            />
          </Link>

          <nav
            className={cn(styles.nav, {
              [styles.active]: visibleNav,
            })}
          >
            <ul className={styles.links}>
              {header_links.map((link) => (
                <li
                  key={link.href}
                  onMouseEnter={() => handleMouseEnter(link.type)}
                >
                  <Link
                    href={link.href}
                    className={cn("label-medium", styles.link, {
                      [styles.active]: activeMenu === link.type,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.btns}>
            <button className={styles.contact_button}>
              <Link href="/contact-us"> 
                Contact
              </Link>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className={styles.mobile_menu_button}
              onClick={() => setVisibleNav(!visibleNav)}
            >
              {visibleNav ? icons.Close : icons.Menu}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div 
        className={cn(styles.mobile_menu, {
          [styles.mobile_menu_active]: visibleNav,
        })}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setVisibleNav(false);
          }
        }}
      >
        <div className={styles.mobile_menu_content}>
          <div className={styles.mobile_menu_header}>
            <Image 
              src="/images/logo/espace-ezzohour-logo.svg" 
              alt="Espace Ezzohour Logo" 
              width={120} 
              height={60}
            />
            <button 
              className={styles.mobile_close_button}
              onClick={() => setVisibleNav(false)}
            >
              {icons.Close}
            </button>
          </div>
          
          <nav className={styles.mobile_nav}>
            <ul className={styles.mobile_links}>
              {header_links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn("label-large", styles.mobile_link)}
                    onClick={() => setVisibleNav(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={styles.mobile_contact}>
            <Link 
              href="/contact-us" 
              className={cn("button", styles.mobile_contact_button)}
              onClick={() => setVisibleNav(false)}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
