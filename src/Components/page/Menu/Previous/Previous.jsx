import React from "react";
import "./Previous.css";
import Moon from "./../../../../images/moon-phases.gif";
import { Link } from "react-router-dom";
const Previous = () => {
  return (
     <div className="container">
    <div className="previous">
     <p className="prev-head">Previous</p>
      <div className="moon-gif">
        <img src={Moon} alt="" />
      </div>
      <p className="prev-content">When history repeats itself</p>
      <p className="prev-text">Previous orders will appear here to quickly order again.</p>
      <div className="prev-btns">
        <Link>Sign in</Link>
        <Link>Join now</Link>
      </div>
     </div>
    </div>
  );
};

export default Previous;
