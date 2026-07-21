import { footerNavItems } from "./navigation";
import { siteConfig } from "./site";

export const footerConfig = {
  columns: [
    {
      title: "Industries",
      links: footerNavItems.solutions.items,
    },
    {
      title: "Compare",
      links: footerNavItems.compare.items,
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
