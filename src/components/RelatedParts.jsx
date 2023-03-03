import { NavLink } from "react-router-dom";
import Image1 from "../assets/rpart1.png";
import Image2 from "../assets/rpart2.png";
import Image3 from "../assets/rpart3.png";
import Image4 from "../assets/rpart4.png";
import Image5 from "../assets/rpart5.png";

const RelatedParts = () => {
  const data = [
    {
      id: 1,
      img: Image1,
      title: "Bolt Bumper",
      serial: "90111-SM4-003",
    },
    {
      id: 2,
      img: Image2,
      title: "Bolt-Washer",
      serial: "90233-SM1-013",
    },
    {
      id: 3,
      img: Image3,
      title: "Bulb (12V 28W/8W)",
      serial: "90111-SM4-003",
    },
    {
      id: 4,
      img: Image4,
      title: "Bulb (H11) (12V 55W)",
      serial: "90111-SM4-003",
    },
    {
      id: 5,
      img: Image5,
      title: "Bulb, Headlight (HB3)",
      serial: "90111-SM4-003",
    },
    {
      id: 6,
      img: Image1,
      title: "Bolt Bumper",
      serial: "90111-SM4-003",
    },
    {
      id: 7,
      img: Image2,
      title: "Bolt-Washer",
      serial: "90233-SM1-013",
    },
    {
      id: 8,
      img: Image3,
      title: "Bulb (12V 28W/8W)",
      serial: "90111-SM4-003",
    },
    {
      id: 9,
      img: Image4,
      title: "Bulb (H11) (12V 55W)",
      serial: "90111-SM4-003",
    },
    {
      id: 10,
      img: Image5,
      title: "Bulb, Headlight (HB3)",
      serial: "90111-SM4-003",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-8 mt-8">
      {data.map((item) => (
        <NavLink to="/">
          <div
            className="w-full flex flex-col justify-center items-center text-center cursor-pointer"
            key={item.id}
          >
            <img src={item.img} alt="" />
            <p className="text-sm text-navbarColor my-2">{item.title}</p>
            <p className="text-sm">{item.serial}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default RelatedParts;
