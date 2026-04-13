import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";

const parseIfJsonString = (value, fallback) => {
  if (value === undefined || value === null) return fallback;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

// INFO: Place order with Cash on Delivery
const placeOrder = async (req, res) => {
  try {
    const { userId, paymentMethod } = req.body;
    const items = parseIfJsonString(req.body.items, []);
    const address = parseIfJsonString(req.body.address, {});
    const amount = Number(req.body.amount);

    if (!Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Order items are required" });
    }

    if (!amount || Number.isNaN(amount)) {
      return res
        .status(400)
        .json({ success: false, message: "Valid order amount is required" });
    }

    if (!address || typeof address !== "object") {
      return res
        .status(400)
        .json({ success: false, message: "Delivery address is required" });
    }

    let paymentScreenshot = "";
    if (req.file) {
      const uploaded = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      paymentScreenshot = uploaded.secure_url;
    }

    const finalPaymentMethod = paymentMethod || "Advance Payment";
    if (finalPaymentMethod === "Advance Payment" && !paymentScreenshot) {
      return res.status(400).json({
        success: false,
        message: "Please upload payment screenshot for advance payment",
      });
    }

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: finalPaymentMethod,
      paymentScreenshot,
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Clear user cart after order placed
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.status(200).json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log("Error while placing order: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Get orders for a specific user
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log("Error while fetching user orders: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Get all orders for admin
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log("Error while fetching all orders: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Update order status (admin)
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.status(200).json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log("Error while updating order status: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { placeOrder, userOrders, allOrders, updateOrderStatus };
