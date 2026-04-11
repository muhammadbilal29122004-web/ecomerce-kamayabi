import express from "express";
import {
  getHomeContent,
  putHomeContent,
  postHomeContentUploads,
} from "../controllers/homeContentController.js";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/multer.js";

const homeContentRouter = express.Router();

homeContentRouter.get("/", getHomeContent);
homeContentRouter.put("/", adminAuth, putHomeContent);
homeContentRouter.post(
  "/upload",
  adminAuth,
  upload.any(),
  postHomeContentUploads
);

export default homeContentRouter;
