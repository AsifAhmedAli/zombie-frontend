import { NavLink } from "react-router-dom";
import Logo from "../assets/site_logo.png";

const Navbar = ({ title }) => {
  const navLinks = [
    {
      id: 1,
      title: "Login/Register",
      link: "/",
    },
    {
      id: 2,
      title: "Product Page",
      link: "/product",
    },
    {
      id: 3,
      title: "Track Order",
      link: "/",
    },
    {
      id: 4,
      title: "Help Center",
      link: "/",
    },
  ];
  return (
    <div className="w-full bg-navbarColor py-4">
      <div className="container w-[85%] mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="w-full">
          <NavLink to="/">
            <img src={Logo} alt="" width={200} />
          </NavLink>
        </div>
        {/* company name */}
        <div className="w-full text-center">
          <h1 className="text-3xl font-semibold text-white">
            {title && "Honda Company Name"}
          </h1>
        </div>

        {/* links */}
        <div className="w-full flex justify-end items-center">
          <ul className="flex items-center gap-4">
            {navLinks.map((item) => (
              <li
                className="text-white font-medium cursor-pointer text-sm"
                key={item.id}
              >
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
