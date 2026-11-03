"use client";
import { useMemo, useSyncExternalStore } from "react";
const KEY = "valintaguru-shop-cart-v1";
function snapshot() {
  try {
    return localStorage.getItem(KEY) ?? "[]";
  } catch {
    return "[]";
  }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("vg-cart", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("vg-cart", callback);
  };
}
const hydrationSubscription = () => () => {};
export function useCart() {
  const ready = useSyncExternalStore(
    hydrationSubscription,
    () => true,
    () => false,
  );
  const raw = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const ids = useMemo<string[]>(() => {
    try {
      const value = JSON.parse(raw);
      return Array.isArray(value)
        ? [
            ...new Set(
              value.filter((v: unknown): v is string => typeof v === "string"),
            ),
          ].slice(0, 20)
        : [];
    } catch {
      return [];
    }
  }, [raw]);
  function setIds(next: string[]) {
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("vg-cart"));
    } catch {
      throw new Error(
        "Salli selaimen välttämätön paikallinen tallennus ostoskoria varten.",
      );
    }
  }
  return { ids, setIds, ready };
}
