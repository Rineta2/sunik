"use client";

import { JackInTheBox, Fade } from "react-awesome-reveal";

import { dataServices, dataHeading } from "@/components/data/Data";

import "@/components/sass/Page.scss";

import Image from "next/image";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container container grid">
        {dataHeading.map((item) => {
          return (
            <div className="heading" key={item.id}>
              <JackInTheBox triggerOnce delay={300} duration={1000}>
                <h1>{item.title}</h1>
              </JackInTheBox>
            </div>
          );
        })}

        <div className="content">
          {dataServices.map((data) => {
            return (
              <div className="box" key={data.id}>
                <Fade triggerOnce delay={300} duration={1000}>
                  <Image src={data.img} alt={"services"} quality={100} />
                </Fade>

                <Fade triggerOnce delay={300} duration={1000} direction="down">
                  <h3>{data.title}</h3>
                </Fade>

                <Fade triggerOnce delay={300} duration={1000} direction="up">
                  <p>{data.desc}</p>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
