import "./MenuDetails.css";
import { useContext, useState } from "react";
import { ProductContext } from "../../../../context/api";
import small from "../../../../images/small.svg";
import { useParams } from "react-router-dom";
import AddToCart from "../../../UseCart/AddToCart";
import UseCart from "../../../UseCart/UseCart";
import { useCart } from "react-use-cart";
import MuiSelect from "./MuiSelect";

const MenuDetails = () => {
  const [calory, setCalory] = useState("");
  const path = useParams();
  const data = useContext(ProductContext);
  const [curOpen, setCurOpen] = useState(null);
  const { addItem } = useCart();

  const content = data.find((item) => item.id == path.id);

  return (
    <div className="menu-details">
      <div className="menu-con ">
        <div className="details-top ">
          <div className="details-img">
            <img className="img" src={content?.img} alt="" />
          </div>
          <div className="details-title">
            <h1>{content?.name}</h1>
            <p>{calory}</p>
          </div>
        </div>
        <div className="details-bottom">
          <div className="bottom-con">
            <div className="bottom_left">
              <h2>Size Options</h2>
              <hr className="bottom_border"></hr>
              <button
                className=" btn-usecart"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
                aria-controls="offcanvasBottom"
                onClick={() => addItem({ ...content, price: content.price })}
              >
                Add to Order
              </button>

              <div className="size_con">
                {content?.sizes.map((size, index) => {
                  return (
                    <Size
                      item={size}
                      id={index}
                      curOpen={curOpen}
                      setCurOpen={setCurOpen}
                      key={index}
                      setCalory={setCalory}
                    />
                  );
                })}
              </div>
            </div>
            <div className="bottom_right">
              <h2>What's included</h2>
              <hr className="bottom_border"></hr>
              <MuiSelect/>
            </div>
          </div>
        </div>
      </div>
      <AddToCart />
    </div>
  );
};

export default MenuDetails;

function Size({ item, setCalory, curOpen, setCurOpen, id }) {
  const { size, capacity, calories } = item;

  function handleToggle() {
    setCurOpen(id);
  }
  const isOpen = curOpen == id;
  setCalory(calories);
  return (
    <>
      <div className="size1 " onClick={handleToggle}>
        <div className={`${isOpen && "rounded"} `}>
          <img
            style={{
              height:
                size === "Short"
                  ? "20px"
                  : size === "Tall"
                  ? "23px"
                  : size === "Grande"
                  ? "26px"
                  : size === "Venti"
                  ? "29px"
                  : "33px",
              width: "20px",
            }}
            src={small}
            alt=""
          />
        </div>
        <p className="size">{size}</p>
        <p className="capacity">{capacity}</p>
      </div>
    </>
  );
}
