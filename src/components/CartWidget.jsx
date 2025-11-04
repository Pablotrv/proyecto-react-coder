import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <span style={{ marginLeft: "5px" }}>0</span>
    </div>
  );
};

export default CartWidget;
