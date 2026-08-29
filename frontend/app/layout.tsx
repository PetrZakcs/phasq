import { Big_Shoulders, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  title: "PhasQ — Radar Intelligence Platform",
  description: "Physics-based Synthetic Aperture Radar analysis. All-weather satellite intelligence for agriculture, defense, and infrastructure.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
