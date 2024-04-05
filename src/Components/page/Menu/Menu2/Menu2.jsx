import { useContext } from "react";
import { ProductContext } from "../../../../context/api";
import "./Menu2.css";
import { Link, useParams } from "react-router-dom";
import MenuCard from "../../../MenuCard/MenuCard";

const Menu2 = () => {
  return (
    <div className="menu-2">
      <div className="container">
        <div className="menu-2-wrapper">
          <Menu2left />

          <Menu2Right />
        </div>
      </div>
    </div>
  );
};

export default Menu2;

function Menu2left() {
  return (
    <div className="menu-2-left">
      <div className="drinks">
        <h2>Drinks</h2>
        <ul>
          <li>
            <Link to="/menu/Oleato">Oleato™</Link>
          </li>
          <li>
            <Link to="/menu/Hot Coffees">Hot Coffees</Link>
          </li>

          <li>
            <Link to="/menu/Hot Teas">Hot Teas</Link>
          </li>

          <li>
            <Link to="/menu/Hot Drinks">Hot Drinks</Link>
          </li>

          <li>
            <Link to="/menu/Frappuccino Blended Beverages">Frappuccino®</Link>
          </li>
         

          <li>
            <Link to="/menu/Cold Coffees">Cold Coffees</Link>
          </li>

          <li>
            <Link to="/menu/Iced Teas">Iced Teas</Link>
          </li>
          <li>
            <Link to="/menu/Frappuccino Blended Beverages">Beverages</Link>
          </li>
        </ul>
      </div>
      <div className="drinks">
        <h2>At Home Coffee</h2>
        <ul>
          <li>
            <Link to="">Oleato™</Link>
          </li>
          <li>
            <Link to="">Hot Coffees</Link>
          </li>

          <li>
            <Link to="">Hot Teas</Link>
          </li>

          <li>
            <Link to="">Hot Drinks</Link>
          </li>

          <li>
            <Link to="">Frappuccino®</Link>
          </li>
          <li>
            <Link to="">Beverages</Link>
          </li>

          <li>
            <Link to="">Cold Coffees</Link>
          </li>

          <li>
            <Link to="">Iced Teas</Link>
          </li>
        </ul>
      </div>
      <div className="drinks">
        <h2>Merchandise</h2>
        <ul>
          <li>
            <Link to="">Oleato™</Link>
          </li>
          <li>
            <Link to="">Hot Coffees</Link>
          </li>

          <li>
            <Link to="">Hot Teas</Link>
          </li>

          <li>
            <Link to="">Hot Drinks</Link>
          </li>

          <li>
            <Link to="">Frappuccino®</Link>
          </li>
          <li>
            <Link to="">Beverages</Link>
          </li>

          <li>
            <Link to="">Cold Coffees</Link>
          </li>

          <li>
            <Link to="">Iced Teas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Menu2Right() {
  
  const data = useContext(ProductContext);
  
  const path = useParams();

  return (
    <>
      <div className="menu-2-right">
        <h2>Menu</h2>
        <p>Drinks</p>
        <hr />

        <div className="menu-container">
          {path?.item === "all"
            ? data.slice(0,8).map((item, index) => <MenuCard item={item} key={index} />)
            : data
                ?.filter((item) => item.subcategory === path?.item)
                .map((item, index) => {
                  return <MenuCard item={item} key={index} />;
                })}
        </div>
      </div>
    </>
  );
}
