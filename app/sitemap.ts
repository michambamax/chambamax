import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://chambamax.com'
  return [{ url: `${base}/`, lastModified: new Date() }]
}
