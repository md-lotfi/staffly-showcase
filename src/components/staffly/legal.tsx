import { Link } from "@tanstack/react-router";
import { ArrowLeft, FileClock } from "lucide-react";
import { useLanguage } from "./language";
import { config } from "@/lib/staffly/config";
export function LegalNotice({ kind }: { kind: "privacy" | "terms" }) {
  const { lang, t } = useLanguage();
  return (
    <section className="section legal-section container">
      <Link to="/" search={{ lang }} className="text-link">
        <ArrowLeft size={17} />
        {t.home}
      </Link>
      <FileClock size={42} className="legal-icon" />
      <span className="eyebrow">{t.legalTitle}</span>
      <h1>{t[kind]}</h1>
      <h2>{t.legalNotice}</h2>
      <p>{t.legalBody}</p>
      <a className="text-link" href={`mailto:${config.contact}`}>
        {config.contact}
      </a>
    </section>
  );
}
