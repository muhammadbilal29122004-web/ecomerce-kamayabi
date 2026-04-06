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
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">All Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-400">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start border p-4 text-sm text-gray-700"
          >
            {/* Order Index */}
            <p className="font-semibold text-gray-500">#{orders.length - index}</p>

            {/* Items */}
            <div>
              {order.items.map((item, i) => (
                <p key={i} className="py-0.5">
                  {item.name} x {item.quantity}{" "}
                  <span className="text-gray-400">({item.size})</span>
                  {i < order.items.length - 1 && ","}
                </p>
              ))}
            </div>

            {/* Delivery Address */}
            <div>
              <p className="font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street},</p>
              <p>
                {order.address.city}, {order.address.state},{" "}
                {order.address.country} {order.address.zipcode}
              </p>
              <p>{order.address.phone}</p>
            </div>

            {/* Order Meta */}
            <div>
              <p>Items: {order.items.length}</p>
              <p>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="font-semibold mt-1">{currency(order.amount)}</p>
            </div>

            {/* Status Dropdown */}
            <select
              value={order.status}
              onChange={(e) => updateOrderStatus(order._id, e.target.value)}
              className="p-2 border rounded text-sm font-medium bg-white"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
