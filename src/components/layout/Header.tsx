"use client";

import { useState, useEffect } from "react";

import { dataHeader, navLogo } from "@/components/data/Data";

import Link from "next/link";

import "@/components/sass/Layout.scss";

import { CgMenuRight } from "react-icons/cg";

import { TiTimes } from "react-icons/ti";

export default function Header() {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>("home");

  //================= Active Link =================//

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //================= Header =================//

  const [fix, setFix] = useState<boolean>(false);

  const setFixed = (): void => {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <header className={fix ? "fixed" : ""}>
      <nav className="container">
        {navLogo.map((logo) => {
          return (
            <div className="logo" key={logo.id}>
              <i>{logo.icons}</i>
              <h3>{logo.title}</h3>
            </div>
          );
        })}

        <ul className={`nav__list ${show ? "show" : ""}`}>
          {dataHeader.map((link) => {
            return (
              <li key={link.id} className="nav__item">
                <Link
                  href={link.path}
                  className={`nav__link ${
                    activeLink === link.active ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav__toggle" onClick={() => setShow(!show)}>
          {show ? (
            <TiTimes className="close" />
          ) : (
            <CgMenuRight className="hamburger" />
          )}
        </div>
      </nav>
    </header>
  );
}
