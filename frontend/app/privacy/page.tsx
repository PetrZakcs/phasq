import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "What PhasQ does with your personal data when you visit this site or book a call.",
};

export default function PrivacyPage() {
    return (
        <LegalPage title="Privacy Policy" updated="September 1, 2026">
            <p>
                This page explains what happens to your personal data when you visit phasq.com or book a
                call. It&apos;s written in plain language on purpose — if anything here is unclear, email{' '}
                <a href="mailto:petr@phasq.com">petr@phasq.com</a> and ask.
            </p>

            <section>
                <h2>1. Who this is</h2>
                <p>
                    This site is operated by Petr Žák, trading as PhasQ — an independent project based in
                    the Czech Republic, ahead of formal company registration. For the purposes of data
                    protection law, that&apos;s the &quot;controller&quot; of the data described below. You
                    can reach the controller directly at <a href="mailto:petr@phasq.com">petr@phasq.com</a>.
                    <span className="fill-in">[once a company is registered, this section should be updated
                    with its legal name and registration number]</span>
                </p>
            </section>

            <section>
                <h2>2. What we collect</h2>
                <p>
                    Right now, this site doesn&apos;t collect any personal data directly — there&apos;s no
                    signup form live at the moment. The &quot;Get early access&quot; links on this site go
                    to Calendly, where you can book a call. That booking happens entirely on
                    Calendly&apos;s platform and is covered by{' '}
                    <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
                        Calendly&apos;s own privacy policy
                    </a>
                    , not this one — we only see what you enter to schedule the call (typically your name
                    and email) once you&apos;ve booked. If you&apos;d rather not use Calendly, email{' '}
                    <a href="mailto:petr@phasq.com">petr@phasq.com</a> directly.
                </p>
                <p>
                    We don&apos;t use tracking cookies, advertising pixels, or fingerprinting anywhere on
                    phasq.com. We plan to bring back a direct signup form once the database behind it is
                    properly set up — this page will be updated with the details (what&apos;s collected,
                    why, and where it&apos;s stored) before that form goes live, not after.
                </p>
            </section>

            <section>
                <h2>3. Your rights</h2>
                <p>Under GDPR, you can ask us at any time to:</p>
                <ul>
                    <li>See what data we hold about you</li>
                    <li>Correct it if it&apos;s wrong</li>
                    <li>Delete it</li>
                    <li>Restrict or object to how we use it</li>
                    <li>Get a copy in a portable format</li>
                    <li>Withdraw your consent to anything you&apos;ve previously agreed to</li>
                </ul>
                <p>
                    Email <a href="mailto:petr@phasq.com">petr@phasq.com</a> for any of these. If you think
                    we&apos;ve mishandled your data, you can also complain to the Czech Office for Personal
                    Data Protection (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">uoou.cz</a>) or your own country&apos;s
                    equivalent authority.
                </p>
            </section>

            <section>
                <h2>4. Cookies and analytics</h2>
                <p>
                    This site uses Vercel Analytics, which is cookieless by design — it doesn&apos;t set
                    cookies, doesn&apos;t use a persistent identifier, and can&apos;t track you across
                    sites or sessions. We don&apos;t use Google Analytics, Meta Pixel, or any other
                    tracking or advertising technology. There&apos;s no cookie consent banner on this site
                    because there&apos;s nothing on it to consent to.
                </p>
            </section>

            <section>
                <h2>5. Changes to this policy</h2>
                <p>
                    If this changes, we&apos;ll update the date at the top of this page. Significant changes
                    (e.g. a new reason for collecting data) will be reflected here before they take effect.
                </p>
            </section>

            <section>
                <h2>6. Contact</h2>
                <p>
                    <a href="mailto:petr@phasq.com">petr@phasq.com</a> for anything on this page.
                </p>
            </section>
        </LegalPage>
    );
}
