import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import HomeContent from "./pages/HomeContent";
import Login from "./components/Login";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPage = ({ token }) => {
  const { productId } = useParams();
  return <Add key={productId ?? "add"} token={token} />;
};

const ADMIN_TOKEN_KEY = "admin_token";

const normalizeUrl = (value) => (value || "").trim().replace(/\/+$/, "");

const isLoopbackHost = (value) => {
  if (!value) return false;
  try {
    const { hostname } = new URL(value);
    return hostname === "localhost" || hostname === "127.0.0.1";
  } catch {
    return false;
  }
};

const envBackendUrl = normalizeUrl(import.meta.env.VITE_BACKEND_URL);
const fallbackDevBackendUrl = "http://localhost:4000";

export const backendUrl =
  import.meta.env.DEV && !envBackendUrl
    ? fallbackDevBackendUrl
    : !import.meta.env.DEV && isLoopbackHost(envBackendUrl)
      ? ""
      : envBackendUrl;

if (!backendUrl) {
  console.error(
    "VITE_BACKEND_URL is missing/invalid for this build. Set it to your deployed backend URL."
  );
}

export const currency = (price) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Number(price) || 0);
};

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem(ADMIN_TOKEN_KEY) || ""
  );
  useEffect(() => {
    localStorage.setItem(ADMIN_TOKEN_KEY, token);
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/60">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex min-h-screen flex-col">
          <Navbar setToken={setToken} />
          <div className="flex flex-1 w-full min-w-0">
            <Sidebar />
            <main className="flex-1 overflow-x-auto px-4 py-8 sm:px-6 lg:px-10">
              <div className="mx-auto max-w-6xl rounded-2xl border border-emerald-100/80 bg-white/95 p-6 shadow-[0_12px_40px_rgba(6,78,59,0.06)] sm:p-8">
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/list" replace />}
                  />
                  <Route path="/add" element={<AddPage token={token} />} />
                  <Route
                    path="/edit/:productId"
                    element={<AddPage token={token} />}
                  />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                  <Route
                    path="/home-content"
                    element={<HomeContent token={token} />}
                  />
                  <Route
                    path="*"
                    element={<Navigate to="/list" replace />}
                  />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
