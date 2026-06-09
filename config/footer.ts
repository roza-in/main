import { footerNavItems } from "./navigation";
import { siteConfig } from "./site";

export const footerConfig = {
  columns: [
    {
      title: "Product",
      links: footerNavItems.product.items,
    },
    {
      title: "Solutions",
      links: footerNavItems.solutions.items,
    },
    {
      title: "Resources",
      links: footerNavItems.resources.items,
    },
    {
      title: "Company",
      links: footerNavItems.company.items,
    },
  ],
  legal: footerNavItems.legal.items,
  copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
  supportEmail: siteConfig.contact.email,
  supportPhone: siteConfig.contact.phone,
  address: siteConfig.contact.address,
  socialLinks: siteConfig.social,
};
export type FooterConfig = typeof footerConfig;
