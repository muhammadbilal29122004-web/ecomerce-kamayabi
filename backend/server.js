import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";

// INFO: Create express app
const app = express();
const port = process.env.PORT || 4000;
connectCloudinary();
let isRetryingDb = false;

// INFO: Middleware
app.use(express.json());
app.use(cors());

// INFO: API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

// INFO: Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const startServer = async () => {
  await connectDB();

  // INFO: Keep retrying DB connection in background without crashing process
  setInterval(async () => {
    if (!isRetryingDb) {
      isRetryingDb = true;
      await connectDB();
      isRetryingDb = false;
    }
  }, 15000);

  app.listen(port, () =>
    console.log(`Server is running on at http://localhost:${port}`)
  );
};

startServer();
