import { dataNotFound } from "@/components/data/Data";

import Image from "next/image";

import Link from "next/link";

import "@/components/sass/Layout.scss";

export default function notFound() {
  return (
    <section className="notFound">
      <div className="notfound__container container grid">
        {dataNotFound.map((item) => {
          return (
            <div className="box" key={item.id}>
              <Image src={item.img} alt={"not found"} quality={100} />
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <div className="btn">
                <Link href={item.path}>{item.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
