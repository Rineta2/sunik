"use client";

import { useState } from "react";

import { TiTimes } from "react-icons/ti";

import {
  dataProduct,
  bgProduct,
  headProduct,
  filterButtons,
} from "@/components/data/dataProduct";

import Image from "next/image";

import { Fade, JackInTheBox } from "react-awesome-reveal";

import "@/components/sass/Page.scss";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("small");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleChange = (setter: any) => (e: any) => setter(e.target.value);

  //=============== Form Checkout ================//

  const [name, setName] = useState("");
  const [rasa, setRasa] = useState("");
  const [harga, setHarga] = useState("");
  const [alamat, setAlamat] = useState("");
  const [number, setNumber] = useState("");
  const [pesan, setPesan] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  //=============== Filter Data ================//

  const filteredData =
    selectedCategory === "small"
      ? dataProduct
      : dataProduct.filter((id) => id.category === selectedCategory);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  //=============== Checkout ================//

  const handleCheckout = (product: any) => {
    setSelectedProduct(product);
    setModalType("checkout");
    setOpen(true);
    setHarga(product.harga);
    setRasa(product.title);
    setQuantity(1);
    setSize(product.category);
  };

  //=============== Quantity ================//

  const handleQuantityChange = (e: any) => {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    const totalHarga = selectedProduct?.harga * quantity;
    const formattedHarga = isNaN(totalHarga)
      ? ""
      : totalHarga.toLocaleString("id-ID", { minimumFractionDigits: 3 });
    setHarga(formattedHarga);
  };

  //=============== Details ================//

  const handleDetails = (product: any) => {
    setSelectedProduct(product);
    setModalType("details");
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  //=============== Form ================//

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!rasa || !harga || !name || !alamat || !number || !pesan) {
      alert("Silakan isi semua data sebelum mengirimkan pesanan.");
      return;
    }

    const confirmSubmission = window.confirm(
      "Jika Anda sudah mengisi formulir, berikan bukti pembayaran dan klik OK untuk melanjutkan."
    );
    if (!confirmSubmission) return;

    const message = `
    ========== Struck Pesanan ==========
    
    - Rasa: ${rasa}
    - Harga: ${harga}
    - Size: ${size}
    - Nama: ${name}
    - Jumlah : ${quantity}
    - Alamat: ${alamat}
    - Number: ${number}
    - Pesan : ${pesan}

  ==============================
        `;

    const recipient = "6281398632939";
    const whatsappURL = `https://wa.me/${recipient}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setRasa("");
    setHarga("");
    setName("");
    setAlamat("");
    setNumber("");
    setPesan("");
    setQuantity(1);
    setSelectedProduct(null);
  };

  return (
    <section className="product" id="product">
      <div className="product__container container grid">
        {headProduct.map((head) => {
          return (
            <div className="heading" key={head.id}>
              <JackInTheBox triggerOnce delay={300} duration={1000}>
                <h1>{head.title}</h1>
              </JackInTheBox>
            </div>
          );
        })}

        {bgProduct.map((bg) => {
          return (
            <div className="bg" key={bg.id}>
              <Image
                src={bg.img}
                alt="product"
                quality={100}
                width={500}
                height={500}
              />
            </div>
          );
        })}

        <div className="filters__buttons">
          {filterButtons.map((button) => {
            return (
              <Fade
                triggerOnce
                delay={300}
                duration={1000}
                key={button.id}
                direction="down">
                <button
                  key={button.id}
                  className={
                    button.category === selectedCategory ? "active" : "small"
                  }
                  onClick={() => handleFilter(button.category)}>
                  {button.name}
                </button>
              </Fade>
            );
          })}
        </div>

        <div className="content">
          {filteredData.map((data) => {
            return (
              <div className="box" key={data.id}>
                <Fade triggerOnce delay={300} duration={1000} direction="down">
                  <Image src={data.img} alt="product" quality={100} />
                </Fade>

                <div className="text">
                  <Fade
                    triggerOnce
                    delay={300}
                    duration={1000}
                    direction="down">
                    <h1 className="title__product">{data.title}</h1>
                  </Fade>

                  <Fade triggerOnce delay={300} duration={1000}>
                    <p>{data.desc}</p>
                  </Fade>

                  <Fade triggerOnce delay={300} duration={1000}>
                    <span>Rp. {data.harga}</span>
                  </Fade>

                  <Fade triggerOnce delay={300} duration={1000} direction="up">
                    <div className="btn">
                      <div
                        className="details"
                        onClick={() => handleDetails(data)}>
                        Lihat Details
                      </div>

                      <div
                        className="btn_checkout"
                        onClick={() => handleCheckout(data)}>
                        Beli
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProduct && modalType === "details" && (
          <div className={`modal ${open ? "open" : "close"}`}>
            {selectedProduct && (
              <div className="modal__content">
                <div className="img">
                  <Image
                    src={selectedProduct.img}
                    alt="product"
                    quality={100}
                  />
                </div>

                <div className="modal__text">
                  <Fade
                    duration={1000}
                    triggerOnce
                    delay={300}
                    direction="down">
                    <h1 className="title__details">{selectedProduct.title}</h1>
                  </Fade>

                  <div className="category__details">
                    <Fade
                      triggerOnce
                      delay={300}
                      duration={1000}
                      direction="left">
                      <span className="size">{selectedProduct.size}</span>
                    </Fade>

                    <Fade
                      triggerOnce
                      delay={300}
                      duration={1000}
                      direction="right">
                      <span className="category">
                        {selectedProduct.category}
                      </span>
                    </Fade>
                  </div>

                  <Fade triggerOnce delay={300} duration={1000}>
                    <p>{selectedProduct.desc}</p>
                  </Fade>

                  <Fade triggerOnce delay={300} duration={1000} direction="up">
                    <span className="price">Rp. {selectedProduct.harga}</span>
                  </Fade>

                  <div className="modal__close" onClick={closeModal}>
                    <TiTimes className="icons" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedProduct && modalType === "checkout" && (
          <div className={`form ${open ? "open" : "close"}`}>
            <form onSubmit={handleSubmit}>
              <h1>Checkout</h1>

              <div className="box">
                <label>
                  Rasa
                  <input
                    value={rasa}
                    readOnly
                    onChange={handleChange(setRasa)}
                  />
                </label>

                <label>
                  Size
                  <input
                    value={size}
                    readOnly
                    onChange={handleChange(setSize)}
                  />
                </label>
              </div>

              <div className="box">
                <label>
                  Harga
                  <input
                    value={harga}
                    readOnly
                    onChange={handleChange(setHarga)}
                  />
                </label>

                <label>
                  Jumlah
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                  />
                </label>
              </div>

              <div className="box">
                <label>
                  Nama
                  <input
                    type="text"
                    value={name}
                    onChange={handleChange(setName)}
                  />
                </label>

                <label>
                  Number Handphone
                  <input
                    type="tel"
                    value={number}
                    onChange={handleChange(setNumber)}
                  />
                </label>
              </div>

              <div className="box">
                <label>
                  Alamat
                  <input
                    type="text"
                    value={alamat}
                    onChange={handleChange(setAlamat)}
                  />
                </label>

                <label>
                  Pesan
                  <textarea
                    value={pesan}
                    onChange={handleChange(setPesan)}></textarea>
                </label>
              </div>

              <div className="btn">
                <button className="purchase" type="submit">
                  Konfirmasi Pembelian
                </button>
              </div>

              <div className="close" onClick={() => setSelectedProduct(null)}>
                <TiTimes className="icons" />
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
