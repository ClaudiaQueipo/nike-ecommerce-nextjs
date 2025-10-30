import type { Metadata } from "next"
import "@/shared/styles/globals.css"
import { Navbar, Footer } from "@/shared/components"

export const metadata: Metadata = {
  title: "Nike E-Commerce - Shop Premium Sneakers",
  description: "Discover the latest Nike shoes and sneakers. Shop Air Max, Pegasus, Dunk, and more premium footwear."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
