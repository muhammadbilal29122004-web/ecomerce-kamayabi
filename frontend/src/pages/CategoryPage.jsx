import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import jewelryBanner from "../assets/jewelry.png";
import cosmeticsBanner from "../assets/cosmetics.png";
import medicineBanner from "../assets/medicine.png";
import clothBanner from "../assets/modern_hero.png";
import { normalizeCategory } from "../utils/category";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { products } = useContext(ShopContext);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const normalizedCategoryName = normalizeCategory(categoryName);

    const categoryData = {
        Jewellery: {
            banner: jewelryBanner,
            title: "Fine Jewellery",
            desc: "Discover our timeless pieces crafted with precision and elegance."
        },
        "Beauty & Care": {
            banner: cosmeticsBanner,
            title: "Beauty & Care",
            desc: "Enhance your natural beauty with our curated collection of luxury makeup."
        },
        "Health & Care": {
            banner: medicineBanner,
            title: "Health & Care",
            desc: "Your health and wellness are our top priority. Quality pharmaceutical products."
        },
        "Fashion & Design": {
            banner: clothBanner,
            title: "Fashion & Design",
            desc: "Step into the world of style with our premium clothing collection."
        }
    };

    const currentCat = categoryData[normalizedCategoryName] || {
        banner: clothBanner,
        title: normalizedCategoryName,
        desc: "Explore our collection of high-quality products."
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
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6 text-white backdrop-blur-[2px]">
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
                        <select className="px-4 py-2 border-2 border-gray-100 rounded-full text-sm font-medium focus:border-black outline-none transition-colors">
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Price: Low to High</option>
                            <option value="high-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 gap-y-12">
                        {categoryProducts.map((item, index) => (
                            <ProductItem 
                                key={index} 
                                id={item._id} 
                                image={item.image} 
                                name={item.name} 
                                price={item.price} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">No products found yet</h3>
                        <p className="text-gray-400 text-sm mb-6">We're updating our collection for {normalizedCategoryName}. Check back soon!</p>
                        <Link to='/'>
                            <button className="px-8 py-3 bg-black text-white rounded-full text-sm font-bold shadow-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all">
                                RETURN HOME
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            
            {/* Newsletter Section - Brief */}
            <div className="mt-40 bg-gray-900 rounded-[3rem] p-10 sm:p-20 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Want more of {normalizedCategoryName}?</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">Subscribe to get notified about new arrivals, limited editions and exclusive offers in this category.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input type="text" placeholder="Your email address" className="px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white w-full sm:w-80" />
                    <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
