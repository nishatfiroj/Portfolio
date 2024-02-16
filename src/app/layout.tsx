import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nishat's Portfolio",
  description: "stuff i done woo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  )
}
