export const CATEGORY_OPTIONS = [
  "Health & Care",
  "Beauty & Care",
  "Fashion & Design",
  "Jewellery",
];

const LEGACY_CATEGORY_MAP = {
  Medicine: "Health & Care",
  Cosmetics: "Beauty & Care",
  Cloth: "Fashion & Design",
  Jewelry: "Jewellery",
  Jewellery: "Jewellery",
  "Beauty Core": "Beauty & Care",
};

export const normalizeCategory = (category = "") =>
  LEGACY_CATEGORY_MAP[category] || category;

export const encodeCategoryPath = (category = "") =>
  `/category/${encodeURIComponent(normalizeCategory(category))}`;
