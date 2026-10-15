import { describe, expect, it } from "vitest";
import { config, getDirection, isLanguage, validateLanguageSearch } from "@/lib/staffly/config";
describe("Staffly product rules", () => {
  it("keeps employee access unreleased until confirmed", () => {
    expect(config.employeeAccessReleased).toBe(false);
  });
  it("downloads the specified Android app", () => {
    expect(config.storeUrl).toBe(
      "https://play.google.com/store/apps/details?id=com.raystate.staffly",
    );
  });
  it("uses RTL only for Arabic", () => {
    expect(getDirection("ar")).toBe("rtl");
    expect(getDirection("en")).toBe("ltr");
    expect(getDirection("fr")).toBe("ltr");
  });
  it("supports exactly the requested languages", () => {
    expect(["en", "fr", "ar"].every(isLanguage)).toBe(true);
    expect(isLanguage("de")).toBe(false);
  });
  it("falls back to English for invalid language input", () => {
    expect(validateLanguageSearch({ lang: "invalid" })).toEqual({});
  });
});
