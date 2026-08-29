'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Features from "@/components/Features";
import MissionReports from "@/components/MissionReports";
import Coverage from "@/components/Coverage";
import ProcessSteps from "@/components/ProcessSteps";
import Benefits from "@/components/Benefits";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import TruthSlider from "@/components/TruthSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ground text-ink selection:bg-accent/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustLogos />

      {/* Comparison Section — the one moment on this site that proves itself */}
      <section id="demo" className="py-24 md:py-32 bg-ground border-t border-line overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
          <div className="section-label">Same field, same day</div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
            <h2 className="heading-lg text-ink">
              What optical sees.<br />
              What <span className="text-accent">radar</span> sees.
            </h2>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[400px]">
              Drag the slider. Left is a standard optical image. Right is PhasQ&apos;s radar backscatter
              read of the same coordinates — the measurement moisture actually shows up in.
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

      <Features />
      <MissionReports />
      <Coverage />
      <Benefits />
      <ProcessSteps />

      {/* Agriculture — honest early access, no theater */}
      <section className="py-24 md:py-32 bg-surface border-t border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="section-label">Early access — opening Q2 2026</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="flex flex-col">
              <h2 className="heading-lg text-ink mb-6">
                Agriculture<br />intelligence.
              </h2>
              <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-10 max-w-[480px]">
                Crop health, soil moisture, and harvest readiness via Sentinel-1 SAR — moving from a
                validated single-region pipeline (see the verified analysis above) to full field-scale
                coverage. We&apos;re building this in the open, not behind a locked door.
              </p>
              <a href="#waitlist" className="btn-outline group w-fit">
                Join the pilot list
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </div>

            <div className="relative aspect-video border border-line overflow-hidden bg-ground flex items-center justify-center">
              <img
                src="/radar.png"
                alt="Illustrative backscatter visualization"
                className="w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-ground/50 backdrop-blur-sm">
                <div className="eyebrow text-accent mb-2">Field-scale coverage</div>
                <p className="text-ink-soft text-sm max-w-[32ch]">
                  Currently one validated region (see the verified analysis above). Expanding through the
                  pilot program.
                </p>
              </div>
              <span className="absolute bottom-3 right-4 font-data text-[9px] tracking-[0.15em] uppercase text-ink/40">
                Illustrative — not a live field export
              </span>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
