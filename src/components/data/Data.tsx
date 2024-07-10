import { IoMdHome } from "react-icons/io";
import {
  FaRegUser,
  FaUsers,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaPhone,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiDrinking } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { RiDrinksFill } from "react-icons/ri";

import notFoundImg from "@/app/Favicon.png";

//================ Not Found ================//

export const dataNotFound = [
  {
    id: 1,
    img: notFoundImg,
    title: "Apakah hari ini hari jumat?",
    desc: "Maaf, hal ini tidak seharusnya terjadi. Coba kembali atau pulang",
    name: "Kembali ke Beranda",
    path: "/",
  },
];

//================ Header ================//

export const dataHeader = [
  {
    id: 1,
    name: "Home",
    icons: <IoMdHome />,
    path: "#home",
  },

  {
    id: 2,
    name: "About",
    icons: <FaRegUser />,
    path: "#about",
  },

  {
    id: 3,
    name: "Services",
    icons: <MdOutlineDesignServices />,
    path: "#services",
  },

  {
    id: 4,
    name: "Product",
    icons: <GiDrinking />,
    path: "#product",
  },

  {
    id: 5,
    name: "Testimonial",
    icons: <FaUsers />,
    path: "#testimonials",
  },

  {
    id: 6,
    name: "Contact",
    icons: <TiMessages />,
    path: "#contact",
  },
];

export const navLogo = [
  {
    id: 1,
    title: "Sunik Johan",
    icons: <RiDrinksFill />,
  },
];

//================ Footer ================//

export const socialLink = [
  {
    id: 1,
    icons: <FaInstagram />,
    path: "",
  },

  {
    id: 2,
    icons: <FaWhatsapp />,
    path: "",
  },

  {
    id: 3,
    icons: <FaTiktok />,
    path: "",
  },
];

export const tautanFooter = [
  {
    id: 1,
    name: "Home",
    path: "#home",
  },

  {
    id: 2,
    name: "About",
    path: "#about",
  },

  {
    id: 3,
    name: "Services",
    path: "#services",
  },

  {
    id: 4,
    name: "Product",
    path: "#product",
  },

  {
    id: 5,
    name: "Testimonial",
    path: "#testimonials",
  },

  {
    id: 6,
    name: "Contact",
    path: "#contact",
  },
];

export const jamBuka = [
  {
    id: 1,
    name: "Senin :",
    date: "12:15 Am To 21:00 Pm",
  },

  {
    id: 2,
    name: "Selasa :",
    date: "12:20 Am To 21:00 Pm",
  },

  {
    id: 3,
    name: "Rabu :",
    date: "10:00 Am To 18:00 Pm",
  },

  {
    id: 4,
    name: "Kamis :",
    date: "09:00 Am To 17:00 Pm",
  },

  {
    id: 5,
    name: "Jumat :",
    date: "09:00 Am To 21:00 Pm",
  },

  {
    id: 5,
    name: "Sabtu :",
    date: "10:00 Am To 21:00 Pm",
  },

  {
    id: 7,
    name: "Minggu :",
    date: "11:30 Am To 21:00 Pm",
  },
];

export const infoContact = [
  {
    id: 1,
    icons: <FaWhatsapp />,
    name: "+6281284258290",
    path: "https://wa.me/+6281321138107",
  },

  {
    id: 2,
    icons: <FaPhone />,
    name: "+6281321138107",
    path: "tel:+6281321138107",
  },

  {
    id: 3,
    icons: <FaMailBulk />,
    name: "Yhnyohan309@Gmail.Com",
    path: "mailto:Yhnyohan309@Gmail.Com",
  },

  {
    id: 4,
    icons: <FaLocationArrow />,
    name: "Kp Dukuh Rt 03 Rw 08 Desa Cibadak Ciampea Bogor",
    path: "https://maps.app.goo.gl/mESrNXSpU1vrw5Ec6",
  },
];
