export const config = {
  storeUrl: "https://play.google.com/store/apps/details?id=com.raystate.staffly",
  contact: "contact@raystate.com",
  publisher: "Laissaoui Mohammed Lotfi",
  employeeAccessReleased: false,
} as const;
export type Language = "en" | "fr" | "ar";
export const languages: Language[] = ["en", "fr", "ar"];
export function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "fr" || value === "ar";
}
export function getDirection(lang: Language) {
  return lang === "ar" ? "rtl" : "ltr";
}
export function validateLanguageSearch(search: Record<string, unknown>): { lang?: Language } {
  return isLanguage(search["lang"]) ? { lang: search["lang"] } : {};
}
