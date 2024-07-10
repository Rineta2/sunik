import { dataHeader, navLogo } from "@/components/data/Data";

import Link from "next/link";

import "@/components/sass/Layout.scss";

export default function Header() {
  return (
    <header>
      <nav className="container">
        {navLogo.map((logo) => {
          return (
            <div className="logo" key={logo.id}>
              <i>{logo.icons}</i>
              <h3>{logo.title}</h3>
            </div>
          );
        })}

        <ul className="nav__list">
          {dataHeader.map((link) => {
            return (
              <li className="nav__item" key={link.id}>
                <Link href={link.path}>
                  <span className="title">{link.name}</span>
                  <span className="icons">{link.icons}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
