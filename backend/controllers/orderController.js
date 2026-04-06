import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// INFO: Place order with Cash on Delivery
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
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
