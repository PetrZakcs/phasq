'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Features from "@/components/Features";
import MissionReports from "@/components/MissionReports";
import ProcessSteps from "@/components/ProcessSteps";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Founder from "@/components/Founder";
import TruthSlider from "@/components/TruthSlider";
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Home() {
  const INSTAGRAM_URL = "https://www.instagram.com/phasq1/";
  const LINKEDIN_URL = "https://www.linkedin.com/company/phasq1";
  const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

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
      <Benefits />
      <ProcessSteps />
      <Pricing />

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
              <a href="#waitlist" className="btn-outline w-fit">
                Join the pilot list ↗
              </a>
            </div>

            <div className="relative aspect-video border border-line overflow-hidden bg-ground flex items-center justify-center">
              <img
                src="/radar.png"
                alt="Sentinel-1 radar backscatter preview"
                className="w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-ground/50 backdrop-blur-sm">
                <div className="eyebrow text-accent mb-2">Field-scale coverage</div>
                <p className="text-ink-soft text-sm max-w-[32ch]">
                  Currently one validated region. Expanding through the pilot program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Founder />
      <FAQ />
      <Waitlist />

      <footer className="py-20 md:py-24 bg-ground border-t border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 mb-16">
            <div className="flex flex-col col-span-2">
              <div className="font-display text-2xl font-bold text-ink mb-6">
                PHASQ<span className="text-accent">.tech</span>
              </div>
              <p className="text-ink-faint text-sm md:text-base leading-relaxed max-w-[320px] mb-8">
                Physics-based radar intelligence. Reading the actual radar return, not a picture of it.
              </p>
              <div className="flex gap-6">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="eyebrow mb-2">Contact</h4>
              <a href="mailto:petr@phasq.com" className="group flex items-center gap-4 text-ink-soft hover:text-ink transition-colors text-sm">
                <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                petr@phasq.com
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-ink-soft hover:text-ink transition-colors text-sm">
                <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all font-data text-[10px] font-medium">
                  CAL
                </div>
                Book a demo
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="eyebrow mb-2">System</h4>
              <span className="font-data text-[10px] text-ink-faint tracking-[0.15em]">v1.2.5 — DEMO MODE</span>
              <span className="font-data text-[10px] text-ink-faint tracking-[0.15em]">© 2026 PHASQ TECHNOLOGIES</span>
            </div>
          </div>

          <div className="pt-10 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-data text-[10px] text-ink-faint tracking-[0.3em] uppercase">
              Sentinel-1 · Sentinel-2 · Google Earth Engine
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
