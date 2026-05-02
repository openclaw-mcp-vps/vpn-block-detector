import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VPN Block Detector — Real-time VPN Blocking Detection',
  description: 'Monitor VPN accessibility globally and get instant alerts when blocks are detected. Find working alternatives automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e2142d2-fd37-45e5-93bd-a66552afb1f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
