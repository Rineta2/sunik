"use client";

import "@/components/sass/Page.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { headTesti, testiData } from "@/components/data/Data";

import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container grid">
        {headTesti.map((head) => {
          return (
            <div className="heading" key={head.id}>
              <h1>{head.title}</h1>
            </div>
          );
        })}

        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="swiper"
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          grabCursor={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {testiData.map((data) => {
            return (
              <SwiperSlide key={data.id} className="swiper-slide">
                <Image
                  src={data.img}
                  alt="testi"
                  quality={100}
                  width={500}
                  height={500}
                />

                <h3>{data.name}</h3>
                <p>{data.desc}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
