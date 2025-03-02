import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { HeaderComponent } from "@/components/header"
import { Footer } from "@/components/footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "TheFurryWaggers - Pet Stop",
  description: "Your one-stop shop for all pet needs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gradient-to-r from-blue-200 to-blue-100`}
      >
        <HeaderComponent />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-8">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

