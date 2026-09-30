import type { Metadata } from "next";
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
import PipelineReveal from "@/components/PipelineReveal";
import AgricultureTeaser from "@/components/AgricultureTeaser";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PhasQ — Radar Intelligence Platform",
  description: "Physics-based Synthetic Aperture Radar analysis for agriculture, defense, and space. All-weather, day-or-night — verified against the public Sentinel-1 archive.",
};

export default function Home() {
  return (
    <main className="bg-ground text-ink selection:bg-accent/30">
      <Navbar />
      <Hero />
      <TrustLogos />

      {/* Comparison Section — the one moment on this site that proves itself */}
      <section id="demo" className="py-20 md:py-28 bg-ground border-t border-line overflow-hidden">
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
      <PipelineReveal />

      <AgricultureTeaser />

      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
