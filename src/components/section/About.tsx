import React from "react";

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
                <Image
                  key={img.id}
                  src={img.img}
                  alt="about"
                  quality={100}
                  width={500}
                  height={500}
                />
              );
            })}
          </div>

          <div className="text">
            {dataAbout.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <span>{item.text}</span>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <div className="btn">
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
