"use client";

import { Fade } from "react-awesome-reveal";

import {
  socialLink,
  tautanFooter,
  jamBuka,
  infoContact,
  navLogo,
} from "@/components/data/Data";

import Link from "next/link";

import "@/components/sass/Layout.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container container grid">
        <div className="content">
          <div className="logo">
            {navLogo.map((logo) => {
              return (
                <div className="profile" key={logo.id}>
                  <Fade
                    triggerOnce
                    delay={300}
                    duration={1000}
                    direction="left">
                    <i>{logo.icons}</i>
                  </Fade>

                  <Fade
                    triggerOnce
                    delay={300}
                    duration={1000}
                    direction="right">
                    <h3>{logo.title}</h3>
                  </Fade>
                </div>
              );
            })}

            <div className="social">
              {socialLink.map((link) => {
                return (
                  <div key={link.id} className="list">
                    <Fade
                      triggerOnce
                      delay={300}
                      duration={1000}
                      direction="up">
                      <Link href={link.path} className="social__link">
                        {link.icons}
                      </Link>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tautan">
            <Fade triggerOnce delay={300} duration={1000} direction="down">
              <h3>Tautan Langsung</h3>
            </Fade>

            {tautanFooter.map((tautan) => {
              return (
                <div className="box" key={tautan.id}>
                  <Fade triggerOnce delay={300} duration={1000}>
                    <Link href={tautan.path}>{tautan.name}</Link>
                  </Fade>
                </div>
              );
            })}
          </div>

          <div className="jam">
            <Fade triggerOnce delay={300} duration={1000} direction="down">
              <h3>Jam Buka</h3>
            </Fade>
            {jamBuka.map((jam) => {
              return (
                <div className="box" key={jam.id}>
                  <Fade triggerOnce delay={300} duration={1000}>
                    <span>{jam.name}</span>
                    <span>{jam.date}</span>
                  </Fade>
                </div>
              );
            })}
          </div>

          <div className="contact">
            <Fade triggerOnce delay={300} duration={1000} direction="down">
              <h3>Info Kontak</h3>
            </Fade>
            {infoContact.map((contact) => {
              return (
                <div className="box" key={contact.id}>
                  <Fade triggerOnce delay={300} duration={1000}>
                    <Link href={contact.path}>
                      <i>{contact.icons}</i>
                      <span>{contact.name}</span>
                    </Link>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>

        <div className="copyright">
          <Fade triggerOnce delay={300} duration={1000} direction="up">
            <p>
              &copy; 2022{" "}
              <Link href={"https://rineta.vercel.app/"}>rineta</Link>. All
              Rights Reserved
            </p>
          </Fade>
        </div>
      </div>
    </footer>
  );
}
