import { createFileRoute } from "@tanstack/react-router";
import { LegalNotice } from "@/components/staffly/legal";
import { validateLanguageSearch } from "@/lib/staffly/config";
import { pageHead } from "@/lib/staffly/seo";
export const Route = createFileRoute("/privacy-policy")({
  validateSearch: validateLanguageSearch,
  head: ({ match }) => pageHead(match.search.lang ?? "en", "privacy"),
  component: () => <LegalNotice kind="privacy" />,
});
