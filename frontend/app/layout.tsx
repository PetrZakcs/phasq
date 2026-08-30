import { Big_Shoulders, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ScrollGauge from "@/components/ScrollGauge";
import PageTransition from "@/components/PageTransition";

// Display face — condensed, industrial. Used for headlines only.
const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  weight: ["500", "700", "800", "900"],
  subsets: ["latin"],
});

// Body face — humanist grotesk built for dense technical reading.
const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Instrument face — reserved for real readouts: dB values, coordinates, dates.
const plexMono = IBM_Plex_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
});

import type { Metadata } from "next";

const TITLE = "PhasQ — Radar Intelligence Platform";
const DESCRIPTION = "Physics-based Synthetic Aperture Radar analysis. All-weather satellite intelligence for agriculture, defense, and space.";

export const metadata: Metadata = {
  metadataBase: new URL("https://phasq.com"),
  title: {
    default: TITLE,
    template: "%s — PhasQ",
  },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "PhasQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShoulders.variable} ${publicSans.variable} ${plexMono.variable} antialiased`}
      >
        <ScrollGauge />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
