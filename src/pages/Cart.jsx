import CartContent from "../components/CartContent";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import TopNav from "../components/TopNav";

const Cart = () => {
  return (
    <div>
      <TopNav />
      <Navbar title={true} />
      <SearchBox />
      <CartContent />
    </div>
  );
};

export default Cart;
