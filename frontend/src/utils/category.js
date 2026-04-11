/** Collection filter + category URLs — KAMAYABI storefront */
export const CATEGORY_OPTIONS = [
  "Surah",
  "Naqsh",
  "Taveez",
  "Istikhara",
  "Loh",
  "cara",
  "ring",
  "stone",
];

/** Legacy API/DB values → canonical label (extend if old data remains) */
const LEGACY_CATEGORY_MAP = {};

export const normalizeCategory = (category = "") =>
  LEGACY_CATEGORY_MAP[category] || category;

export const encodeCategoryPath = (category = "") =>
  `/category/${encodeURIComponent(normalizeCategory(category))}`;
