import { v2 as cloudinary } from "cloudinary";
import homeContentModel from "../models/homeContentModel.js";

const MAIN_ID = "main";

const emptyBase = () => ({
  _id: MAIN_ID,
  hero: {},
  categories: {},
  promoBanner: "",
  brandStory: "",
  policy: {},
});

const normalizeDoc = (doc) => {
  if (!doc) return emptyBase();
  return {
    _id: MAIN_ID,
    hero: { ...(doc.hero || {}) },
    categories: JSON.parse(JSON.stringify(doc.categories || {})),
    promoBanner: doc.promoBanner || "",
    brandStory: doc.brandStory || "",
    policy: { ...(doc.policy || {}) },
  };
};

const deepMergePatch = (prev, patch) => {
  const base = normalizeDoc(prev);
  if (patch.hero && typeof patch.hero === "object") {
    for (const [k, v] of Object.entries(patch.hero)) {
      if (typeof v === "string" && v.trim()) base.hero[k] = v.trim();
    }
  }
  if (patch.categories && typeof patch.categories === "object") {
    for (const [label, cat] of Object.entries(patch.categories)) {
      if (!base.categories[label]) base.categories[label] = { banner: "", images: [] };
      if (cat.banner && String(cat.banner).trim()) {
        base.categories[label].banner = String(cat.banner).trim();
      }
      if (Array.isArray(cat.images)) {
        const arr = [...(base.categories[label].images || [])];
        cat.images.forEach((url, i) => {
          if (url && String(url).trim()) arr[i] = String(url).trim();
        });
        base.categories[label].images = arr;
      }
    }
  }
  if (typeof patch.promoBanner === "string" && patch.promoBanner.trim()) {
    base.promoBanner = patch.promoBanner.trim();
  }
  if (typeof patch.brandStory === "string" && patch.brandStory.trim()) {
    base.brandStory = patch.brandStory.trim();
  }
  if (patch.policy && typeof patch.policy === "object") {
    for (const [k, v] of Object.entries(patch.policy)) {
      if (typeof v === "string" && v.trim()) base.policy[k] = v.trim();
    }
  }
  return base;
};

const applyUploadToPatch = (patch, fieldname, url) => {
  if (fieldname.startsWith("hero_")) {
    if (!patch.hero) patch.hero = {};
    patch.hero[fieldname.slice(5)] = url;
    return;
  }
  if (fieldname === "promo_banner") {
    patch.promoBanner = url;
    return;
  }
  if (fieldname === "brand_story") {
    patch.brandStory = url;
    return;
  }
  if (fieldname.startsWith("policy_")) {
    if (!patch.policy) patch.policy = {};
    patch.policy[fieldname.slice(7)] = url;
    return;
  }
  if (!fieldname.startsWith("cat_")) return;
  const rest = fieldname.slice(4);
  const bannerMatch = rest.match(/^(.+)_banner$/);
  const imgMatch = rest.match(/^(.+)_img(\d+)$/);
  if (!patch.categories) patch.categories = {};
  if (bannerMatch) {
    const label = bannerMatch[1];
    if (!patch.categories[label]) patch.categories[label] = {};
    patch.categories[label].banner = url;
  } else if (imgMatch) {
    const label = imgMatch[1];
    const idx = Number(imgMatch[2]);
    if (!patch.categories[label]) patch.categories[label] = { images: [] };
    if (!Array.isArray(patch.categories[label].images)) {
      patch.categories[label].images = [];
    }
    patch.categories[label].images[idx] = url;
  }
};

export const getHomeContent = async (req, res) => {
  try {
    const doc = await homeContentModel.findById(MAIN_ID).lean();
    const content = normalizeDoc(doc);
    delete content._id;
    res.status(200).json({ success: true, content });
  } catch (error) {
    console.log("getHomeContent: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const putHomeContent = async (req, res) => {
  try {
    const prev = await homeContentModel.findById(MAIN_ID).lean();
    const merged = deepMergePatch(prev, req.body || {});
    await homeContentModel.replaceOne({ _id: MAIN_ID }, merged, { upsert: true });
    res.status(200).json({ success: true, message: "Home content updated" });
  } catch (error) {
    console.log("putHomeContent: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const postHomeContentUploads = async (req, res) => {
  try {
    const files = req.files || [];
    if (files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No image files received",
      });
    }

    const patch = {};
    for (const f of files) {
      const result = await cloudinary.uploader.upload(f.path, {
        resource_type: "image",
      });
      applyUploadToPatch(patch, f.fieldname, result.secure_url);
    }

    const prev = await homeContentModel.findById(MAIN_ID).lean();
    const merged = deepMergePatch(prev, patch);
    await homeContentModel.replaceOne({ _id: MAIN_ID }, merged, { upsert: true });

    res.status(200).json({ success: true, message: "Home images updated" });
  } catch (error) {
    console.log("postHomeContentUploads: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
