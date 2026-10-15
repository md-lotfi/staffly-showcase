(() => {
  "use strict";
  const base = new URL(".", document.currentScript.src);
  const config = window.STAFFLY_SITE || {};
  const languages = ["en", "fr", "ar"];
  const language = document.documentElement.lang;
  const storage = {
    get() {
      try {
        return localStorage.getItem("staffly-language");
      } catch {
        return null;
      }
    },
    set(value) {
      try {
        localStorage.setItem("staffly-language", value);
      } catch {
        /* Preferences are optional. */
      }
    },
  };
  // Old Lovable URLs remain usable; explicit static routes stay authoritative.
  const legacy = new URL(location.href);
  const requested = legacy.searchParams.get("lang");
  if (languages.includes(requested)) {
    const target = new URL(
      `${requested === "en" ? "" : requested + "/"}${document.body.dataset.page || ""}`,
      base,
    );
    legacy.searchParams.delete("lang");
    target.search = legacy.searchParams.toString();
    target.hash = legacy.hash;
    if (target.href !== location.href) {
      location.replace(target.href);
      return;
    }
  }
  document.querySelectorAll("[data-language]").forEach((link) => {
    if (link.tagName === "A")
      link.addEventListener("click", () => storage.set(link.dataset.language));
  });
  storage.set(language);
  document.querySelectorAll("[data-store-link]").forEach((link) => {
    if (/^https:\/\/play\.google\.com\//.test(config.storeUrl || ""))
      link.href = config.storeUrl;
  });
  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    if (config.contact) link.href = `mailto:${config.contact}`;
  });
  document.querySelectorAll("[data-publisher]").forEach((node) => {
    if (config.publisher) node.textContent = config.publisher;
  });
  document.querySelectorAll("[data-release-label]").forEach((node) => {
    node.textContent = config.employeeAccessReleased
      ? node.dataset.available
      : node.dataset.coming;
  });

  const dialog = document.querySelector("#mobile-navigation");
  const opener = document.querySelector("[data-menu-open]");
  const closer = document.querySelector("[data-menu-close]");
  const ready = dialog && typeof dialog.showModal === "function";
  if (ready) {
    document.documentElement.classList.add("navigation-ready");
    opener.addEventListener("click", () => {
      if (!dialog.open) dialog.showModal();
      opener.setAttribute("aria-expanded", "true");
      document.documentElement.classList.add("menu-open");
      closer.focus();
    });
    const close = () => {
      if (dialog.open) dialog.close();
    };
    closer.addEventListener("click", close);
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      if (
        event.target === dialog &&
        (event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom)
      )
        close();
      if (event.target.closest("a")) close();
    });
    dialog.addEventListener("close", () => {
      opener.setAttribute("aria-expanded", "false");
      document.documentElement.classList.remove("menu-open");
      opener.focus({ preventScroll: true });
    });
    matchMedia("(min-width: 1101px)").addEventListener("change", (event) => {
      if (event.matches) close();
    });
  }

  const tabs = [...document.querySelectorAll(".feature-tab")];
  const panels = [...document.querySelectorAll(".feature-panel")];
  if (tabs.length && tabs.length === panels.length) {
    document.querySelector(".feature-tab-list").setAttribute("role", "tablist");
    const select = (index) =>
      tabs.forEach((tab, i) => {
        tab.setAttribute("aria-selected", String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
        tab.dataset.state = i === index ? "active" : "inactive";
        panels[i].hidden = i !== index;
      });
    tabs.forEach((tab, i) => {
      tab.setAttribute("role", "tab");
      panels[i].setAttribute("role", "tabpanel");
      panels[i].setAttribute("aria-labelledby", tab.id);
      panels[i].tabIndex = 0;
      tab.addEventListener("click", () => select(i));
      tab.addEventListener("keydown", (event) => {
        let next;
        const direction = language === "ar" ? -1 : 1;
        if (event.key === "ArrowRight")
          next = (i + direction + tabs.length) % tabs.length;
        if (event.key === "ArrowLeft")
          next = (i - direction + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          select(next);
          tabs[next].focus({ preventScroll: true });
        }
      });
    });
    select(1);
    document.documentElement.classList.add("tabs-ready");
  }

  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  if (!motion.matches && "IntersectionObserver" in window && Element.prototype.animate) {
    const active = new Set();
    const targets = [...document.querySelectorAll(
      ".section-heading, .value-item, .step, .access-copy, .security-card, .plan"
    )];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (motion.matches || entry.target.contains(document.activeElement)) return;
        // Animate only on arrival. The underlying HTML is always visible, even
        // if JavaScript stops, the observer fails, or animation is unavailable.
        const animation = entry.target.animate([
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" });
        active.add(animation);
        const clear = () => active.delete(animation);
        animation.addEventListener("finish", clear, { once: true });
        animation.addEventListener("cancel", clear, { once: true });
      });
    }, { threshold: 0.08 });
    targets.forEach((node) => {
      if (node.getBoundingClientRect().top >= innerHeight) observer.observe(node);
    });
    motion.addEventListener("change", (event) => {
      if (!event.matches) return;
      observer.disconnect();
      [...active].forEach(animation => animation.cancel());
    });
    document.addEventListener("focusin", (event) => {
      [...active].forEach(animation => {
        if (animation.effect.target.contains(event.target)) animation.cancel();
      });
    });
  }
})();
