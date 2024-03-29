import Navbar from '@/components/navbar'
import './globals.css'
import { Nanum_Gothic } from 'next/font/google'

const nanum_gothic = Nanum_Gothic({
  preload: false,
  // subsets: ["latin"],
  weight: "700"
})

export const metadata = {
  title: 'KURIDIH',
  description: 'Vector Graphics Editor with Design Patterns',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className="bg-[#2b2b2b]">
        <body className={nanum_gothic.className}>
          <Navbar/>
          {children}
        </body>
      </div>
    </html>
  )
}
