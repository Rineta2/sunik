import dynamic from "next/dynamic";

import { Fragment } from "react";

const Home = dynamic(() => import("@/components/section/Home"), {
  ssr: false,
});

const About = dynamic(() => import("@/components/section/About"), {
  ssr: false,
});

const Services = dynamic(() => import("@/components/section/Services"), {
  ssr: false,
});

const Product = dynamic(() => import("@/components/section/Product"), {
  ssr: false,
});

const Testimonials = dynamic(
  () => import("@/components/section/Testimonials"),
  {
    ssr: false,
  }
);

const Contact = dynamic(() => import("@/components/section/Contact"), {
  ssr: false,
});

export default function page() {
  return (
    <Fragment>
      <Home />
      <About />
      <Services />
      <Product />
      <Testimonials />
      <Contact />
    </Fragment>
  );
}
