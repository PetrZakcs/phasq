'use client';

export default function TrustLogos() {
    // What the analysis is actually built on — public, verifiable infrastructure.
    // Not a claim of partnership or endorsement, just the supply chain.
    const stack = [
        { name: 'Sentinel-1', label: 'C-BAND SAR' },
        { name: 'Sentinel-2', label: 'OPTICAL REFERENCE' },
        { name: 'Copernicus Data Space', label: 'DATA ACCESS' },
        { name: 'Google Earth Engine', label: 'COMPUTE' },
    ];

    return (
        <section className="py-10 border-b border-line bg-ground/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center eyebrow mb-8">
                    Built on open Earth observation infrastructure — not proprietary claims
                </p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-4 items-baseline">
                    {stack.map((s) => (
                        <div key={s.name} className="flex flex-col items-center gap-1">
                            <span className="text-[15px] font-semibold text-ink-soft tracking-tight">
                                {s.name}
                            </span>
                            <span className="font-data text-[9px] tracking-[0.15em] text-ink-faint">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
