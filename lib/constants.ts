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
  { label: "Checkbox", href: "/components/ui/checkbox" },
  { label: "Input", href: "/components/ui/input" },
  { label: "Radio", href: "/components/ui/radio" },
  { label: "Select", href: "/components/ui/select" },
  { label: "Switch", href: "/components/ui/switch" },
  { label: "Textarea", href: "/components/ui/textarea" },
  { label: "Tabs", href: "/components/ui/tabs" },
];

const blocksComponentsList: SidebarNavigationItem[] = [
  { label: "Badge", href: "/components/blocks/badge" },
  { label: "Accordion", href: "/components/blocks/accordion" },
  { label: "Alert", href: "/components/blocks/alert" },
  { label: "Avatar", href: "/components/blocks/avatar" },
  { label: "Breadcrumb", href: "/components/blocks/breadcrumb" },
  { label: "Card", href: "/components/blocks/card" },
  { label: "Modal", href: "/components/blocks/modal" },
  { label: "Progress", href: "/components/blocks/progress" },
  { label: "Pagination", href: "/components/blocks/pagination" },
  { label: "Sidebar", href: "/components/blocks/sidebar" },
  { label: "Tooltip", href: "/components/blocks/tooltip" },
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
