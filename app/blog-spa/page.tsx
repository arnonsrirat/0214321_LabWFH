"use client";
import { Suspense, useState, useEffect } from "react";
import type { ExternalItem } from "@/lib/external";
import { useRouter, useSearchParams } from "next/navigation";

function BlogSpaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedSource = searchParams.get("source");
  const hasInvalidSource =
    requestedSource !== null &&
    requestedSource !== "products" &&
    requestedSource !== "news";
  const initialSource =
    searchParams.get("source") === "news" ? "news" : "products";
  const initialViewMode =
    searchParams.get("view") === "list" ? "list" : "grid";
  const [items, setItems] = useState<ExternalItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(!hasInvalidSource);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [source, setSource] = useState<"products" | "news">(initialSource);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">(initialViewMode);
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredItems = items.filter((item) => {
    const searchableText = `${item.title} ${item.subtitle}`.toLowerCase();

    return searchableText.includes(normalizedSearchQuery);
  });
  const sourceErrorMessage = hasInvalidSource
    ? `Unknown source "${requestedSource}". Please choose Products or News.`
    : errorMessage;

  function selectSource(s: "products" | "news") {
    if (s === source) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setSource(s);
    router.replace(`/blog-spa?source=${s}`); // ← ไม่ reload
  }

  function selectViewMode(mode: "grid" | "list") {
    if (mode === viewMode) {
      return;
    }

    setViewMode(mode);
    router.push(`/blog-spa?source=${source}&view=${mode}`);
  }

  useEffect(() => {
    fetch(`/api/aggregate?source=${source}`)
      .then((r) => r.json())
      .then((data: { external: ExternalItem[]; error?: string }) => {
        setErrorMessage(data.error ?? "");
        setItems(data.external);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Could not load items. Please try again.");
        setItems([]);
        setIsLoading(false);
      });
  }, [source]); // ← ทํางานใหม่ทุกครั้งที่ source เปลี่ยน
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        🧩 Blog Aggregator (SPA)
      </h1>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => selectSource("products")}
          className={`rounded border px-4 py-2 font-semibold ${
            source === "products" ? "bg-blue-700 text-white" : "bg-white"
          }`}
        >
          Products
        </button>
        <button
          type="button"
          onClick={() => selectSource("news")}
          className={`rounded border px-4 py-2 font-semibold ${
            source === "news" ? "bg-blue-700 text-white" : "bg-white"
          }`}
        >
          News
        </button>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by title or subtitle"
          className="rounded border border-gray-300 px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-200"
        >
          Clear Search
        </button>
        <button
          type="button"
          onClick={() => selectViewMode("grid")}
          className={`rounded border px-4 py-2 font-semibold ${
            viewMode === "grid" ? "bg-green-700 text-white" : "bg-white"
          }`}
        >
          Grid
        </button>
        <button
          type="button"
          onClick={() => selectViewMode("list")}
          className={`rounded border px-4 py-2 font-semibold ${
            viewMode === "list" ? "bg-green-700 text-white" : "bg-white"
          }`}
        >
          List
        </button>
      </div>
      {isLoading ? (
        <p className="text-gray-400">กําลังโหลด...</p>
      ) : sourceErrorMessage ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          <h2 className="font-bold">Something needs your attention</h2>
          <p className="mt-1 text-sm">{sourceErrorMessage}</p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => selectSource("products")}
              className="rounded bg-red-700 px-3 py-2 text-sm font-semibold text-white"
            >
              Show Products
            </button>
            <button
              type="button"
              onClick={() => selectSource("news")}
              className="rounded border border-red-300 bg-white px-3 py-2 text-sm font-semibold text-red-700"
            >
              Show News
            </button>
          </div>
        </div>
      ) : filteredItems.length === 0 ? (
        <p className="text-gray-400">No matching items found.</p>
      ) : (
        <div className={viewMode === "grid" ? "grid grid-cols-2 gap-4" : "space-y-4"}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border bg-white p-4 transition hover:border-blue-400 hover:shadow-sm"
            >
              <h2 className="font-bold text-blue-800">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default function BlogSpaPage() {
  return (
    <Suspense fallback={<main className="p-8 text-gray-400">Loading...</main>}>
      <BlogSpaContent />
    </Suspense>
  );
}
