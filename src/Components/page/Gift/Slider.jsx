import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Scrollbar,A11y } from "swiper/modules";

import "swiper/css"; 
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { NavLink } from "react-router-dom";

const Slider = ({ giftCard }) => {
  const { category, see, cards } = giftCard;
  return (
    <div className="card1">
      <div
        style={{
          width: "80%",
          transition: "transform 0.3s ease",
          hover: "transform: translateY(-2px)",
        }}
        className=" flex align-items-center justify-content-between "
      >
        <h2 className="font-weight-bold md-text-lg p-4">{category}</h2>
        <NavLink style={{color: '#00754A', fontWeight: '600',fontSize: '16px'}}>{see}</NavLink>
      </div>
      <div className=" mx-auto m-5">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
         navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0:{
              spaceBetween: 10,
              slidesPerView: 2,
            },
            576:{
              spaceBetween: 10,
              slidesPerView: 3,
            },
            768:{
              spaceBetween: 15,
              slidesPerView: 4,
            },
            992:{
              spaceBetween: 15,
              slidesPerView: 5,
            },
          }}
          // scrollbar={{ draggable: true }}
        > 
          {cards.map((item, id) => {
            return (
              <SwiperSlide key={id} className="swiper1">
                <img
                  src={item}
                  style={{ }}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
