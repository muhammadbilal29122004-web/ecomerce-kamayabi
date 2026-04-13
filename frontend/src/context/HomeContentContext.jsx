import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { navCategoryShowcase } from "../config/navCategoryShowcase";

const HomeContentContext = createContext(null);

const backendUrl = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/+$/, "");

export const HomeContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/home-content`);
        if (!cancelled && data.success) setContent(data.content || {});
      } catch {
        if (!cancelled) setContent({});
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => {
    const heroUrls = content?.hero || {};
    const apiCategories = content?.categories || {};
    const mergedShowcase = navCategoryShowcase.map((cat) => {
      const o = apiCategories[cat.label] || {};
      const banner =
        cat.label === "Surah"
          ? cat.banner
          : (o.banner && String(o.banner).trim()) || cat.banner;
      const images = cat.images.map(
        (img, i) => (o.images && o.images[i] && String(o.images[i]).trim()) || img
      );
      return { ...cat, banner, images };
    });

    return {
      loaded,
      heroUrls,
      mergedShowcase,
      promoBannerUrl: (content?.promoBanner && String(content.promoBanner).trim()) || "",
      brandStoryUrl: (content?.brandStory && String(content.brandStory).trim()) || "",
      policyUrls: content?.policy || {},
    };
  }, [content, loaded]);

  return (
    <HomeContentContext.Provider value={value}>{children}</HomeContentContext.Provider>
  );
};

export const useHomeContent = () => {
  const ctx = useContext(HomeContentContext);
  if (!ctx) {
    throw new Error("useHomeContent must be used within HomeContentProvider");
  }
  return ctx;
};
