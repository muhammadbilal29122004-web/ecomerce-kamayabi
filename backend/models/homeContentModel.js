import mongoose from "mongoose";

const homeContentSchema = new mongoose.Schema(
  {
    _id: { type: String, default: "main" },
    hero: { type: Object, default: {} },
    categories: { type: Object, default: {} },
    promoBanner: { type: String, default: "" },
    brandStory: { type: String, default: "" },
    policy: { type: Object, default: {} },
  },
  {
    collection: "homecontents",
    minimize: false,
  }
);

export default mongoose.model("homeContent", homeContentSchema);
