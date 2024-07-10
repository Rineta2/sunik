import React from "react";

export const metadata = {
  title: "Sunik Johan",
  description:
    "Selamat datang di website kami · Sunik dan Johan Cellular · Apa Yang Membuat Sunik Istimewa ? · Layanan Terbaik Kami · Varian rasa menu kami · Varian Istimewa",
  author: "rineta",
  keywords:
    "Minuman Pop Ice, cibatok, ciampea, kampung dukuh, minuman terdekat",
};

const siteUrl = "https://sunik-johan";
const faviconUrl = `${siteUrl}/favicon.png`;
const canonicalUrl = `${siteUrl}/`;

const Head = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "rineta",
    image: "https://sunik.vercel.app/favicon.png",
    "@id": "https://sunik.vercel.app/",
    url: "https://sunik.vercel.app/",
    telephone: "081284258290",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kp Dukuh Rt 03 Rw 08 Desa Cibadak Ciampea Bogor",
      addressLocality: "Cibadak Ciampea Bogor",
      addressRegion: "Jawa Barat",
      postalCode: "16640",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.595038,
      longitude: 106.670528,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00 AM",
      closes: "21:00 PM",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/kedai_sunik/",
    ],

    description:
      "Selamat datang di website kami · Sunik dan Johan Cellular · Apa Yang Membuat Sunik Istimewa ? · Layanan Terbaik Kami · Varian rasa menu kami · Varian Istimewa",
    logo: "https://sunik.vercel.app/favicon.ico",
  };

  const jsonLdString = JSON.stringify(jsonLd);

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
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={faviconUrl} />
      <link rel="apple-touch-icon" href={faviconUrl} />
      <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
    </React.Fragment>
  );
};

export default Head;
