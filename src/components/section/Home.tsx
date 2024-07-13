"use client";

import { Fade } from "react-awesome-reveal";

import { dataHome, dataBg } from "@/components/data/Data";

import Image from "next/image";

import "@/components/sass/Page.scss";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="content">
          {dataHome.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Fade triggerOnce delay={300} duration={1000} direction="down">
                  <span>{item.text}</span>
                </Fade>

                <Fade triggerOnce delay={300} duration={1000}>
                  <h1>{item.title}</h1>
                </Fade>

                <Image
                  src={item.img}
                  alt="home"
                  quality={100}
                  width={500}
                  height={500}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg">
        {dataBg.map((bg) => {
          return (
            <Image
              key={bg.id}
              src={bg.img}
              alt="home"
              quality={100}
              width={500}
              height={500}
            />
          );
        })}
      </div>
    </section>
  );
}
