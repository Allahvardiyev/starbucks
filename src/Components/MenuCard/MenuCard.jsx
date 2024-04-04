import { Link, useParams } from "react-router-dom";
import "./MenuCard.css";

const MenuCard = ({item}) => {
  
  const {subcategory, id,img}=item
  const path=useParams()

  return (
    <>
    <Link className="menuLink" to={`/menu-details/${id}`}>
    <div className="card-container">
        <div className="img-card">
          <img
            src={img}
            alt="Item images"
          />
        </div>
        
        <div>
          <h6 className="card-title">{subcategory} </h6>
        </div>
      </div></Link>
    
    </>
  );
};

export default MenuCard;
