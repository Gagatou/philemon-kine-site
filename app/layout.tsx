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

export const metadata: Metadata = {
  title: 'Philémon Eydoux - Kinésithérapeute à domicile à Levallois-Perret',
  description: 'Kinésithérapeute à domicile spécialisé en rééducation à domicile, accompagnement personnes âgées et suivi du handicap à Levallois-Perret (92). Je me déplace chez vous. Prendre rendez-vous en ligne.',
  metadataBase: new URL('https://phil-kine.vercel.app'),
  keywords: 'kinésithérapeute à domicile, Levallois-Perret, rééducation à domicile, personnes âgées, suivi handicap, séance de kiné',
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
    url: 'https://philemon-kine-site.vercel.app',
    title: 'Philémon Eydoux - Kinésithérapeute à domicile',
    description: 'Kinésithérapeute à domicile - rééducation, personnes âgées et suivi du handicap à domicile',
    siteName: 'Philémon Eydoux - Kinésithérapeute à domicile',
    images: [{ url: '/philemon-eydoux.jpg', width: 1086, height: 1448, alt: 'Philémon Eydoux' }],
  },
  twitter: {
    card: 'summary',
    title: 'Philémon Eydoux - Kinésithérapeute à domicile',
    description: 'Rééducation et accompagnement à domicile - Levallois-Perret',
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
              '@type': 'LocalBusiness',
              name: 'Philémon Eydoux - Kinésithérapeute à domicile',
              description: 'Kinésithérapeute à domicile spécialisé en rééducation, accompagnement des personnes âgées et suivi du handicap',
              image: 'https://phil-kine.vercel.app/philemon-eydoux.jpg',
              url: 'https://philemon-kine-site.vercel.app',
              telephone: '+33635550050',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Levallois-Perret',
                addressLocality: 'Levallois-Perret',
                postalCode: '92300',
                addressRegion: 'Île-de-France',
                addressCountry: 'FR',
              },
              areaServed: 'FR',
              priceRange: '€',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: ['https://wa.me/33635550050'],
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
