export const CATEGORY_OPTIONS = [
  "Health & Care",
  "Beauty Core",
  "Fashion & Design",
  "Jewelry",
];

const LEGACY_CATEGORY_MAP = {
  Medicine: "Health & Care",
  Cosmetics: "Beauty Core",
  Cloth: "Fashion & Design",
  Jewelry: "Jewelry",
};

export const normalizeCategory = (category = "") =>
  LEGACY_CATEGORY_MAP[category] || category;

export const encodeCategoryPath = (category = "") =>
  `/category/${encodeURIComponent(normalizeCategory(category))}`;
