"use client";

import { Fade, JackInTheBox } from "react-awesome-reveal";

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
              <JackInTheBox triggerOnce delay={300} duration={1000}>
                <h1>{head.title}</h1>
              </JackInTheBox>
            </div>
          );
        })}

        <div className="content">
          {dataContact.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Fade triggerOnce delay={300} duration={1000} direction="down">
                  <div className="icons">{item.icons}</div>
                </Fade>

                <Fade triggerOnce delay={300} duration={1000} direction="left">
                  <h3>{item.title}</h3>
                </Fade>

                <Fade triggerOnce delay={300} duration={1000} direction="right">
                  <p>{item.desc}</p>
                </Fade>

                <Fade triggerOnce delay={300} duration={1000} direction="up">
                  <div className="btn">
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                </Fade>
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
                title="sunik"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy={"no-referrer-when-downgrade"}
                key={map.id}></iframe>
            );
          })}
        </div>
      </div>
    </section>
  );
}
