import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { PRODUCT_CATEGORIES } from "../config/categories";

const Add = ({ token }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(productId);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [existingUrls, setExistingUrls] = useState(["", "", "", ""]);
  const [loadingProduct, setLoadingProduct] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);

  const resetForm = () => {
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setExistingUrls(["", "", "", ""]);
    setName("");
    setDescription("");
    setCategory("");
    setPrice("");
    setBestSeller(false);
  };

  useEffect(() => {
    if (!productId) {
      resetForm();
      setLoadingProduct(false);
      return;
    }

    setLoadingProduct(true);

    const load = async () => {
      try {
        const response = await axios.post(backendUrl + "/api/product/single", {
          productId,
        });

        if (!response.data.success || !response.data.product) {
          toast.error(response.data.message || "Product not found");
          navigate("/list");
          return;
        }

        const p = response.data.product;
        const rawCat = p.category || "";
        setName(p.name || "");
        setDescription(p.description || "");
        setCategory(PRODUCT_CATEGORIES.includes(rawCat) ? rawCat : "");
        if (rawCat && !PRODUCT_CATEGORIES.includes(rawCat)) {
          toast.info("This product had an old category — pick one from the list.");
        }
        setPrice(String(p.price ?? ""));
        setBestSeller(Boolean(p.bestSeller));
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        const imgs = p.image || [];
        setExistingUrls([0, 1, 2, 3].map((i) => imgs[i] || ""));
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Failed to load product");
        navigate("/list");
      } finally {
        setLoadingProduct(false);
      }
    };

    load();
  }, [productId, navigate]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", "");
      formData.append("price", price);
      formData.append("sizes", JSON.stringify([]));
      formData.append("bestSeller", bestSeller);

      if (isEditMode) {
        formData.append("productId", productId);
        const response = await axios.post(
          backendUrl + "/api/product/update",
          formData,
          { headers: { token } }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/list");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/product/add",
          formData,
          { headers: { token } }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          resetForm();
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const preview = (file, index) =>
    file
      ? URL.createObjectURL(file)
      : existingUrls[index] || assets.upload_area;

  if (isEditMode && loadingProduct) {
    return (
      <div className="flex items-center gap-3 text-emerald-800">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-700" />
        <p className="text-lg font-medium">Loading product…</p>
      </div>
    );
  }

  const inputClass =
    "w-full max-w-xl rounded-xl border-2 border-emerald-100 bg-white px-4 py-2.5 text-emerald-950 placeholder:text-emerald-800/35";

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex w-full flex-col items-start gap-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-emerald-950">
          {isEditMode ? "Edit product" : "Add product"}
        </h1>
        <p className="mt-1 text-sm text-emerald-800/65">
          KAMAYABI — images, category, price & details
        </p>
      </div>

      <div className="w-full rounded-xl border border-emerald-100/90 bg-emerald-50/30 p-4">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-900/80">
          Images
        </p>
        {isEditMode && (
          <p className="mb-3 text-xs text-emerald-800/60">
            Leave empty to keep current image; choose a file to replace that
            slot.
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {[
            [image1, setImage1, "image1", 0],
            [image2, setImage2, "image2", 1],
            [image3, setImage3, "image3", 2],
            [image4, setImage4, "image4", 3],
          ].map(([file, setter, id, idx]) => (
            <label key={id} htmlFor={id} className="cursor-pointer">
              <img
                className="h-20 w-20 rounded-xl border-2 border-emerald-200 object-cover shadow-sm transition hover:border-emerald-400"
                src={preview(file, idx)}
                alt={`Upload ${idx + 1}`}
              />
              <input
                onChange={(e) => setter(e.target.files[0] || null)}
                type="file"
                id={id}
                hidden
                accept="image/*"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 text-sm font-semibold text-emerald-900">Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={inputClass}
          type="text"
          placeholder="Product name"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2 text-sm font-semibold text-emerald-900">
          Description
        </p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="Description"
          required
        />
      </div>

      <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-emerald-900">
            Category
          </p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className={inputClass}
            required
          >
            <option value="">Select category</option>
            {PRODUCT_CATEGORIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-emerald-900">Price (PKR)</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className={inputClass}
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="bestSeller"
          checked={bestSeller}
          onChange={() => setBestSeller((prev) => !prev)}
          className="h-4 w-4 rounded border-emerald-300 text-emerald-700 focus:ring-emerald-600"
        />
        <label htmlFor="bestSeller" className="cursor-pointer text-sm font-medium text-emerald-900">
          Featured / best seller
        </label>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="rounded-xl bg-emerald-700 px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-800"
        >
          {isEditMode ? "Update product" : "Add product"}
        </button>
        <button
          type="button"
          className="rounded-xl border-2 border-emerald-200 bg-white px-8 py-2.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          onClick={() => (isEditMode ? navigate("/list") : resetForm())}
        >
          {isEditMode ? "Cancel" : "Reset"}
        </button>
      </div>
    </form>
  );
};

export default Add;
