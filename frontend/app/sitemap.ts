import type { MetadataRoute } from 'next';
import { CASES } from '@/lib/cases';

const BASE_URL = 'https://phasq.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ['', '/agriculture', '/defense', '/space'].map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: path === '' ? 1 : 0.8,
    }));

    const caseRoutes = CASES.map((c) => ({
        url: `${BASE_URL}/case-studies/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...caseRoutes];
}
