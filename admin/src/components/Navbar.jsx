import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ setToken }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-100/90 bg-white/90 shadow-[0_8px_30px_rgba(6,78,59,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/list" className="group">
          <p className="text-lg font-bold tracking-[0.28em] text-emerald-950 transition-colors group-hover:text-emerald-800 sm:text-xl">
            KAMAYABI
          </p>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] text-emerald-700/80">
            Admin
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setToken("")}
          className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-semibold text-emerald-900 transition-all hover:border-emerald-300 hover:bg-emerald-100 sm:px-7 sm:text-sm"
        >
          Logout
        </button>
      </div>
      <nav
        className="flex border-t border-emerald-100/80 bg-emerald-50/50 px-2 py-2 md:hidden"
        aria-label="Admin sections"
      >
        {[
          { to: "/add", label: "Add" },
          { to: "/list", label: "Products" },
          { to: "/orders", label: "Orders" },
          { to: "/home-content", label: "Home" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex-1 rounded-lg py-2 text-center text-xs font-semibold tracking-wide transition-colors ${
                isActive
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-emerald-900/75 hover:bg-emerald-100/80"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
