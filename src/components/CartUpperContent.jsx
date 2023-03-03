import CartContentLeft from "./CartContentLeft";
import CartContentRight from "./CartContentRight";

const CartUpperContent = () => {
  return (
    <div className="w-full flex justify-between py-6">
      {/* left */}
      <div className="w-8/12">
        <CartContentLeft />
      </div>

      {/* right */}
      <div className="w-4/12 overflow-x-hidden">
        <CartContentRight />
      </div>
    </div>
  );
};

export default CartUpperContent;
