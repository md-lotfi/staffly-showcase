import { content } from "./content";
import { config, type Language } from "./config";
export function pageHead(lang: Language, legal?: "privacy" | "terms") {
  const t = content[lang];
  const title = legal ? `${t[legal]} — Staffly` : t.metaTitle;
  const description = legal ? t.legalNotice : t.metaDescription;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:locale",
        content: lang === "ar" ? "ar_DZ" : lang === "fr" ? "fr_FR" : "en_US",
      },
      ...(legal ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    scripts: legal
      ? []
      : [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Staffly",
              operatingSystem: "Android",
              applicationCategory: "BusinessApplication",
              description: t.metaDescription,
              downloadUrl: config.storeUrl,
              inLanguage: lang,
              publisher: { "@type": "Person", name: config.publisher },
            }),
          },
        ],
  };
}
