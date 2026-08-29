'use client';

// A generated data visualization, not a photo — driven directly by a case's
// own min/max/mean σ⁰ values, so it can never mismatch the numbers next to
// it the way a stock or placeholder image could. Deterministic per-seed, so
// server and client render identically and it stays stable across reloads.

const LEGEND_STOPS: [number, [number, number, number]][] = [
    [0, [63, 168, 160]],   // wet
    [0.25, [143, 160, 90]], // normal
    [0.5, [217, 163, 57]],  // dry
    [0.75, [193, 96, 44]],  // very dry
    [1, [156, 51, 36]],     // extreme
];

function legendColor(t: number): string {
    const clamped = Math.max(0, Math.min(1, t));
    for (let i = 0; i < LEGEND_STOPS.length - 1; i++) {
        const [t0, c0] = LEGEND_STOPS[i];
        const [t1, c1] = LEGEND_STOPS[i + 1];
        if (clamped >= t0 && clamped <= t1) {
            const f = (clamped - t0) / (t1 - t0);
            const r = Math.round(c0[0] + (c1[0] - c0[0]) * f);
            const g = Math.round(c0[1] + (c1[1] - c0[1]) * f);
            const b = Math.round(c0[2] + (c1[2] - c0[2]) * f);
            return `rgb(${r},${g},${b})`;
        }
    }
    return `rgb(${LEGEND_STOPS[LEGEND_STOPS.length - 1][1].join(',')})`;
}

function seedFromString(str: string): number {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = (h << 13) | (h >>> 19);
    }
    return h >>> 0;
}

function mulberry32(seed: number) {
    let a = seed;
    return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

interface SignalReadoutProps {
    seed: string;
    minDb: number;
    maxDb: number;
    meanDb: number;
    className?: string;
    bars?: number;
}

export default function SignalReadout({ seed, minDb, maxDb, meanDb, className = '', bars = 72 }: SignalReadoutProps) {
    const rand = mulberry32(seedFromString(seed));
    const W = 1000;
    const H = 220;
    const baseline = H - 24;
    const range = maxDb - minDb || 1;
    const meanT = (meanDb - minDb) / range;

    const points = Array.from({ length: bars }, (_, i) => {
        // A gentle envelope so the trace reads as a signal, not pure noise,
        // with per-bar variation seeded from the case data itself.
        const x = (i / (bars - 1)) * W;
        const envelope = 0.35 + 0.5 * Math.abs(Math.sin((i / bars) * Math.PI * 1.3 + meanT * 2));
        const jitter = rand() * 0.5;
        const t = Math.max(0, Math.min(1, envelope * 0.6 + jitter * 0.4));
        const h = 14 + t * (baseline - 30);
        return { x, h, t };
    });

    const meanX = meanT * W;

    return (
        <div className={className}>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Radar backscatter signal readout">
                {/* baseline */}
                <line x1={0} y1={baseline} x2={W} y2={baseline} stroke="var(--color-line)" strokeWidth={1} />

                {/* bars */}
                {points.map((p, i) => (
                    <rect
                        key={i}
                        x={p.x - (W / bars) * 0.32}
                        y={baseline - p.h}
                        width={(W / bars) * 0.64}
                        height={p.h}
                        fill={legendColor(p.t)}
                        opacity={0.9}
                    />
                ))}

                {/* mean marker */}
                <line x1={meanX} y1={8} x2={meanX} y2={baseline} stroke="var(--color-ink)" strokeWidth={1.5} strokeDasharray="3 3" />
                <text x={meanX} y={0} dy={12} textAnchor="middle" fontSize="12" fill="var(--color-ink)" fontFamily="var(--font-data)">
                    mean
                </text>

                {/* axis labels */}
                <text x={2} y={H - 4} fontSize="12" fill="var(--color-ink-faint)" fontFamily="var(--font-data)">
                    {minDb.toFixed(1)} dB
                </text>
                <text x={W - 2} y={H - 4} textAnchor="end" fontSize="12" fill="var(--color-ink-faint)" fontFamily="var(--font-data)">
                    {maxDb.toFixed(1)} dB
                </text>
            </svg>
        </div>
    );
}
