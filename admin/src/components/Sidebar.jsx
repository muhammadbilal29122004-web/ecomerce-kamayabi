import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-emerald-100/90 bg-emerald-50/40 md:block lg:w-64">
      <nav className="flex flex-col gap-2 p-4 pt-8">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "admin-nav-active" : ""}`
          }
        >
          <img className="h-6 w-6 opacity-90" src={assets.add_icon} alt="" />
          <span>Add product</span>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "admin-nav-active" : ""}`
          }
        >
          <img className="h-6 w-6 opacity-90" src={assets.parcel_icon} alt="" />
          <span>All products</span>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "admin-nav-active" : ""}`
          }
        >
          <img className="h-6 w-6 opacity-90" src={assets.order_icon} alt="" />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/home-content"
          className={({ isActive }) =>
            `admin-nav-link ${isActive ? "admin-nav-active" : ""}`
          }
        >
          <img className="h-6 w-6 opacity-90" src={assets.upload_area} alt="" />
          <span>Home page media</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
