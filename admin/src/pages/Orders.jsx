import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/order/list", {
        headers: { token },
      });
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Status updated");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-emerald-950">Orders</h1>
        <p className="mt-1 text-sm text-emerald-800/65">
          Update status as you pack and ship
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-16 text-center text-emerald-800/70">
          No orders yet.
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {orders.map((order, index) => (
            <li
              key={order._id || index}
              className="rounded-xl border border-emerald-100/90 bg-emerald-50/30 p-4 shadow-sm sm:p-5"
            >
              <div className="grid gap-4 md:grid-cols-[minmax(0,80px)_1fr_1fr_minmax(0,140px)_minmax(0,200px)] md:items-start md:gap-4">
                <p className="text-sm font-bold text-emerald-700">
                  #{orders.length - index}
                </p>

                <div className="min-w-0 text-sm text-emerald-900/90">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-800/60">
                    Items
                  </p>
                  {order.items.map((item, i) => (
                    <p key={i} className="py-0.5">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-emerald-800/70"> × {item.quantity}</span>
                    </p>
                  ))}
                </div>

                <div className="text-sm text-emerald-900/85">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-800/60">
                    Ship to
                  </p>
                  <p className="font-semibold">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  {order.address.motherName && (
                    <p className="text-emerald-800/80">
                      Mother Name: {order.address.motherName}
                    </p>
                  )}
                  <p className="text-emerald-800/80">{order.address.street},</p>
                  <p className="text-emerald-800/80">
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country} {order.address.zipcode}
                  </p>
                  <p className="mt-1 font-medium">{order.address.phone}</p>
                </div>

                <div className="text-sm text-emerald-900/90">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-800/60">
                    Payment
                  </p>
                  <p>Items: {order.items.length}</p>
                  <p>Method: {order.paymentMethod}</p>
                  <p>Status: {order.payment ? "Paid" : "Pending"}</p>
                  {order.paymentScreenshot ? (
                    <a
                      href={order.paymentScreenshot}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block font-medium text-emerald-700 underline"
                    >
                      View screenshot
                    </a>
                  ) : (
                    <p className="text-emerald-800/70">Screenshot: Not uploaded</p>
                  )}
                  <p className="text-emerald-800/70">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-lg font-bold text-emerald-800">
                    {currency(order.amount)}
                  </p>
                </div>

                <div className="md:min-w-[180px]">
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-emerald-800/60">
                    Order status
                  </label>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order._id, e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-emerald-200 bg-white px-3 py-2.5 text-sm font-semibold text-emerald-900"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
