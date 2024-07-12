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
              <h1>{item.title}</h1>
            </div>
          );
        })}

        <div className="content">
          {dataServices.map((data) => {
            return (
              <div className="box" key={data.id}>
                <Image src={data.img} alt={"services"} quality={100} />

                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
