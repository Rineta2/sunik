import { bannerImg } from "@/components/data/Data";

import "@/components/sass/Page.scss";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__container container grid">
        {bannerImg.map((img) => {
          return (
            <div className="banner" key={img.id}>
              <Image
                src={img.img}
                alt="banner"
                quality={100}
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
