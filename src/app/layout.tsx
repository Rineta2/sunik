import React, { ReactNode } from "react";

import "@/components/sass/globals.scss";

import { Open_Sans as OpenSans } from "next/font/google";

const openSans = OpenSans({ subsets: ["latin"] });

import dynamic from "next/dynamic";

import { ComponentType } from "react";

import Head from "@/app/Head";

const Header: ComponentType<{}> = dynamic(
  () => import("@/components/layout/Header"),
  {
    ssr: false,
  }
);

const Footer: ComponentType<{}> = dynamic(
  () => import("@/components/layout/Footer"),
  {
    ssr: false,
  }
);

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head />
      <body className={openSans.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
