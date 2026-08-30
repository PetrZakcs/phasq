import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SectorHero from "@/components/SectorHero";
import CapabilityList from "@/components/CapabilityList";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

export const metadata: Metadata = {
    title: "Space Operations",
    description: "Ground station calibration, atmospheric path-delay, and surface deformation monitoring — our earliest, least developed vertical, stated plainly as a research interest, not a shipped product.",
};

export default function SpacePage() {
    return (
        <main data-sector="space" className="bg-ground text-ink selection:bg-accent/30">
            <Navbar />

            <SectorHero
                tag="SPC"
                eyebrow="Space Operations · Early research interest"
                title={<>Pointing our physics engine at orbit.</>}
                subtitle="Ground station calibration, atmospheric path-delay correction, and surface deformation monitoring for space programs. This is the earliest and least developed of our three verticals — if it's relevant to your program, we'd like to talk."
                primaryCta={{ label: 'Talk to us ↗', href: CALENDLY_URL, external: true }}
                secondaryCta={{ label: 'See the core technology', href: '/#technology' }}
                videoDesktop="/hero-space-desktop.mp4"
                videoMobile="/hero-space-mobile.mp4"
                poster="/hero-space-poster.jpg"
                caption="Illustrative render — not a PhasQ product view"
                videoClassName="saturate-90 contrast-105"
            />

            <CapabilityList
                eyebrow="Where the physics applies"
                heading={<>Same engine,<br />pointed upward.</>}
                intro="Every one of these draws on the same radar backscatter and phase-delay physics as our agriculture and defense work — applied to a different set of problems."
                items={[
                    { title: 'Calibration support', desc: 'Ground-truth backscatter references for SAR sensor calibration and cross-mission validation.' },
                    { title: 'Atmospheric path delay', desc: 'Modeling ionospheric and tropospheric delay effects on radar and GNSS signal paths.' },
                    { title: 'Surface deformation', desc: 'InSAR-based ground and structural deformation monitoring for launch and ground infrastructure.' },
                ]}
            />

            <section className="py-20 md:py-28 bg-surface border-t border-line">
                <div className="max-w-[720px] mx-auto px-6 md:px-10">
                    <div className="section-label">Honest framing</div>
                    <h2 className="heading-md text-ink mb-6">
                        What this actually is today.
                    </h2>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-4">
                        Agriculture is where we have a validated pipeline and a real, reproducible analysis
                        run. Defense is a direction we&apos;re actively pursuing with the same tooling. Space
                        is, honestly, a research interest right now — a hypothesis about where the same
                        physics engine could apply, not a shipped product.
                    </p>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed">
                        If you work in ground segment operations, calibration, or space situational awareness
                        and think there&apos;s a fit, we&apos;d rather have that conversation directly than
                        overstate readiness on a landing page.
                    </p>
                </div>
            </section>

            <ContactCTA
                eyebrow="Get in touch"
                heading={<>Explore a fit<br />with your program.</>}
                subtext="No pricing tier for this yet — we're looking for the right first conversation, not a sales funnel."
            />

            <Footer />
        </main>
    );
}
