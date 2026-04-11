import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { normalizeCategoryLabel } from "../config/categories";

const List = ({ token }) => {
  const [listProducts, setListProducts] = useState([]);

  const fetchListProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setListProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.info(response.data.message);
        await fetchListProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold text-emerald-950">All products</h1>
        <p className="mt-1 text-sm text-emerald-800/65">
          {listProducts.length} item{listProducts.length === 1 ? "" : "s"} in catalogue
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-emerald-100/90">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[48px_72px_1fr_1.4fr_120px_100px_120px] items-center gap-2 border-b border-emerald-100 bg-emerald-700 px-3 py-3 text-xs font-bold uppercase tracking-wider text-white">
            <span>#</span>
            <span>Img</span>
            <span>Name</span>
            <span className="hidden lg:block">Description</span>
            <span>Category</span>
            <span>Price</span>
            <span className="text-center">Actions</span>
          </div>
          {listProducts.length === 0 ? (
            <p className="px-4 py-12 text-center text-emerald-800/60">
              No products yet. Use <strong>Add product</strong> to create one.
            </p>
          ) : (
            listProducts.map((item, index) => (
              <div
                className="grid grid-cols-[48px_72px_1fr_1.4fr_120px_100px_120px] items-center gap-2 border-b border-emerald-50 px-3 py-3 text-sm text-emerald-900/90 odd:bg-emerald-50/40 hover:bg-emerald-50/80"
                key={item._id || index}
              >
                <p className="font-medium text-emerald-700">{index + 1}</p>
                <img
                  className="h-12 w-12 rounded-lg object-cover ring-1 ring-emerald-100"
                  src={item.image[0]}
                  alt=""
                />
                <p className="truncate font-medium" title={item.name}>
                  {item.name}
                </p>
                <p className="hidden line-clamp-2 text-xs text-emerald-800/75 lg:block" title={item.description}>
                  {item.description}
                </p>
                <p className="text-xs font-medium">
                  {normalizeCategoryLabel(item.category)}
                </p>
                <p className="text-sm font-semibold tabular-nums">
                  {currency(item.price)}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Link
                    to={`/edit/${item._id}`}
                    className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-800"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeProduct(item._id)}
                    className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
