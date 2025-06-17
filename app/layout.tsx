import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CrystalSmith Consulting Limited - Your Transformation Partners",
  description:
    "CrystalSmith Consulting Limited guides organizations through significant changes with expertise in transformational leadership and management consulting. We serve as change architects committed to steering companies through intricate changes to achieve sustainable growth.",
  keywords:
    "change management, organizational development, HR consulting, leadership development, talent management, Nigeria consulting, business transformation, executive coaching",
  authors: [{ name: "CrystalSmith Consulting Limited" }],
  openGraph: {
    title: "CrystalSmith Consulting Limited - Your Transformation Partners",
    description:
      "Expert change management and organizational development consulting services in Nigeria and across Africa.",
    url: "https://crystalsmith.com",
    siteName: "CrystalSmith Consulting Limited",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrystalSmith Consulting Limited",
    description: "Your transformation partners for organizational excellence",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
