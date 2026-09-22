interface StatNumeric {
    value: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}

export interface CaseStudy {
    slug: string;
    id: string;
    title: string;
    dek: string;
    location: string;
    bbox: string;
    window: string;
    sensor: string;
    stats: { label: string; value: string; numeric?: StatNumeric }[];
    minDb: number;
    maxDb: number;
    meanDb: number;
    verify: {
        product: string;
        polarization: string;
        resolution: string;
        scenes: string;
        bbox: string;
        dateRange: string;
    };
}

// Every entry here is a completed, reproducible run of the pipeline against
// the public Sentinel-1 archive — not a simulation, not a mockup. Add a case
// only once the numbers exist; this file is the whole "evidence log".
export const CASES: CaseStudy[] = [
    {
        slug: 'vysocina-2026',
        id: 'CASE-01',
        title: 'Local calibration finds drought a global constant misses',
        dek: 'The same radar reading over a real Vysočina field says "no risk" against a fixed global threshold, and "mild drought" against the field’s own four-year history. We show both numbers, not just the one that sounds better.',
        location: 'Havlíčkobrodsko, Vysočina, Czech Republic',
        bbox: '49.407°N–49.413°N, 15.535°E–15.546°E',
        window: 'Aug 16–30, 2026',
        sensor: 'Sentinel-1, VV, GRD, 10 m — 6 scenes',
        minDb: -10.86,
        maxDb: -9.61,
        meanDb: -10.24,
        stats: [
            { label: 'Mean σ⁰ (VV)', value: '−10.24 dB', numeric: { value: -10.24, decimals: 2, suffix: ' dB' } },
            { label: 'Local moisture index', value: '68.8%', numeric: { value: 68.8, decimals: 1, suffix: '%' } },
            { label: 'Classification', value: 'Mild drought' },
            { label: '4-yr reference stability', value: '±0.20 dB' },
        ],
        verify: {
            product: 'Sentinel-1 GRD',
            polarization: 'VV',
            resolution: '10 m',
            scenes: '6 scenes',
            bbox: 'POLYGON((15.53498 49.40726, 15.54596 49.40726, 15.54596 49.41347, 15.53498 49.41347, 15.53498 49.40726))',
            dateRange: '2026-08-16 to 2026-08-30',
        },
    },
];

export function getCase(slug: string): CaseStudy | undefined {
    return CASES.find((c) => c.slug === slug);
}
