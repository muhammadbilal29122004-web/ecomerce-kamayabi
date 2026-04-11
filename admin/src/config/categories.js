/** KAMAYABI product categories (admin dropdown) */
export const PRODUCT_CATEGORIES = [
  "Surah",
  "Naqsh",
  "Taveez",
  "Istikhara",
  "Loh",
  "cara",
  "ring",
  "stone",
];

/** List table: show category as stored (no legacy relabel) */
export const normalizeCategoryLabel = (category = "") => category || "—";
