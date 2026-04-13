const normalizeUrl = (value) => (value || "").trim().replace(/\/+$/, "");

const isLoopbackHost = (value) => {
  if (!value) return false;
  try {
    const { hostname } = new URL(value);
    return hostname === "localhost" || hostname === "127.0.0.1";
  } catch {
    return false;
  }
};

const envBackendUrl = normalizeUrl(import.meta.env.VITE_BACKEND_URL);
const fallbackDevBackendUrl = "http://localhost:4000";

export const backendUrl =
  import.meta.env.DEV && !envBackendUrl
    ? fallbackDevBackendUrl
    : !import.meta.env.DEV && isLoopbackHost(envBackendUrl)
      ? ""
      : envBackendUrl;

if (!backendUrl) {
  console.error(
    "VITE_BACKEND_URL is missing/invalid for this build. Set it to your deployed backend URL."
  );
}
