'use client';

import WaitlistForm from './WaitlistForm';

export default function Waitlist() {
    return (
        <section id="waitlist" className="py-20 md:py-28 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div className="flex flex-col">
                        <div className="section-label mb-8">Early access</div>
                        <h2 className="heading-lg text-ink mb-6">
                            Get early<br /><span className="text-accent">access.</span>
                        </h2>
                        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[480px]">
                            We&apos;re onboarding a small number of pilot users while we build out real,
                            production Sentinel-1 data — agriculture, infrastructure, and defense operators
                            get priority.
                        </p>
                    </div>

                    <div className="w-full">
                        <WaitlistForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
