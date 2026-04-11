import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import HorizontalCardRow from "../components/HorizontalCardRow";
import clothBanner from "../assets/modern_hero.png";
import { normalizeCategory } from "../utils/category";
import { useHomeContent } from "../context/HomeContentContext";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { products } = useContext(ShopContext);
    const { mergedShowcase } = useHomeContent();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const normalizedCategoryName = normalizeCategory(categoryName);

    const showcaseMeta = mergedShowcase.find(
        (c) => normalizeCategory(c.label) === normalizedCategoryName
    );

    const currentCat = showcaseMeta
        ? {
              banner: showcaseMeta.banner,
              title: showcaseMeta.bannerTitle,
              desc: showcaseMeta.pageDesc,
          }
        : {
              banner: clothBanner,
              title: normalizedCategoryName,
              desc: "Explore our collection of high-quality products.",
          };

    useEffect(() => {
        const filtered = products.filter(
            (item) => normalizeCategory(item.category) === normalizedCategoryName
        );
        setCategoryProducts(filtered);
        window.scrollTo(0, 0);
    }, [normalizedCategoryName, products]);

    return (
        <div className="pb-20">
            {/* Category Hero Section */}
            <div className="relative h-[300px] sm:h-[500px] overflow-hidden rounded-[2.5rem] mb-16 shadow-2xl">
                <img 
                    src={currentCat.banner} 
                    alt={categoryName} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-950/55 p-6 text-center text-white backdrop-blur-[2px]">
                    <h4 className="text-sm tracking-[0.4em] uppercase opacity-70 mb-4 animate-pulse">Category Showcase</h4>
                    <h1 className="text-4xl sm:text-7xl font-bold italic mb-6 tracking-tight">
                        {currentCat.title}
                    </h1>
                    <p className="max-w-2xl text-gray-300 text-sm sm:text-lg leading-relaxed">
                        {currentCat.desc}
                    </p>
                </div>
            </div>

            {/* Product Listing Section */}
            <div className="px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Items in {normalizedCategoryName}
                        </h2>
                        <p className="text-gray-400 text-sm">Showing {categoryProducts.length} results</p>
                    </div>
                    <div className="flex gap-4">
                        <select className="rounded-full border-2 border-emerald-100 px-4 py-2 text-sm font-medium outline-none transition-colors focus:border-emerald-600">
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Price: Low to High</option>
                            <option value="high-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {categoryProducts.length > 0 ? (
                    <HorizontalCardRow gridClassName="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-10 md:gap-y-12">
                        {categoryProducts.map((item, index) => (
                            <ProductItem 
                                key={index} 
                                id={item._id} 
                                image={item.image} 
                                name={item.name} 
                                price={item.price} 
                            />
                        ))}
                    </HorizontalCardRow>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-emerald-200 bg-emerald-50/50 py-20">
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found yet</h3>
                        <p className="text-gray-400 text-sm mb-6">We're updating our collection for {normalizedCategoryName}. Check back soon!</p>
                        <Link to='/'>
                            <button className="transform rounded-full bg-emerald-700 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-emerald-800">
                                RETURN HOME
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            
            {/* Newsletter Section - Brief */}
            <div className="mt-40 rounded-[3rem] bg-emerald-900 p-10 text-center text-white sm:p-20">
                <h2 className="text-3xl font-bold mb-4">Want more of {normalizedCategoryName}?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">Subscribe to get notified about new arrivals, limited editions and exclusive offers in this category.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input type="text" placeholder="Your email address" className="px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white w-full sm:w-80" />
                    <button className="rounded-full bg-white px-10 py-4 font-bold text-emerald-800 transition-all hover:bg-emerald-50">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
