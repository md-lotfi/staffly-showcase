import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { useLanguage } from "./language";
import { logo } from "./assets";
import { config, languages } from "@/lib/staffly/config";
const anchors = ["features", "how-it-works", "employee-access", "staffly-pro", "faq"];
export function PlayMark() {
  return (
    <svg width="21" height="23" viewBox="0 0 24 26" fill="none" aria-hidden="true">
      <path d="M2 1.5v23l14-11.5L2 1.5Z" fill="currentColor" opacity=".9" />
      <path
        d="m4 1 15 9-3 3L4 1Zm0 24 15-9-3-3L4 25Zm15-15 4 2.2c.7.4.7 1.2 0 1.6L19 16l-3-3 3-3Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function StoreButton({ label, secondary = false }: { label?: string; secondary?: boolean }) {
  const { t } = useLanguage();
  return (
    <Button asChild className={`store-button ${secondary ? "store-secondary" : ""}`}>
      <a href={config.storeUrl} target="_blank" rel="noopener noreferrer">
        <PlayMark />
        <span>{label ?? t.play}</span>
        <ArrowUpRight />
      </a>
    </Button>
  );
}
export function Brand() {
  const { lang } = useLanguage();
  return (
    <Link to="/" search={{ lang }} className="brand" aria-label="Staffly">
      <img src={logo} alt="" width="40" height="40" />
      <span>
        Staffly<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
export function LanguageSwitcher() {
  const { lang, setLanguage, t } = useLanguage();
  return (
    <div className="language-switch" role="group" aria-label={t.language}>
      <Globe size={14} aria-hidden="true" />
      {languages.map((l) => (
        <Button
          key={l}
          variant="ghost"
          aria-pressed={lang === l}
          onClick={() => setLanguage(l)}
          lang={l}
          className={`language-option ${lang === l ? "selected" : ""}`}
        >
          {l === "ar" ? "العربية" : l.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
export function Header() {
  const { lang, t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label={t.menu}>
            {t.nav.map((label, i) => (
              <Link key={label} to="/" search={{ lang }} hash={anchors[i] ?? "features"}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <div className="desktop-language">
              <LanguageSwitcher />
            </div>
            <Button asChild className="header-cta">
              <a href={config.storeUrl} target="_blank" rel="noopener noreferrer">
                {t.get}
                <ArrowUpRight size={15} />
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mobile-menu min-h-11 min-w-11"
                  aria-label={t.menu}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={lang === "ar" ? "left" : "right"}
                dir={lang === "ar" ? "rtl" : "ltr"}
                closeLabel={t.close}
                className="mobile-drawer"
              >
                <SheetTitle>
                  <Brand />
                </SheetTitle>
                <SheetDescription className="sr-only">{t.menu}</SheetDescription>
                <nav>
                  {t.nav.map((label, i) => (
                    <SheetClose asChild key={label}>
                      <Link to="/" search={{ lang }} hash={anchors[i] ?? "features"}>
                        {label}
                        <ArrowRight size={18} />
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <LanguageSwitcher />
                <StoreButton />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  const { lang, t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>{t.footerTag}</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy-policy" search={{ lang }}>
              {t.privacy}
            </Link>
            <Link to="/subscription-terms" search={{ lang }}>
              {t.terms}
            </Link>
            <a href={`mailto:${config.contact}`}>
              {t.contact}
              <ArrowUpRight size={13} />
            </a>
          </div>
          <LanguageSwitcher />
        </div>
        <div className="footer-bottom">
          <span>© 2026 {t.rights}</span>
          <span>
            {t.publisher} <bdi>{config.publisher}</bdi> · {t.country}
          </span>
          <a href={`mailto:${config.contact}`}>{config.contact}</a>
        </div>
      </div>
    </footer>
  );
}
