import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login successful.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-100/90 via-white to-emerald-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-emerald-100/90 bg-white/95 p-8 shadow-[0_20px_60px_rgba(6,78,59,0.12)]">
        <div className="mb-8 text-center">
          <p className="text-xl font-bold tracking-[0.3em] text-emerald-950">
            KAMAYABI
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.4em] text-emerald-700/90">
            Admin portal
          </p>
        </div>
        <h1 className="mb-6 text-center text-2xl font-bold text-emerald-950">
          Sign in
        </h1>
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div>
            <label
              htmlFor="admin-email"
              className="mb-2 block text-sm font-semibold text-emerald-900/85"
            >
              Email
            </label>
            <input
              id="admin-email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full rounded-xl border-2 border-emerald-100 bg-emerald-50/30 px-4 py-3 text-emerald-950 placeholder:text-emerald-800/40"
              type="email"
              placeholder="admin@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="admin-password"
              className="mb-2 block text-sm font-semibold text-emerald-900/85"
            >
              Password
            </label>
            <input
              id="admin-password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full rounded-xl border-2 border-emerald-100 bg-emerald-50/30 px-4 py-3 text-emerald-950 placeholder:text-emerald-800/40"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            className="w-full rounded-xl bg-emerald-700 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-xs text-emerald-800/50">
          KAMAYABI store management — products & orders
        </p>
      </div>
    </div>
  );
};

export default Login;
