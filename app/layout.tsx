import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F4EF',
}

// Domaine principal : à changer ici, dans public/robots.txt et public/sitemap.xml
const SITE_URL = 'https://kineydoux.fr'

export const metadata: Metadata = {
  title: 'Kiné à domicile Levallois-Perret & Neuilly-sur-Seine | P. Eydoux',
  description: 'Kinésithérapeute conventionné à domicile à Levallois-Perret et Neuilly-sur-Seine : rééducation, personnes âgées, pédiatrie, handicap. RDV par WhatsApp ou téléphone.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  authors: [{ name: 'Philémon Eydoux' }],
  creator: 'Philémon Eydoux',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    title: 'Philémon Eydoux - Kinésithérapeute à domicile',
    description: 'Kinésithérapeute à domicile - rééducation, personnes âgées et suivi du handicap à domicile',
    siteName: 'Philémon Eydoux - Kinésithérapeute à domicile',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Philémon Eydoux, kinésithérapeute à domicile' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philémon Eydoux - Kinésithérapeute à domicile',
    description: 'Rééducation et accompagnement à domicile - Levallois-Perret et Neuilly-sur-Seine',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physiotherapy',
              name: 'Philémon Eydoux - Kinésithérapeute à domicile',
              description: 'Kinésithérapeute à domicile spécialisé en rééducation, accompagnement des personnes âgées et suivi du handicap',
              image: `${SITE_URL}/philemon-eydoux.jpg`,
              url: SITE_URL,
              identifier: {
                '@type': 'PropertyValue',
                name: 'RPPS',
                value: '10102028452',
              },
              telephone: '+33635550050',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Levallois-Perret',
                postalCode: '92300',
                addressRegion: 'Île-de-France',
                addressCountry: 'FR',
              },
              areaServed: [
                { '@type': 'City', name: 'Levallois-Perret' },
                { '@type': 'City', name: 'Neuilly-sur-Seine' },
              ],
              priceRange: '€',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: ['https://wa.me/33635550050', 'https://share.google/9aHkr4zeZkLUYT2MS'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+33635550050',
                areaServed: 'FR',
                availableLanguage: 'fr',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
