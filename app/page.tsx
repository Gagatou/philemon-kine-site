import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <div className={styles.logo}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="30" r="15" fill="#7CB9D4"/>
                  <ellipse cx="50" cy="60" rx="20" ry="25" fill="#7CB9D4"/>
                  <circle cx="35" cy="55" r="8" fill="#A8D8EA"/>
                  <circle cx="65" cy="55" r="8" fill="#A8D8EA"/>
                </svg>
              </div>
              <h1>Philémon Eydoux</h1>
              <p className={styles.subtitle}>Kinésithérapeute</p>
            </div>

            <div className={styles.heroInfo}>
              <div className={styles.infoCard}>
                <MapPin size={24} color="#7CB9D4" />
                <div>
                  <h3>Localisation</h3>
                  <p>Levallois-Perret (92)</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <Phone size={24} color="#7CB9D4" />
                <div>
                  <h3>Contact</h3>
                  <p>06 35 55 00 50</p>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <Link href="/contact" className="btn btn-primary">
                Prendre rendez-vous
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className="container">
          <h2>Mes services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏥</div>
              <h3>Rééducation</h3>
              <p>Suivi post-opératoire et réadaptation fonctionnelle</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚽</div>
              <h3>Réathlétisation</h3>
              <p>Reprise du sport en toute sécurité et performance</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>👨‍🦽</div>
              <h3>Suivi du handicap</h3>
              <p>Prise en charge adaptée aux besoins spécifiques</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💪</div>
              <h3>Prévention</h3>
              <p>Conseils et exercices pour prévenir les blessures</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Prêt à reprendre vos activités ?</h2>
            <p>Contactez-moi pour un premier rendez-vous personnalisé</p>
            <Link href="/contact" className="btn btn-primary">
              Me contacter via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
