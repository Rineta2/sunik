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
                  <i>{logo.icons}</i>
                  <h3>{logo.title}</h3>
                </div>
              );
            })}

            <div className="social">
              {socialLink.map((link) => {
                return (
                  <div key={link.id}>
                    <Link href={link.path}>{link.icons}</Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tautan">
            <h3>Tautan Langsung</h3>
            {tautanFooter.map((tautan) => {
              return (
                <div className="box" key={tautan.id}>
                  <Link href={tautan.path}>{tautan.name}</Link>
                </div>
              );
            })}
          </div>

          <div className="jam">
            <h3>Jam Buka</h3>
            {jamBuka.map((jam) => {
              return (
                <div className="box" key={jam.id}>
                  <span>{jam.name}</span>
                  <span>{jam.date}</span>
                </div>
              );
            })}
          </div>

          <div className="contact">
            <h3>Info Kontak</h3>
            {infoContact.map((contact) => {
              return (
                <div className="box" key={contact.id}>
                  <Link href={contact.path}>
                    <i>{contact.icons}</i>
                    <span>{contact.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; 2022 <Link href={"https://rineta.vercel.app/"}>rineta</Link>.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
