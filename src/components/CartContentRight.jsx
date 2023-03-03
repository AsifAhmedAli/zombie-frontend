import { NavLink } from "react-router-dom";

const CartContentRight = () => {
  return (
    <div className="w-full">
      <div className="w-full p-2 flex justify-center items-center bg-navbarColor mb-4">
        <div className="w-full">&nbsp;</div>
      </div>

      {/* content */}
      <div className="w-full ml-4 bg-navbarColor p-4 pr-8">
        {/* price */}
        <div>
          <span className="text-white">(2 Items) Subtotal: $459.32</span>
        </div>

        {/* secure */}
        <div className="bg-buttonRed text-white text-center text-sm py-[10px] my-5">
          <NavLink to="/">
            <i className="fa-solid fa-lock"></i> Secure Check out
          </NavLink>
        </div>

        {/* divider */}
        <div className="w-full flex items-center gap-2">
          <div className="h-[2px] bg-white w-full"></div>
          <div className="w-max text-white">OR</div>
          <div className="h-[2px] bg-white w-full"></div>
        </div>

        {/* paypal button */}
        <div className="bg-paypal text-white text-center text-sm py-[10px] my-5">
          <NavLink to="/">
            <i className="fa-brands fa-paypal"></i> Paypal
          </NavLink>
        </div>

        {/* affirm button */}
        <div className="bg-arrifm text-white text-center text-sm py-[10px] my-5">
          <NavLink to="/">Affirm</NavLink>
        </div>

        {/* affirm button */}
        <div className="bg-klarna text-white text-center text-sm py-[10px] my-5">
          <NavLink to="/">Klarna</NavLink>
        </div>

        {/* tax */}
        <div className="text-center mb-3">
          <span className="text-white text-sm">
            Estimate your shipping and tax: $20.15
          </span>
        </div>
      </div>

      {/* RECENTLY VIEWED / OR SHIPPING POLICY */}
      <div className="w-full ml-4 bg-navbarColor p-4 pr-8 mt-4 pb-5">
        <p className="text-xl text-white">RECENTLY VIEWED OR SHIPPING POLICY</p>

        <span className="block my-4 text-sm text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          tenetur dicta, architecto labore obcaecati error sed asperiores nemo
          unde iure mollitia quae delectus quasi iusto animi dolore, tempora
          odit debitis! Error amet dolorum deserunt vero provident sequi quaerat
          voluptatem unde corporis harum, similique natus praesentium inventore
          minus architecto, non consectetur aspernatur aliquam expedita modi
          tempore cupiditate hic! Hic tempora magnam molestias magni possimus at
          recusandae distinctio voluptate eos provident, sequi nulla voluptas
          numquam quam sed accusamus sit quos ducimus molestiae eaque illo modi
          voluptates. Labore, necessitatibus ipsa. Libero nobis qui expedita
          nesciunt sint, numquam amet laudantium? Harum quae ad labore inventore
          ipsum molestias quibusdam, debitis error veniam delectus ipsam
          aperiam, minus laborum exercitationem blanditiis id dolorem aliquid
          iure? Non reprehenderit odio repellat odit! Error nostrum tenetur
          saepe consequatur et nulla enim mollitia quas voluptates, impedit,
          minima sint tempore modi. Vitae dolorum, sapiente dignissimos natus
          nobis autem quae quis qui nam!
        </span>
      </div>
    </div>
  );
};

export default CartContentRight;
