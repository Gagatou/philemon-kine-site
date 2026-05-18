import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Philémon Eydoux - Kinésithérapeute à Levallois-Perret',
  description: 'Kinésithérapeute spécialisé en rééducation, réathlétisation et suivi du handicap à Levallois-Perret (92). Prendre rendez-vous en ligne.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'kinésithérapeute, Levallois-Perret, rééducation, réathlétisation, suivi handicap, séance de kiné',
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
    title: 'Philémon Eydoux - Kinésithérapeute à Levallois-Perret',
    description: 'Kinésithérapeute spécialisé en rééducation, réathlétisation et suivi du handicap',
    siteName: 'Philémon Eydoux - Kinésithérapeute',
  },
  twitter: {
    card: 'summary',
    title: 'Philémon Eydoux - Kinésithérapeute',
    description: 'Rééducation, réathlétisation et suivi du handicap à Levallois-Perret',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Philémon Eydoux - Kinésithérapeute',
              description: 'Kinésithérapeute spécialisé en rééducation, réathlétisation et suivi du handicap',
              image: 'https://philemon-kine-site.vercel.app/og-image.jpg',
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
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
        <Navigation />
        <main>{children}</main>
        <Footer />

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
