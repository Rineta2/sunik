import dynamic from "next/dynamic";

import { Fragment, Suspense } from "react";
import { ComponentType } from "react";

const Home: ComponentType<{}> = dynamic(
  () => import("@/components/section/Home"),
  {
    ssr: false,
  }
);

const About: ComponentType<{}> = dynamic(
  () => import("@/components/section/About"),
  {
    ssr: false,
  }
);

const Services: ComponentType<{}> = dynamic(
  () => import("@/components/section/Services"),
  {
    ssr: false,
  }
);

const Banner: ComponentType<{}> = dynamic(
  () => import("@/components/section/Banner"),
  {
    ssr: false,
  }
);

const Product: ComponentType<{}> = dynamic(
  () => import("@/components/section/Product"),
  {
    ssr: false,
  }
);

const Testimonials: ComponentType<{}> = dynamic(
  () => import("@/components/section/Testimonials"),
  {
    ssr: false,
  }
);

const Contact: ComponentType<{}> = dynamic(
  () => import("@/components/section/Contact"),
  {
    ssr: false,
  }
);

export default function page() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
        <Services />
        <Banner />
        <Product />
        <Testimonials />
        <Contact />
      </Suspense>
    </Fragment>
  );
}
