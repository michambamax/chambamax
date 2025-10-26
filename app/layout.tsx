import './globals.css'
import type { Metadata } from 'next'
import { siteMeta } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  applicationName: siteMeta.name,
  authors: [{ name: 'ChambaMax' }],
  creator: siteMeta.creator,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteMeta.locale,
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: siteMeta.title,
    description: siteMeta.description,
    images: ['/og-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteMeta.creator,
    creator: siteMeta.creator,
    title: siteMeta.title,
    description: siteMeta.description,
    images: ['/og-logo.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="sticky top-0 z-50 backdrop-blur bg-white/0 border-b border-white/10">
          <div className="container py-4 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 font-bold text-lg">
              <span className="w-10 h-10 rounded-full grid place-items-center shadow"
                style={{background:'radial-gradient(60% 60% at 50% 50%, #F97316E6, #F9731699)', boxShadow:'0 6px 18px #F9731659'}} aria-hidden>👷‍♂️</span>
              <span className="whitespace-nowrap">
                <span className="font-extrabold text-secondary">Chamba</span>
                <span className="font-extrabold bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#3B82F6,#14B8A6)'}}>Max</span>
                <sup className="ml-1 text-xs text-secondary">®</sup>
              </span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#servicios" className="hover:underline">Servicios</a>
              <a href="#contacto" className="hover:underline">Contacto</a>
            </nav>
            <a href="#contacto" className="btn btn-primary hidden sm:inline-flex">Hablar con un asesor</a>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/80">
            <div>© {new Date().getFullYear()} <b>ChambaMax</b><sup>®</sup>. Todos los derechos reservados.</div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/15">f</a>
              <a href="#" className="w-9 h-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/15">x</a>
              <a href="#" className="w-9 h-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/15">in</a>
              <a href="#" className="w-9 h-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/15">ig</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
