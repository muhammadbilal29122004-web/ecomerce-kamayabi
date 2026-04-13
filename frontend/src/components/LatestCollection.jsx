import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import HorizontalCardRow from "./HorizontalCardRow";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"ROHANI"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          KAMAYABI ROHANI MARKAZ ki nayi aur muntakhib rohani collections dekhein.
          Har item asaliyat, khuloos, aur ehtimaam ke sath aap ke liye tayar ki gayi hai.
        </p>
      </div>

      <HorizontalCardRow>
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </HorizontalCardRow>
    </div>
  );
};

export default LatestCollection;
