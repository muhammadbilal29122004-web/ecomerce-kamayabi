import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import HorizontalCardRow from "./HorizontalCardRow";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"POPULAR"} text2={"ROHANI PICKS"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          KAMAYABI ROHANI MARKAZ ke sab se zyada pasand kiye jane wale items.
          Asaliyat, behtareen quality, aur customer trust ki bunyaad par muntakhib.
        </p>
      </div>
      <HorizontalCardRow>
        {bestSeller.map((item, index) => (
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

export default BestSeller;
