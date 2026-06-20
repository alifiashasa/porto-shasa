/// <reference types="node" />

import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://shasa.web.id",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Shasafolio",
    href: "/",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "alifiashasa";
export const SOURCE_CODE_GITHUB_REPO = "alifiashasa/porto-shasa";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/alifiashasa/porto-shasa";

export const UTM_PARAMS = {
  utm_source: "shasa.web.id",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
