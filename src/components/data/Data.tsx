import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaPhone,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";
import { RiDrinksFill } from "react-icons/ri";

//================ Data Notfound ================//
import notFoundImg from "@/components/assets/favicon.jpg";

//================ Data Home ================//
import homeImg from "@/components/assets/home/home.jpg";
import bgHome from "@/components/assets/home/bg.jpg";

//================ Data About ================//
import aboutImg from "@/components/assets/about/tes.jpg";

//================ Data Services ================//
import fastimg from "@/components/assets/services/Fast.png";
import onlineimg from "@/components/assets/services/Online.png";
import codimg from "@/components/assets/services/COD.png";

//================ Data Banner ================//
import banner from "@/components/assets/banner/banner.png";

//================ Data Banner ================//
import testi_1 from "@/components/assets/testi/testi1.png";

//================ Header ================//

export const dataHeader = [
  {
    id: 1,
    name: "Home",
    path: "#home",
    active: "home",
  },

  {
    id: 2,
    name: "About",
    path: "#about",
    active: "about",
  },

  {
    id: 3,
    name: "Services",
    path: "#services",
    active: "services",
  },

  {
    id: 4,
    name: "Product",
    path: "#product",
    active: "product",
  },

  {
    id: 5,
    name: "Testimonial",
    path: "#testimonials",
    active: "testimonials",
  },

  {
    id: 6,
    name: "Contact",
    path: "#contact",
    active: "contact",
  },
];

export const navLogo = [
  {
    id: 1,
    title: "Sunik Johan",
    icons: <RiDrinksFill />,
  },
];

//================ Home ================//

export const dataHome = [
  {
    id: 1,
    text: "Selamat Datang Di Website Kami",
    title: "Sunik Johan",
    img: homeImg,
  },
];

export const dataBg = [
  {
    id: 1,
    img: bgHome,
  },
];

//================ About ================//

export const imgAbout = [
  {
    id: 1,
    img: aboutImg,
  },
];

export const dataAbout = [
  {
    id: 1,
    text: "Tentang Kami",
    title: "Apa Yang Membuat Sunik Istimewa ?",
    desc: "Kedai Sunik Juga Menjual Semacam [ Sosis Goreng, Nuget, Otak-Otak, Cireng, Basreng Dan Menyediakan Minuman, Sunik Boba Varian Rasa Seperti Pop Ice, Serta Menjual Makanan Goreng Ringan",
    name: "Product",
    path: "#product",
  },
];

//================ Services ================//

export const dataHeading = [
  {
    id: 1,
    title: "Layanan Kami",
  },
];

export const dataServices = [
  {
    id: 1,
    img: codimg,
    title: "Bayar Di Tempat",
    desc: "Metode Pembayaran Yang Dilakukan Secara Langsung Di Tempat Setelah Pesanan Dari Kurir Diterima Oleh Pembeli. Dengan Kata Lain, COD Artinya Pilihan Metode Pembayaran",
  },

  {
    id: 2,
    img: onlineimg,
    title: "Pesan Online",
    desc: "Online Payment Mengacu Pada Sistem Pembayaran Yang Dilakukan Secara Online Dengan Melibatkan Penggunaan Jaringan Komputer, Internet, Dan Layanan Keuangan Digital. Sistem Pembayaran Ini Sering Juga Disebut E-Payment Atau Pembayaran Elektronik.",
  },

  {
    id: 3,
    img: fastimg,
    title: "Merespon Dengan Cepat",
    desc: "Kami berkomitmen untuk merespons setiap kebutuhan pelanggan dengan cepat dan efisien. Pendekatan ini tidak hanya meningkatkan kepuasan pelanggan tetapi juga memperkuat reputasi kami sebagai penyedia layanan yang responsif dan terpercaya di pasar.",
  },
];

//================ Banner ================//

export const bannerImg = [
  {
    id: 1,
    img: banner,
  },
];

//================ Testimonials ================//

export const headTesti = [
  {
    id: 1,
    title: "Testimonial",
  },
];

export const testiData = [
  {
    id: 1,
    name: "Random Name",
    img: testi_1,
    desc: "Popice Boba Sunik benar-benar menyegarkan! Kombinasi es krim popice yang creamy dengan boba kenyal membuat setiap tegukan begitu lezat. Cocok dinikmati di hari panas. Saya pasti akan membelinya lagi!",
  },

  {
    id: 2,
    name: "Random Name",
    img: testi_1,
    desc: "Saya mencoba Popice Boba Sunik dan langsung jatuh cinta dengan rasanya. Perpaduan manis es krim popice dan tekstur unik boba membuat minuman ini menjadi favorit baru saya. Minuman ini memberi kejutan rasa yang menyenangkan di setiap seruput.",
  },

  {
    id: 3,
    name: "Random Name",
    img: testi_1,
    desc: "Popice Boba Sunik adalah penyelamat dahaga saya setelah seharian beraktivitas. Rasa es krim yang kaya dan boba yang kenyal menciptakan kombinasi yang sempurna. Rasanya benar-benar memuaskan dan sangat menghibur!",
  },
];

//================ Contact ================//

export const headContact = [
  {
    id: 1,
    title: "Contact",
  },
];

export const dataContact = [
  {
    id: 1,
    icons: <FaWhatsapp />,
    title: "Whatsapp",
    desc: "Whatsapp Sunik Johan",
    name: "Contact",
    path: "https://wa.me/+6281284258290",
  },

  {
    id: 2,
    icons: <FaInstagram />,
    title: "Intastagram",
    desc: "Instagram Sunik Johan",
    name: "Contact",
    path: "https://instagram.com/kedai_sunik?igshid=ZDdkNTZiNTM=",
  },
];

export const maps = [
  {
    id: 1,
    frame:
      "https://www.google.com/maps/embed?pb=!4v1720769430744!6m8!1m7!1sg99tOCxGYjYk3iDXv4Oxew!2m2!1d-6.564741844724457!2d106.6840749677068!3f210.07875!4f0!5f0.7820865974627469",
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
