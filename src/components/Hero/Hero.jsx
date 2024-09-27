import React from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';


const Hero = () => {
  return (
    <section id="home">
      <div className="home-content">
        <Swiper className="swiper mySwiper">
          <SwiperSlide>
            <img
              src={img1}
              alt="HTML Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="CSS Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="JS Logo"
            />
          </SwiperSlide>
        </Swiper>
        <div className="main-text">
          <h1 className="title">Web Development</h1>
          <p>Web development involves the work of creating and maintaining websites for the internet or an intranet, using technologies like HTML, CSS, and JavaScript, along with tasks such as web design, content development, and client-side/server-side scripting. It can range from building simple static pages to developing complex web-based applications and e-commerce platforms.</p>
          <button id="knowMoreButton">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
