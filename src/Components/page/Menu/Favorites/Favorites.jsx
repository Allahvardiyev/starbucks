import "./Favorites.css";
import Kaset from "./../../../../images/kaset.png";
import { Link } from "react-router-dom";
const Favorites = () => {
  return (
    <div className="container">
      <div className="favorites">
        <p className="fav-head">Favorites</p>
        <div className="kaset">
          <img src={Kaset} alt="Kaset" />
        </div>
        <p className="fav-content">Save your favorite mixes</p>
        <p className="fav-text">
        Use the heart to save customizations. Your favorites will appear here to order again.
        </p>
        <div className="fav-btns">
          <Link>Sign in</Link>
          <Link>Join now</Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
