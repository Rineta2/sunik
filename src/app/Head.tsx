import React from "react";

export const metadata = {
  title: "Sunik Johan",
  description:
    "Selamat datang di website kami · Sunik dan Johan Cellular · Apa Yang Membuat Sunik Istimewa ? · Layanan Terbaik Kami · Varian rasa menu kami · Varian Istimewa",
  author: "rineta",
  keywords:
    "Minuman Pop Ice, cibatok, ciampea, kampung dukuh, minuman terdekat",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLESITEVERIVICATION,
};

const Head = () => {
  return (
    <React.Fragment>
      <title>{metadata.title}</title>
      <meta charSet="UTF-8" />
      <meta name="version" content="1.0" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta
        name="google-site-verification"
        content="PPFLRECsv286Qh9u6AsO2sLWattnKN-Z2BsNEMKprsk"
      />
    </React.Fragment>
  );
};

export default Head;
