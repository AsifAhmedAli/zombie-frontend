import React from "react";
import ProductCard from "./ProductCard";

const CartContentLeft = () => {
  const price1 = 179.44;
  const price2 = 279.88;
  return (
    <div className="w-full">
      {/* content */}
      <div className="w-full">
        <div className="w-full p-2 flex justify-center items-center bg-navbarColor mb-4">
          <div className="w-full">&nbsp;</div>
          <div className="w-full text-[15px] text-white">
            <span className="pl-8">Product Description</span>
          </div>
          <div className="w-full text-center text-[15px] text-white">
            <span>Price</span>
          </div>
        </div>
        {/* product card */}
        <div className="w-full bg-navbarColor text-white">
          {/* card one */}
          <ProductCard price={price1} />
          <ProductCard price={price2} />
        </div>
      </div>

      {/* total */}
      <div className="w-full bg-navbarColor p-4 text-white flex justify-end items-center gap-3 my-4">
        <span>(2 Items)</span>
        <span>Subtotal:</span>
        <span>${price1 + price2}</span>
      </div>

      {/* RECENTLY VIEWED OR SHIPPING POLICY */}
      <div className="w-full bg-navbarColor p-4 text-white">
        <p className="text-xl">RECENTLY VIEWED OR SHIPPING POLICY</p>

        <span className="block my-4 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          autem, debitis quidem nisi possimus nihil ratione? Modi rerum quam eum
          dolorem ea, explicabo iusto deleniti saepe, nisi earum eaque iste,
          cupiditate qui esse beatae cum nulla excepturi perspiciatis inventore
          consequuntur possimus molestiae blanditiis consectetur voluptate.
          Nemo, at asperiores repellat sint dolorum unde quidem, facilis libero
          sunt porro incidunt iure delectus eaque, omnis quos! Reprehenderit,
          aperiam ipsa molestiae deserunt eveniet exercitationem autem nemo
          quidem minima ipsam facere libero, assumenda cum maiores beatae
          commodi tempora repellat temporibus eligendi dolorum rerum esse,
          molestias laudantium iste. Eius dicta accusamus at tempore, dolorem
          non placeat?
        </span>

        <span className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          possimus dignissimos quaerat commodi itaque repellendus placeat
          consectetur, incidunt expedita? Nulla accusamus dolorum pariatur
          molestias perferendis cupiditate, fugiat culpa quam! Nihil, architecto
          temporibus ea assumenda sint totam distinctio ipsa accusamus neque
          sequi facere aspernatur voluptatibus laborum tempora! Quo ea
          repudiandae ducimus voluptatum voluptatibus quisquam, neque explicabo
          earum optio molestiae voluptatem. Numquam nostrum maxime beatae
          dolorem! Necessitatibus vel, vitae distinctio tempore magni iure
          blanditiis culpa ipsam sequi animi eveniet deleniti nulla asperiores
          dolorem consequatur hic facilis beatae quidem explicabo cum eaque
          impedit nisi. Officia, dolor voluptatum? Asperiores quisquam unde fuga
          quam quae. Quam saepe, exercitationem esse repellendus iure nesciunt
          maiores eaque quaerat necessitatibus. Blanditiis tenetur accusamus
          reprehenderit voluptatibus quas earum eveniet modi.
        </span>
      </div>
    </div>
  );
};

export default CartContentLeft;
