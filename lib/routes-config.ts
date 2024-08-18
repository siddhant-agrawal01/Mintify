export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Quick Start Guide" },
      { title: "Development" },
      { title: "Global setting" },
      { title: "Navigation" },
    ],
  },
  {
    title: "writing content",
    href: "#",
    items: [
      { title: "Page Tiles and Metadata", href: "#" },
      { title: "Headers & Text", href: "#" },
      { title: "Images and videos", href: "#" },
    ],
  },
  {
    title: "Configurations",
    href: "#",
    items: [
      { title: "Custom Domain", href: "#" },

      { title: "Search Engine Optimization", href: "#" },
      { title: "Redirects and Broken links", href: "#" },
      { title: "Versioning", href: "#" },
      { title: "Editor Permission", href: "#" },
      { title: "Github", href: "#" },
      { title: "Gitlab", href: "#" },
      { title: "SSO", href: "#" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
