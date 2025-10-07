'use client'
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BitrixForm from '@/components/BitrixForm';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    // pagination: false,
    // autoplay: {
    //     delay: 7000,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <>
    
    <section className="main-slider main-slider-one" id="home">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer" 
          style={{backgroundImage: 'url(assets/img/slider/1.jpg)'}}
          >
            </div>
            <div className="container">
                <div className="main-slider-one__single">
                   <div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6 col-md-12">
      <div className="main-slider-one__content">
        <h3>"World's First AI-Integrated</h3>
        <h2>Residential Tower"</h2>

        <div style={{paddingTop: 50}}>
          <h3 style={{fontSize: 20}}>FIRST TOWER SOLD!</h3>
        <h3 style={{fontSize: 20}}>2ND TOWER NOW SELLING!</h3>
        </div>

        <div className="btn-box">
          <div className="btn-one"></div>
          <div className="btn-two"></div>
        </div>

        <div className="contact-info">
          <ul>
            <li>
              {/* <div className="icon-box">
                <span className="icon-pin"></span>
              </div> */}
            </li>

            <li>
              {/* <div className="icon-box">
                <span className="icon-envelope"></span>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-12">
      <div
        className="contact-form"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#0b4a35",
          }}
        >
          Get in Touch
        </h3>
        {/* Bitrix Form Here */}

        {/* <div style={{ width: "100%", minHeight: "600px" }}>
      <iframe
        src="https://crm.shiroestate.ae/crm/form/48_yf19a2/?iframe=Y"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "600px" }}
        scrolling="no"
        title="Contact Form"
      ></iframe>
    </div> */}

        {/* <BitrixForm/> */}

      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          style={{ borderRadius: '8px', border: '1px solid #ccc' }}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          style={{ borderRadius: '8px', border: '1px solid #ccc' }}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          style={{ borderRadius: '8px', border: '1px solid #ccc' }}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          rows="3"
          placeholder="Your Message"
          className="form-control"
          value={formData.message}
          onChange={handleChange}
          style={{
            borderRadius: '8px',
            border: '1px solid #ccc',
            resize: 'none',
          }}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn w-100"
        style={{
          backgroundColor: '#9f8151',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: '600',
        }}
      >
        Send Message
      </button>
    </form>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </SwiperSlide>
        {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="main-slider-one__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"  role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div> */}
      </Swiper>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
    </>
  );
};

