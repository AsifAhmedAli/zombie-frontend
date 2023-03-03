import { NavLink } from "react-router-dom";
import CartBottomContent from "./CartBottomContent";
import CartUpperContent from "./CartUpperContent";

const CartContent = () => {
  return (
    <div className="container mx-auto w-[85%] py-6">
      <NavLink to="/">
        <p className="text-navbarColor text-sm">
          <i className="fa-solid fa-arrow-left mr-2"></i> Continue Shopping
        </p>
      </NavLink>

      {/* Cart upper content */}
      <CartUpperContent />

      {/* cart boottom content */}
      <CartBottomContent />
    </div>
  );
};

export default CartContent;
