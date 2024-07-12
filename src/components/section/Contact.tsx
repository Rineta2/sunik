import { dataContact, headContact, maps } from "@/components/data/Data";

import "@/components/sass/Page.scss";

import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container grid">
        {headContact.map((head) => {
          return (
            <div className="heading" key={head.id}>
              <h1>{head.title}</h1>
            </div>
          );
        })}

        <div className="content">
          {dataContact.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="icons">{item.icons}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="btn">
                  <Link href={item.path}>{item.name}</Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="maps">
          {maps.map((map) => {
            return (
              <iframe
                src={map.frame}
                width="100%"
                height="450px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy={"no-referrer-when-downgrade"}
                key={map.id}
              ></iframe>
            );
          })}
        </div>
      </div>
    </section>
  );
}
