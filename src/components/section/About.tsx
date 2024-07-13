"use client";

import { Fade } from "react-awesome-reveal";

import "@/components/sass/Page.scss";

import { dataAbout, imgAbout } from "@/components/data/Data";

import Link from "next/link";

import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container grid">
        <div className="content">
          <div className="img">
            {imgAbout.map((img) => {
              return (
                <Fade
                  triggerOnce
                  delay={300}
                  duration={1000}
                  direction="left"
                  key={img.id}>
                  <Image
                    key={img.id}
                    src={img.img}
                    alt="about"
                    quality={100}
                    width={500}
                    height={500}
                  />
                </Fade>
              );
            })}
          </div>

          <div className="text">
            {dataAbout.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Fade
                    triggerOnce
                    delay={300}
                    duration={1000}
                    direction="down">
                    <span>{item.text}</span>
                  </Fade>

                  <Fade triggerOnce delay={300} duration={1000}>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Fade triggerOnce delay={300} duration={1000}>
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
        </div>
      </div>
    </section>
  );
}
