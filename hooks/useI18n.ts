import { I18nContext } from "@/providers/I18nProvider";
import { useContext } from "react";

export function useI18n() {
  const ctx = useContext(I18nContext);

  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return ctx;
}