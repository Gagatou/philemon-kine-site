import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3>Philémon Eydoux</h3>
            <p>Kinésithérapeute</p>
            <p className={styles.tagline}>
              Votre partenaire pour le bien-être et la réathlétisation
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/about">Qui je suis</Link>
              </li>
              <li>
                <Link href="/pricing">Tarifs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h4>Contact</h4>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>06 35 55 00 50</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>Levallois-Perret (92)</span>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Philémon Eydoux. Tous droits réservés.
          </p>
          <p className={styles.disclaimer}>
            Site professionnel de kinésithérapie. Respectez les délais de 24h pour les annulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
