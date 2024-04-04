import React from "react";
import "./FindStore.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const FindStore = () => {
  return (
    <div className="findstore">
      <div className="findstore-flex">
        <div className="findstore-box">
          <div className="findstore-head">
            <div className="search">
              <input value="Find a store" type="text" />
              <SearchIcon />
            </div>
            <div className="findstore-btn">
              <Link>Filter</Link>
            </div>
          </div>
          <section>
            <div className="findstore-text">
              <h2>Zoomed out too far</h2>
              <p>Try searching for a location or zooming in to see results.</p>
            </div>
            <div className="findstore-link">
              <Link>Privacy Notice</Link>
              <Link>Terms of Use</Link>
              <Link>Do Not Share My Personal Information</Link>
            </div>
          </section>
        </div>
        <div className="findstore-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122836.107882987!2d45.11410304603833!3d40.15019884333552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAz%C9%99rbaycan!5e0!3m2!1saz!2saz!4v1711434802926!5m2!1saz!2saz"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindStore;
