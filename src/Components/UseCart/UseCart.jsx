import { useCart } from "react-use-cart";

const UseCart = () => {
  const { items } = useCart();

  return (
    <>
    <div className="d-flex flex-wrap gap-4 justify-between">
    {items.map((item, index) => {
        return <Cart  item={item} key={index} />;
      })}
    </div>
     
    </>
  );
};

export default UseCart;

function Cart({item}) {
  const { removeItem, updateItemQuantity } = useCart();
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item?.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <button onClick={()=>removeItem(item.id)}>&times;</button>
          <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={()=>history.back()}>Back</button>
        
        </div>
      </div>
    </>
  );
}
