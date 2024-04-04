import React from "react";
import data from "./../../../../data/giftCards.json";
import data2 from "./../../../../data/giftCards2.json";
import "./Gift.css";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import Gift2 from "./../../../images/gift2.jpg";
import Slider2 from "./Slider2";
import Section1 from "./Section1";
const Gift = () => {
  return (
    <>
      <Slider2 giftcard2={data2.gftcard} />
      <Section1/>
      {data.gftcard.map((item, id) => {
        return <Slider key={id} giftCard={item} />;
      })}
      <div className="gift">
        <div className="gift-head">
          <img src={Gift2} alt="" />
          <div className="gift-text">
            <h2>Business gifting — simplified</h2>
            <p>
              Bulk send physical or digital Starbucks Cards to gift, reward,
              incentivize, or show appreciation towards your customers, clients
              and team members. Minimum 15 cards per order.
            </p>
            <Link>Shop now</Link>
          </div>
        </div>
      </div>
      <div className="gift-section-1">
        <div className="gift-section-text">
          <h2>GIFT CARD SUPPORT</h2>
          <p>
            Use the links below to manage eGifts you have sent or received, or
            view our full Card Terms & Conditions.
          </p>
          <Link>eGift Support</Link>
          <Link>See Terms &amp; Conditions</Link>
          <Link>eGift FAQs</Link>
        </div>
      </div>
    </>
  );
};

export default Gift;
