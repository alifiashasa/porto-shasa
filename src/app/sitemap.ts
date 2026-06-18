import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getPostsByCategory } from "@/features/blog/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const components = getPostsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/resume"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...components];
}
