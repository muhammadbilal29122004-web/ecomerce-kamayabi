import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { formatPKR } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer text-emerald-900/85" to={`/product/${id}`}>
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-emerald-50/40 shadow-sm transition-shadow hover:shadow-md">
        <img
          className="w-full h-full object-cover transition ease-in-out hover:scale-110"
          src={image[0]}
          alt="Product"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{formatPKR(price)}</p>
    </Link>
  );
};

export default ProductItem;
