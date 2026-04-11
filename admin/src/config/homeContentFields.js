/** Must match frontend Hero `imageKey` and multer field names `hero_*` */
export const HERO_FIELDS = [
  { field: "hero_surah", label: "Surah slide" },
  { field: "hero_naqsh", label: "Naqsh slide" },
  { field: "hero_taweez", label: "Taweez slide" },
  { field: "hero_istikhara", label: "Istikhara slide" },
  { field: "hero_loh", label: "Loh slide" },
  { field: "hero_cara", label: "Cara slide" },
  { field: "hero_ring", label: "Ring slide" },
  { field: "hero_stone", label: "Stone slide" },
];

/** Must match `navCategoryShowcase` labels and `cat_${label}_*` field names */
export const SHOWCASE_LABELS = [
  "Surah",
  "Naqsh",
  "Taveez",
  "Istikhara",
  "Loh",
  "cara",
  "ring",
  "stone",
];
