import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import { HERO_FIELDS, SHOWCASE_LABELS } from "../config/homeContentFields";

const Section = ({ title, children }) => (
  <section className="mb-10 rounded-2xl border border-emerald-100/90 bg-emerald-50/30 p-5 sm:p-6">
    <h2 className="mb-4 text-lg font-bold tracking-wide text-emerald-950">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);

const FileRow = ({ label, fieldName, savedUrl, onFile }) => (
  <div className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-gray-800">{label}</p>
      <p className="mt-1 truncate text-xs text-gray-500" title={savedUrl || ""}>
        {savedUrl ? (
          <>
            Custom:{" "}
            <a
              href={savedUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 underline"
            >
              {savedUrl}
            </a>
          </>
        ) : (
          "Site default (code)"
        )}
      </p>
    </div>
    <label className="mt-2 inline-flex cursor-pointer items-center gap-2 sm:mt-0">
      <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-100">
        Choose image
      </span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onFile(fieldName, e.target.files?.[0] || null)}
      />
    </label>
  </div>
);

const HomeContent = ({ token }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pendingFiles, setPendingFiles] = useState({});

  const [promoUrl, setPromoUrl] = useState("");
  const [brandUrl, setBrandUrl] = useState("");
  const [policyExchange, setPolicyExchange] = useState("");
  const [policyQuality, setPolicyQuality] = useState("");
  const [policySupport, setPolicySupport] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/api/home-content`);
      if (data.success) {
        setContent(data.content || {});
      } else {
        toast.error(data.message || "Load failed");
      }
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const onFile = (fieldName, file) => {
    setPendingFiles((prev) => {
      const next = { ...prev };
      if (file) next[fieldName] = file;
      else delete next[fieldName];
      return next;
    });
  };

  const uploadPending = async () => {
    const entries = Object.entries(pendingFiles).filter(([, f]) => f);
    if (entries.length === 0) {
      toast.info("Pehle kam az kam ek image select karein.");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      entries.forEach(([k, f]) => fd.append(k, f));
      const { data } = await axios.post(
        `${backendUrl}/api/home-content/upload`,
        fd,
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message || "Images update ho gaye");
        setPendingFiles({});
        await load();
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
    } finally {
      setSaving(false);
    }
  };

  const savePastedUrls = async () => {
    const body = {};
    if (promoUrl.trim()) body.promoBanner = promoUrl.trim();
    if (brandUrl.trim()) body.brandStory = brandUrl.trim();
    const policy = {};
    if (policyExchange.trim()) policy.exchange = policyExchange.trim();
    if (policyQuality.trim()) policy.quality = policyQuality.trim();
    if (policySupport.trim()) policy.support = policySupport.trim();
    if (Object.keys(policy).length) body.policy = policy;

    if (Object.keys(body).length === 0) {
      toast.info("Koi URL enter karein (promo, brand, ya policy).");
      return;
    }

    setSaving(true);
    try {
      const { data } = await axios.put(`${backendUrl}/api/home-content`, body, {
        headers: { token },
      });
      if (data.success) {
        toast.success(data.message || "Links save ho gaye");
        setPromoUrl("");
        setBrandUrl("");
        setPolicyExchange("");
        setPolicyQuality("");
        setPolicySupport("");
        await load();
      } else {
        toast.error(data.message || "Save failed");
      }
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading && !content) {
    return (
      <div className="py-16 text-center text-sm text-gray-500">Loading…</div>
    );
  }

  const hero = content?.hero || {};
  const categories = content?.categories || {};

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-emerald-950">
          Home page — images & banners
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">
          Yahan se hero slider, category banners, promo / brand story, aur policy
          icons change kar sakte hain. Nayi image select karke &quot;Upload
          selected&quot; dabayein. Cloudinary par upload hogi.
        </p>
      </div>

      <Section title="Hero slider (8 slides)">
        {HERO_FIELDS.map(({ field, label }) => (
          <FileRow
            key={field}
            label={label}
            fieldName={field}
            savedUrl={hero[field.replace("hero_", "")]}
            onFile={onFile}
          />
        ))}
      </Section>

      <Section title="Shop by category — har category ka banner + 4 tasveerain">
        {SHOWCASE_LABELS.map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-100 bg-white/80 p-4"
          >
            <h3 className="mb-3 text-sm font-bold text-emerald-900">{label}</h3>
            <FileRow
              label="Banner"
              fieldName={`cat_${label}_banner`}
              savedUrl={categories[label]?.banner}
              onFile={onFile}
            />
            {[0, 1, 2, 3].map((i) => (
              <FileRow
                key={`${label}-${i}`}
                label={`Grid image ${i + 1}`}
                fieldName={`cat_${label}_img${i}`}
                savedUrl={categories[label]?.images?.[i]}
                onFile={onFile}
              />
            ))}
          </div>
        ))}
      </Section>

      <Section title="Promo banner (Summer collection wala block)">
        <FileRow
          label="Promo background"
          fieldName="promo_banner"
          savedUrl={content?.promoBanner}
          onFile={onFile}
        />
      </Section>

      <Section title="Brand story section">
        <FileRow
          label="Brand story image"
          fieldName="brand_story"
          savedUrl={content?.brandStory}
          onFile={onFile}
        />
      </Section>

      <Section title="Policy icons (footer ke upar 3 chhoti images)">
        <FileRow
          label="Return / exchange icon"
          fieldName="policy_exchange"
          savedUrl={content?.policy?.exchange}
          onFile={onFile}
        />
        <FileRow
          label="Quality icon"
          fieldName="policy_quality"
          savedUrl={content?.policy?.quality}
          onFile={onFile}
        />
        <FileRow
          label="Support icon"
          fieldName="policy_support"
          savedUrl={content?.policy?.support}
          onFile={onFile}
        />
      </Section>

      <div className="sticky bottom-4 z-10 flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-lg backdrop-blur">
        <p className="mr-auto text-xs text-gray-600">
          {Object.keys(pendingFiles).length > 0
            ? `${Object.keys(pendingFiles).length} file(s) ready`
            : "Koi file select nahi"}
        </p>
        <button
          type="button"
          disabled={saving}
          onClick={uploadPending}
          className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800 disabled:opacity-50"
        >
          {saving ? "Uploading…" : "Upload selected images"}
        </button>
      </div>

      <Section title="Ya seedha image URL paste karein (optional)">
        <p className="text-xs text-gray-500">
          Agar image pehle se kisi URL par hosted hai (jaise Cloudinary link), yahan
          paste karke save kar sakte hain — bina file upload ke.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-gray-700">
              Promo banner URL
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={promoUrl}
              onChange={(e) => setPromoUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Brand story URL
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={brandUrl}
              onChange={(e) => setBrandUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Policy — exchange icon URL
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={policyExchange}
              onChange={(e) => setPolicyExchange(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">
              Policy — quality icon URL
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={policyQuality}
              onChange={(e) => setPolicyQuality(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-gray-700">
              Policy — support icon URL
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              value={policySupport}
              onChange={(e) => setPolicySupport(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>
        <button
          type="button"
          disabled={saving}
          onClick={savePastedUrls}
          className="rounded-full border border-emerald-600 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 disabled:opacity-50"
        >
          Save pasted URLs
        </button>
      </Section>
    </div>
  );
};

export default HomeContent;
