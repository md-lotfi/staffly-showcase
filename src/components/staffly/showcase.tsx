import { useEffect, useRef, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CheckCheck,
  Clock3,
  Users,
  FileSpreadsheet,
  CalendarDays,
  CalendarCheck,
  Wallet,
  ArrowDown,
  WifiOff,
  ShieldCheck,
  LockKeyhole,
  Database,
  KeyRound,
  FolderOutput,
  Bluetooth,
  Wifi,
  Smartphone,
  QrCode,
  Download,
  CircleCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useLanguage } from "./language";
import { StoreButton } from "./shared";
import { screens } from "./assets";
import { config } from "@/lib/staffly/config";
const featureIcons = [Users, Clock3, CalendarDays, CalendarCheck, Wallet, FileSpreadsheet];
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.06 },
    );
    element.classList.add("reveal-ready");
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
function Heading({
  label,
  title,
  description,
  center = false,
}: {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading ${center ? "centered" : ""}`}>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Phone({
  screen,
  className = "",
  eager = false,
}: {
  screen: "attendance" | "profile" | "checkpoint";
  className?: string;
  eager?: boolean;
}) {
  const { lang, t } = useLanguage();
  return (
    <div className={`phone ${className}`}>
      <div className="phone-speaker" />
      <img
        src={screens[lang][screen]}
        alt={`${t.screenshot} — ${screen === "attendance" ? t.features[1]?.title : screen === "profile" ? t.features[0]?.title : t.features[1]?.title}`}
        width="1080"
        height="1920"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
    </div>
  );
}
function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span />
            {t.eyebrow}
          </span>
          <h1>
            <span>{t.hero[0]}</span>
            <span>{t.hero[1]}</span>
            <span className="hero-accent">{t.hero[2]}</span>
          </h1>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="hero-buttons">
            <StoreButton />
            <Button variant="ghost" asChild className="explore-button">
              <a href="#features">
                {t.explore}
                <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="hero-trust">
            {t.trust.map((v, i) => {
              const Icon = [WifiOff, GlobeIcon, ShieldCheck][i] ?? ShieldCheck;
              return (
                <span key={v}>
                  <Icon size={16} />
                  {v}
                </span>
              );
            })}
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="visual-top-label">
            <span className="tiny-line" />
            {t.android}
          </span>
          <Phone screen="checkpoint" className="hero-phone-back" eager />
          <Phone screen="attendance" className="hero-phone-front" eager />
          <div className="example-chip attendance-chip">
            <div className="chip-icon">
              <CheckCheck size={21} />
            </div>
            <div>
              <small>{t.example}</small>
              <strong>{t.recorded}</strong>
            </div>
          </div>
          <div className="example-chip report-chip">
            <div className="chip-icon cyan">
              <FileSpreadsheet size={20} />
            </div>
            <div>
              <small>{t.example}</small>
              <strong>{t.ready}</strong>
            </div>
          </div>
          <div className="visual-caption">
            <span />
            <span />
            <span />
            {t.android}
          </div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>{t.footerTag}</span>
        <a href="#daily-value" aria-label={t.explore}>
          <ArrowDown size={19} />
        </a>
        <span className="hero-bottom-arabic">STAFFLY / ANDROID</span>
      </div>
    </section>
  );
}
function GlobeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </svg>
  );
}
function Value() {
  const { t } = useLanguage();
  return (
    <section id="daily-value" className="value-section">
      <div className="container">
        <span className="eyebrow">{t.valueLabel}</span>
        <div className="value-grid">
          {t.values.map((v, i) => {
            const Icon = [Clock3, Users, FileSpreadsheet][i] ?? Users;
            return (
              <Reveal key={v.title} className="value-item">
                <span className={`icon-badge badge-${i}`}>
                  <Icon size={23} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function FeatureIllustration({ index }: { index: number }) {
  const { t } = useLanguage();
  const Icon = featureIcons[index] ?? FileSpreadsheet;
  return (
    <div className="feature-illustration">
      <div className="illustration-lines" />
      <div className="illustration-symbol">
        <Icon size={68} strokeWidth={1.3} />
      </div>
      <span className="illustration-tag">
        <Check size={16} />
        {t.features[index]?.title}
      </span>
      <div className="document-lines">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
function Features() {
  const { lang, t } = useLanguage();
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <Reveal>
          <Heading
            label={t.featureLabel}
            title={t.featureTitle}
            description={t.featureDescription}
            center
          />
        </Reveal>
        <Tabs defaultValue="1" dir={lang === "ar" ? "rtl" : "ltr"} className="feature-tabs">
          <TabsList className="feature-tab-list" aria-label={t.nav[0]}>
            {t.features.map((f, i) => {
              const Icon = featureIcons[i] ?? Users;
              return (
                <TabsTrigger value={String(i)} key={f.title} className="feature-tab">
                  <Icon size={18} />
                  <span>{f.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {t.features.map((f, i) => (
            <TabsContent value={String(i)} key={f.title} className="feature-panel">
              <div className="feature-copy">
                <span className="feature-number">0{i + 1} / 06</span>
                <h3>{f.label}</h3>
                <p>{f.description}</p>
                <ul className="check-list">
                  {f.points.map((p) => (
                    <li key={p}>
                      <CircleCheck size={19} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={config.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.get}
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className="feature-media">
                {f.image ? <Phone screen={f.image} /> : <FeatureIllustration index={i} />}
                <span className="media-note">{f.image ? "STAFFLY / ANDROID" : t.example}</span>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
function How() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="section how-section">
      <div className="container">
        <Reveal>
          <Heading label={t.howLabel} title={t.howTitle} description={t.howDescription} />
        </Reveal>
        <div className="steps-grid">
          {t.steps.map((step, i) => (
            <Reveal className="step" key={step.title}>
              <div className="step-top">
                <span className="step-number">0{i + 1}</span>
                {i < 2 && <ArrowRight className="step-arrow" size={22} />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="shared-note">
          <Smartphone size={22} />
          <p>{t.shared}</p>
        </div>
      </div>
    </section>
  );
}
function EmployeeAccess() {
  const { t } = useLanguage();
  return (
    <section id="employee-access" className="section access-section">
      <div className="container access-grid">
        <div className="access-art" aria-hidden="true">
          <div className="access-label">
            <LockKeyhole size={15} />
            {t.personal}
          </div>
          <div className="device-illustration">
            <div className="device-speaker" />
            <div className="qr-wrap">
              <QrCode size={105} strokeWidth={1.4} />
            </div>
            <div className="device-row">
              <Users size={18} />
              <i />
            </div>
            <div className="device-row">
              <Clock3 size={18} />
              <i />
            </div>
            <div className="device-row">
              <CalendarDays size={18} />
              <i />
            </div>
            <span className="device-check">
              <Check size={24} />
            </span>
          </div>
          <div className="sync-line">
            <Bluetooth size={21} />
            <span>········</span>
            <Wifi size={21} />
          </div>
          <div className="access-mini-device">
            <Smartphone size={34} />
            <span>Staffly</span>
          </div>
          <div className="offline-tag">
            <Download size={17} />
            {t.downloaded}
          </div>
        </div>
        <Reveal className="access-copy">
          <span className="release-badge">
            <Sparkles size={14} />
            {config.employeeAccessReleased ? t.available : t.coming}
          </span>
          <Heading label={t.accessLabel} title={t.accessTitle} description={t.accessDescription} />
          <ul className="check-list">
            {t.accessPoints.map((p) => (
              <li key={p}>
                <Check size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="sync-note">
            <Bluetooth size={21} />
            <p>{t.sync}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function Security() {
  const { t } = useLanguage();
  return (
    <section className="section security-section">
      <div className="container">
        <Reveal className="security-top">
          <Heading
            label={t.securityLabel}
            title={t.securityTitle}
            description={t.securityDescription}
          />
          <div className="security-seal" aria-hidden="true">
            <ShieldCheck size={74} strokeWidth={1.15} />
            <span>{t.securityLabel}</span>
          </div>
        </Reveal>
        <div className="security-grid">
          {t.security.map((s, i) => {
            const Icon = [KeyRound, Database, LockKeyhole, FolderOutput][i] ?? ShieldCheck;
            return (
              <Reveal className="security-card" key={s.title}>
                <Icon size={25} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="internet-note">
          <WifiOff size={17} />
          {t.internet}
        </div>
      </div>
    </section>
  );
}
function Pro() {
  const { t } = useLanguage();
  return (
    <section id="staffly-pro" className="section pro-section">
      <div className="container">
        <Reveal>
          <Heading label={t.proLabel} title={t.proTitle} description={t.proDescription} center />
        </Reveal>
        <div className="plans-grid">
          <Reveal className="plan">
            <div className="plan-heading">
              <h3>
                Staffly<span>.</span>
              </h3>
              <span>{t.freeLabel}</span>
            </div>
            <ul className="check-list">
              {t.freePoints.map((p) => (
                <li key={p}>
                  <Check size={19} />
                  {p}
                </li>
              ))}
            </ul>
            <StoreButton label={t.freeNote} secondary />
          </Reveal>
          <Reveal className="plan plan-pro">
            <div className="plan-ribbon">{t.proBadge}</div>
            <div className="plan-heading">
              <h3>
                Staffly <span>Pro</span>
              </h3>
              <span>{t.proPoints[2]}</span>
            </div>
            <ul className="check-list">
              {t.proPoints.map((p) => (
                <li key={p}>
                  <Check size={19} />
                  {p}
                </li>
              ))}
            </ul>
            <StoreButton label={t.plans} />
          </Reveal>
        </div>
        <p className="billing-note">
          <LockKeyhole size={13} />
          {t.billing}
        </p>
      </div>
    </section>
  );
}
function FAQ() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid">
        <Reveal>
          <Heading label={t.faqLabel} title={t.faqTitle} description={t.faqDescription} />
          <a className="text-link" href={`mailto:${config.contact}`}>
            {t.contact}
            <ArrowRight size={17} />
          </a>
        </Reveal>
        <Accordion type="single" collapsible className="faq-list">
          {t.faqs.map((f, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger className="faq-question">{f.q}</AccordionTrigger>
              <AccordionContent className="faq-answer">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="final-cta">
      <div className="container">
        <span className="final-mark" aria-hidden="true">
          <CheckCheck size={29} />
        </span>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalDescription}</p>
        <StoreButton />
        <span className="final-platform">{t.android}</span>
      </div>
    </section>
  );
}
export function Showcase() {
  return (
    <>
      <Hero />
      <Value />
      <Features />
      <How />
      <EmployeeAccess />
      <Security />
      <Pro />
      <FAQ />
      <FinalCTA />
    </>
  );
}
