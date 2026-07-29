import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com", // TODO: replace with your domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
