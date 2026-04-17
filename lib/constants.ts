// sidebar props, item dari sidebar
type SidebarConfig = {
  title: string;
  items: SidebarNavigationItem[];
};

// item dari sidebar navigation
type SidebarNavigationItem = {
  href: string;
  label: string;
};

export const componentsNavigation: SidebarNavigationItem[] = [
  { href: "/components/ui", label: "UI Components" },
  { href: "/components/blocks", label: "Blocks & Sections" },
  { href: "/components/ai", label: "AI Components" },
  { href: "/components/interactions", label: "Interactions" },
];

export const componentDocsSection: SidebarNavigationItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Preview", href: "#preview" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Best Practices", href: "#best-practices" },
  { label: "Props API", href: "#props-api" },
  { label: "Related", href: "#related" },
];

const uiComponentsList: SidebarNavigationItem[] = [
  { label: "Button", href: "/components/ui/button" },
  { label: "Input", href: "/components/ui/input" },
  { label: "Select", href: "/components/ui/select" },
];

const blocksComponentsList: SidebarNavigationItem[] = [
  { label: "Card", href: "/components/blocks/card" },
  { label: "Sidebar", href: "/components/blocks/sidebar" },
];

const aiComponentsList: SidebarNavigationItem[] = [
  { label: "AI Chat", href: "/components/ai/chat" },
];

export function getSidebarConfig(pathname: string): SidebarConfig {
  if (pathname.startsWith("/components/ui")) {
    return {
      title: "UI Components",
      items: uiComponentsList,
    };
  }

  if (pathname.startsWith("/components/blocks")) {
    return {
      title: "Blocks & Sections",
      items: blocksComponentsList,
    };
  }

  if (pathname.startsWith("/components/ai")) {
    return {
      title: "AI Components",
      items: aiComponentsList,
    };
  }

  return {
    title: "Categories",
    items: componentsNavigation,
  };
}
