import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { content } from "@/lib/staffly/content";
import { getDirection, isLanguage, type Language } from "@/lib/staffly/config";
const LanguageContext = createContext({
  lang: "en" as Language,
  setLanguage: (_lang: Language) => {},
  t: content.en,
});
export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const search = useRouterState({ select: (s) => s.location.search }) as { lang?: Language };
  const lang = isLanguage(search.lang) ? search.lang : "en";
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("staffly-language");
    if (!search.lang && isLanguage(saved) && saved !== "en") {
      void navigate({ to: ".", search: { lang: saved }, replace: true });
    } else {
      setReady(true);
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = getDirection(lang);
    if (search.lang) setReady(true);
    if (ready) localStorage.setItem("staffly-language", lang);
  }, [lang, ready]);
  function setLanguage(next: Language) {
    localStorage.setItem("staffly-language", next);
    void navigate({ to: ".", search: { lang: next }, replace: true, resetScroll: false });
  }
  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t: content[lang] }}>
      <div dir={getDirection(lang)} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
