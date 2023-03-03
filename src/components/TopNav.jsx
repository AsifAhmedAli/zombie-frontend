const TopNav = () => {
  return (
    <div
      className="bg-navbarColor text-white py-2"
      style={{
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="container w-[85%] mx-auto flex justify-between items-center">
        {/* left side */}
        <div className="w-full flex items-center gap-8">
          <div className="flex items-center gap-2">
            <i className="fa-brands fa-rocketchat"></i>
            <p className="text-sm">Live Chat</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-phone-volume"></i>
            <p className="text-sm">1-800-555-5555</p>
          </div>
        </div>

        {/* right side */}
        <div className="w-full flex items-center justify-end gap-4">
          <div className="flex gap-4 items-center">
            <i className="fa-brands cursor-pointer fa-facebook-f"></i>
            <i className="fa-brands cursor-pointer fa-twitter"></i>
            <i className="fa-brands cursor-pointer fa-discord"></i>
            <i className="fa-brands cursor-pointer fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
