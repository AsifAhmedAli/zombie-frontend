import PaymentImage from "../assets/payment.png";

const CartBottomContent = () => {
  return (
    <div className="w-full border-navbarColor border bg-sectionBg flex justify-between">
      {/* website information */}
      <div className="text-sm w-full">
        {/* heading */}
        <div className="bg-navbarColor text-white py-2 px-2">
          <p>Website Information</p>
        </div>
        {/* content */}
        <div className="px-2 py-5">
          <span>Website Information One</span>
        </div>
      </div>

      {/* Policies */}
      <div className="text-sm w-full">
        {/* heading */}
        <div className="bg-navbarColor text-white py-2 px-2">
          <p>Policies</p>
        </div>
        {/* content */}
        <div className="px-2 py-5">
          <span>Policies One</span>
        </div>
      </div>

      {/* Tools */}
      <div className="text-sm w-full">
        {/* heading */}
        <div className="bg-navbarColor text-white py-2 px-2">
          <p>Tools</p>
        </div>
        {/* content */}
        <div className="px-2 py-5">
          <span>Tools One</span>
        </div>
      </div>

      {/* Links */}
      <div className="text-sm w-full">
        {/* heading */}
        <div className="bg-navbarColor text-white py-2 px-2">
          <p>Links</p>
        </div>
        {/* content */}
        <div className="px-2 py-5">
          <span>Links One</span>
        </div>
      </div>

      {/* Payment */}
      <div className="text-sm w-full">
        {/* heading */}
        <div className="bg-navbarColor text-white py-2 px-2">
          <p>Payment options</p>
        </div>
        {/* content */}
        <div className="px-2 py-5">
          <img src={PaymentImage} alt="" width={200} />
        </div>
      </div>
    </div>
  );
};

export default CartBottomContent;
