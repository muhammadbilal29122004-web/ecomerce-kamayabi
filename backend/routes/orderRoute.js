import express from "express";
import {
  placeOrder,
  userOrders,
  allOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

orderRouter.post("/place", userAuth, placeOrder);
orderRouter.post("/userorders", userAuth, userOrders);
orderRouter.get("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

export default orderRouter;
