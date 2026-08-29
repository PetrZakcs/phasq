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
        slug: 'andalusia-2023',
        id: 'CASE-01',
        title: 'Mild drought, read straight off the radar return',
        dek: 'A dry July over Andalusia, measured in backscatter — not inferred from a photo of the crop.',
        location: 'Andalusia, Spain',
        bbox: '37.5°N–38.5°N, 6.0°W–5.0°W',
        window: 'Jul 1–31, 2023',
        sensor: 'Sentinel-1, VV, GRD, 10 m — 18 scenes',
        minDb: -45.3,
        maxDb: 25.8,
        meanDb: -11.8,
        stats: [
            { label: 'Mean σ⁰ (VV)', value: '−11.80 dB', numeric: { value: -11.8, decimals: 2, suffix: ' dB' } },
            { label: 'Range', value: '−45.3 to +25.8 dB' },
            { label: 'Classification', value: 'Mild drought' },
            { label: 'Soil moisture index', value: '62%', numeric: { value: 62, suffix: '%' } },
        ],
        verify: {
            product: 'Sentinel-1 GRD',
            polarization: 'VV',
            resolution: '10 m',
            scenes: '18 scenes',
            bbox: 'POLYGON((-6 37.5, -5 37.5, -5 38.5, -6 38.5, -6 37.5))',
            dateRange: '2023-07-01 to 2023-07-31',
        },
    },
];

export function getCase(slug: string): CaseStudy | undefined {
    return CASES.find((c) => c.slug === slug);
}
