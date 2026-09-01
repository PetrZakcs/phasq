import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "What PhasQ does with your personal data when you visit this site or join the waitlist.",
};

export default function PrivacyPage() {
    return (
        <LegalPage title="Privacy Policy" updated="September 1, 2026">
            <p>
                This page explains what happens to your personal data when you visit phasq.com or join the
                waitlist. It&apos;s written in plain language on purpose — if anything here is unclear, email{' '}
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
                <p>If you join the waitlist, we collect exactly what&apos;s on that form:</p>
                <ul>
                    <li>Your email address</li>
                    <li>The area you say you&apos;re interested in (agriculture, defense/gov, investor, other)</li>
                    <li>The region you select</li>
                    <li>The date and time you submitted the form</li>
                </ul>
                <p>
                    We don&apos;t collect anything else through this site. We don&apos;t use tracking
                    cookies, advertising pixels, or fingerprinting anywhere on phasq.com.
                </p>
            </section>

            <section>
                <h2>3. Why we collect it, and on what basis</h2>
                <p>
                    <strong>Legal basis: your consent</strong>, given by submitting the form. We use this
                    information for one purpose — to contact you about early access to PhasQ and related
                    updates. We don&apos;t sell it, rent it, share it with advertisers, or use it to train
                    any model.
                </p>
            </section>

            <section>
                <h2>4. Where it&apos;s stored</h2>
                <p>
                    Waitlist submissions are stored with Supabase, our database provider, hosted in the
                    EU (Frankfurt, Germany). We don&apos;t share this data with any other third party, and
                    it doesn&apos;t leave the EU/EEA.
                </p>
            </section>

            <section>
                <h2>5. How long we keep it</h2>
                <p>
                    We keep your waitlist entry until you ask us to delete it, or until the early access
                    program you signed up for has run its course — whichever comes first. You can ask for
                    deletion at any time; see your rights below.
                </p>
            </section>

            <section>
                <h2>6. Your rights</h2>
                <p>Under GDPR, you can ask us at any time to:</p>
                <ul>
                    <li>See what data we hold about you</li>
                    <li>Correct it if it&apos;s wrong</li>
                    <li>Delete it</li>
                    <li>Restrict or object to how we use it</li>
                    <li>Get a copy in a portable format</li>
                    <li>Withdraw your consent (which just means we delete your waitlist entry)</li>
                </ul>
                <p>
                    Email <a href="mailto:petr@phasq.com">petr@phasq.com</a> for any of these. If you think
                    we&apos;ve mishandled your data, you can also complain to the Czech Office for Personal
                    Data Protection (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">uoou.cz</a>) or your own country&apos;s
                    equivalent authority.
                </p>
            </section>

            <section>
                <h2>7. Cookies and analytics</h2>
                <p>
                    This site uses Vercel Analytics, which is cookieless by design — it doesn&apos;t set
                    cookies, doesn&apos;t use a persistent identifier, and can&apos;t track you across
                    sites or sessions. We don&apos;t use Google Analytics, Meta Pixel, or any other
                    tracking or advertising technology. There&apos;s no cookie consent banner on this site
                    because there&apos;s nothing on it to consent to.
                </p>
            </section>

            <section>
                <h2>8. Changes to this policy</h2>
                <p>
                    If this changes, we&apos;ll update the date at the top of this page. Significant changes
                    (e.g. a new reason for collecting data) will be reflected here before they take effect.
                </p>
            </section>

            <section>
                <h2>9. Contact</h2>
                <p>
                    <a href="mailto:petr@phasq.com">petr@phasq.com</a> for anything on this page.
                </p>
            </section>
        </LegalPage>
    );
}
