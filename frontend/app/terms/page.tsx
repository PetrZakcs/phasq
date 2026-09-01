import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Terms of Use",
    description: "The terms covering your use of the phasq.com website and the early-access waitlist.",
};

export default function TermsPage() {
    return (
        <LegalPage title="Terms of Use" updated="September 1, 2026">
            <section>
                <h2>1. What this covers</h2>
                <p>
                    These terms cover your use of the phasq.com website and the early-access waitlist.
                    PhasQ is at an early stage: what&apos;s described on this site — pricing, capabilities,
                    timelines — reflects where things actually stand today, and it changes. Nothing on this
                    site is a binding offer, and joining the waitlist doesn&apos;t create a contract between
                    us. A real commercial agreement, if we get there, would be its own separate document.
                </p>
            </section>

            <section>
                <h2>2. Who&apos;s behind this</h2>
                <p>
                    phasq.com is operated by Petr Žák, trading as PhasQ — an independent project based in
                    the Czech Republic, ahead of formal company registration.
                    <span className="fill-in">[once a company is registered, this section should be updated
                    with its legal name and registration number]</span>
                </p>
            </section>

            <section>
                <h2>3. What you can do here</h2>
                <p>
                    Browse the site, read the published analyses (see the case studies), and join the
                    waitlist if you&apos;re a genuine prospective user, partner, or investor. Please
                    don&apos;t scrape, republish, or present this content as your own.
                </p>
            </section>

            <section>
                <h2>4. What&apos;s real versus what&apos;s a plan</h2>
                <p>
                    We try hard to label clearly what&apos;s an actual, independently reproducible result
                    (the published case studies) versus a roadmap or a direction we&apos;re exploring
                    (anything marked &quot;not built yet&quot; or similar). Those labels are there on
                    purpose — please don&apos;t treat a stated direction or timeline as a guarantee of
                    future capability.
                </p>
            </section>

            <section>
                <h2>5. Intellectual property</h2>
                <p>
                    The text, design, and analysis write-ups on this site belong to Petr Žák unless stated
                    otherwise. Satellite imagery referenced or shown on this site originates from the
                    European Space Agency&apos;s Copernicus Sentinel program and is used under its open
                    data terms.
                </p>
            </section>

            <section>
                <h2>6. No warranty</h2>
                <p>
                    This site, the waitlist, and any demo or preview material are provided as-is, without
                    warranties of any kind, express or implied. We&apos;re an early-stage effort — read
                    everything on this site with that in mind, and see our case studies page for exactly
                    what has and hasn&apos;t been independently verified.
                </p>
            </section>

            <section>
                <h2>7. Limitation of liability</h2>
                <p>
                    To the maximum extent permitted by law, we&apos;re not liable for any indirect,
                    incidental, or consequential loss arising from your use of this site or reliance on
                    anything published on it.
                </p>
            </section>

            <section>
                <h2>8. Governing law</h2>
                <p>
                    These terms are governed by the laws of the Czech Republic, without regard to
                    conflict-of-law principles.
                </p>
            </section>

            <section>
                <h2>9. Changes</h2>
                <p>
                    We may update these terms as the product and the company itself evolve (for instance,
                    once a registered company exists to replace the personal operator named above). The
                    date at the top of this page always reflects the current version.
                </p>
            </section>

            <section>
                <h2>10. Contact</h2>
                <p>
                    <a href="mailto:petr@phasq.com">petr@phasq.com</a> for anything on this page.
                </p>
            </section>
        </LegalPage>
    );
}
