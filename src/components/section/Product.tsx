import {
  dataProduct,
  bgProduct,
  headProduct,
} from "@/components/data/dataProduct";

import Image from "next/image";

import "@/components/sass/Page.scss";

export default function Product() {
  return (
    <section className="product" id="product">
      <div className="product__container container grid">
        {headProduct.map((head) => {
          return (
            <div className="heading" key={head.id}>
              <h1>{head.title}</h1>
            </div>
          );
        })}

        {bgProduct.map((bg) => {
          return (
            <div className="bg" key={bg.id}>
              <Image
                src={bg.img}
                alt="product"
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
