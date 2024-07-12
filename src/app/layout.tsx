import { ReactNode } from "react";

import "@/components/sass/globals.scss";

import { Open_Sans as OpenSans } from "next/font/google";

const openSans = OpenSans({ subsets: ["latin"] });

import Head from "@/app/Head";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Head />
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
