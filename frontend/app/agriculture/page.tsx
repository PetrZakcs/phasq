'use client';

import Navbar from "@/components/Navbar";
import SectorHero from "@/components/SectorHero";
import TruthSlider from "@/components/TruthSlider";
import CapabilityList from "@/components/CapabilityList";
import PipelineReveal from "@/components/PipelineReveal";
import Benefits from "@/components/Benefits";
import MissionReports from "@/components/MissionReports";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

export default function AgriculturePage() {
    return (
        <main className="bg-ground text-ink selection:bg-accent/30">
            <Navbar />

            <SectorHero
                tag="AGR"
                eyebrow="Agriculture · Sentinel-1 SAR"
                title={<>Detect drought before the harvest forecast does.</>}
                subtitle="Root-zone soil moisture from radar backscatter — not a satellite photo of a plant that already turned brown. Weekly updates, any weather, any hour."
                primaryCta={{ label: 'Join the pilot list ↗', href: '#waitlist' }}
                secondaryCta={{ label: 'Book a demo', href: CALENDLY_URL, external: true }}
                videoDesktop="/hero-farm-desktop.mp4"
                videoMobile="/hero-farm-mobile.mp4"
                poster="/hero-farm-poster.jpg"
                caption="Aerial farmland — illustrative, not PhasQ output"
            />

            <section id="demo" className="py-24 md:py-32 bg-ground border-t border-line overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
                    <div className="section-label">Same field, same day</div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
                        <h2 className="heading-lg text-ink">
                            What optical sees.<br />
                            What <span className="text-accent">radar</span> sees.
                        </h2>
                        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[400px]">
                            Drag the slider. Left is a standard optical image. Right is PhasQ&apos;s radar
                            backscatter read of the same coordinates — the measurement moisture actually shows
                            up in.
                        </p>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[400px] md:h-[600px] lg:h-[700px]">
                    <TruthSlider
                        beforeImage="/vysocina_optical.png"
                        afterImage="/vysocina_radar.png"
                        beforeLabel="Optical (Sentinel-2)"
                        afterLabel="PhasQ Radar (Sentinel-1)"
                    />
                </div>
            </section>

            <PipelineReveal />

            <CapabilityList
                eyebrow="What it does"
                heading={<>Built for the<br />growing season.</>}
                intro="Four ways radar-derived moisture data plugs into decisions a farm or agronomy team already makes every week."
                items={[
                    { title: 'Root-zone moisture mapping', desc: 'Weekly dielectric-based soil moisture estimates per field, not a vegetation-color proxy.' },
                    { title: 'Harvest timing models', desc: 'Track drydown trends to time harvest windows against real soil conditions, not the calendar.' },
                    { title: 'Yield loss prediction', desc: 'Flag developing drought stress two weeks before it shows up in scouting or optical NDVI.' },
                    { title: 'Variable-rate maps (VRA)', desc: 'Export-ready moisture zones for variable-rate irrigation and input planning.' },
                ]}
            />

            <Benefits />

            <MissionReports />

            <Waitlist />
            <Footer />
        </main>
    );
}
