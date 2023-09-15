import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://manthra.ieeensbm.org/',
      lastModified: new Date(),
    },
  ]
}