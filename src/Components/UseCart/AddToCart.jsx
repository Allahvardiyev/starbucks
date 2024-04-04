import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const AddToCart = () => {
  const {
 
    totalUniqueItems,
    
  } = useCart();
  return (
    <>
   <div>
  <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      <Link to="/usecartdetails">Use cart details</Link>
    </div>
    {totalUniqueItems}
    <div className="offcanvas-body small">
     
    </div>
  </div>
</div>

    </>
  );
};

export default AddToCart;
