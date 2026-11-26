/** Canonical path helper shared across navigation links and SPA router. */
export function getUrlForPage(page) {
  if (!page || page === "home") return "/";
  if (["works", "clients", "contact", "softwares", "careers"].includes(page)) return `/${page}`;
  if (page.startsWith("service-")) {
    return `/services/${page.replace("service-", "")}`;
  }
  return `/${page}`;
}

/** Handles client-side SPA navigation on normal left-click while keeping native <a href> crawlable. */
export function handleSpaClick(e, key, setPage, onAfter) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  setPage(key);
  if (onAfter) onAfter();
}
