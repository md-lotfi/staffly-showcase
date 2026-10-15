import { createFileRoute } from "@tanstack/react-router";
import { Showcase } from "@/components/staffly/showcase";
import { validateLanguageSearch } from "@/lib/staffly/config";
import { pageHead } from "@/lib/staffly/seo";
export const Route = createFileRoute("/")({
  validateSearch: validateLanguageSearch,
  head: ({ match }) => pageHead(match.search.lang ?? "en"),
  component: Showcase,
});
