"use client";

import { useState } from "react";

import {
  dataProduct,
  bgProduct,
  headProduct,
  filterButtons,
} from "@/components/data/dataProduct";

import Image from "next/image";

import "@/components/sass/Page.scss";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("small");

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "small"
      ? dataProduct
      : dataProduct.filter((id) => id.category === selectedCategory);

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

        <div className="filters__buttons">
          {filterButtons.map((button) => {
            return (
              <button
                key={button.id}
                className={
                  button.category === selectedCategory ? "active" : "small"
                }
                onClick={() => handleFilter(button.category)}
              >
                {button.name}
              </button>
            );
          })}
        </div>

        <div className="content">
          {filteredData.map((data) => {
            return (
              <div className="box" key={data.id}>
                <Image src={data.img} alt="product" quality={100} />

                <div className="text">
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <span>{data.price}</span>

                  <div className="btn">
                    <div className="details">Lihat Details</div>
                    <div className="checkout">Beli</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
