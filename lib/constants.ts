type SidebarConfig = { // sidebar props, item dari sidebar
  title: string;
  items: SidebarNavigationItem[];
};

type SidebarNavigationItem = { // item dari sidebar navigation
  href: string;
  label: string;
};

const componentsNavigation: SidebarNavigationItem[] = [
  { href: "/components/ui", label: "UI Components" },
  { href: "/components/blocks", label: "Blocks & Sections" },
  { href: "/components/ai", label: "AI Components" },
  { href: "/components/interactions", label: "Interactions" },
];

const componentDocsSection: SidebarNavigationItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Preview", href: "#preview" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Props API", href: "#props-api" },
  { label: "Related", href: "#related" },
];

const uiTitleOverrides: Record<string, string> = {
  // kalau ada nama khusus, override di sini.
  // contoh: "date-picker": "Date Picker"
};

function formatTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getSidebarConfig(pathname: string): SidebarConfig {
  // Semua route docs UI: /components/ui/[slug]
  // /components/ui tetap pakai categories.
  const match = pathname.match(/^\/components\/ui\/([^/]+)/);
  if (match?.[1]) {
    const slug = match[1];
    return {
      title: uiTitleOverrides[slug] ?? formatTitleFromSlug(slug),
      items: componentDocsSection,
    };
  }

  return {
    title: "Categories",
    items: componentsNavigation,
  };
}
