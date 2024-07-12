import { ReactNode } from "react";

import "@/components/sass/globals.scss";

import { Open_Sans as OpenSans } from "next/font/google";

const openSans = OpenSans({ subsets: ["latin"] });

import Head from "@/app/Head";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
