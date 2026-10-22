'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Home as HomeIcon,
  Users,
  Accessibility,
  Stethoscope,
  Baby,
  Award,
  ShieldCheck,
  Menu,
  X,
  Plus,
  Check,
} from 'lucide-react'
import styles from './page.module.css'
import ZonesMap from '@/components/ZonesMap'

const PHONE_NUMBER = '33635550050'
const PHONE_DISPLAY = '06 35 55 00 50'
const PHONE_HREF = 'tel:+33635550050'
const WHATSAPP_MESSAGE = 'Bonjour Philémon, je souhaiterais prendre un rendez-vous.'
const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'soins', label: 'Soins' },
  { id: 'zones', label: 'Zones' },
  { id: 'faq', label: 'FAQ' },
]

const SOINS = [
  'Prothèse de hanche ou de genou',
  'Après une fracture ou une chute',
  'Équilibre et prévention des chutes',
  'Perte d’autonomie, maintien à domicile',
  'Handicap moteur, enfant et adulte',
  'Développement moteur du bébé et de l’enfant',
]

const ZONES = [
  { city: 'Levallois-Perret', zip: '92300' },
  { city: 'Neuilly-sur-Seine', zip: '92200' },
  { city: 'Clichy', zip: '92110' },
]

const SERVICES = [
  {
    icon: Users,
    title: 'Personnes âgées',
    text: "Maintenir la mobilité, l'équilibre et l'autonomie au quotidien, avec des séances adaptées au rythme de chacun.",
  },
  {
    icon: Stethoscope,
    title: 'Rééducation post-opératoire',
    text: 'Suivi après une opération ou une blessure : récupération progressive et réadaptation fonctionnelle, sans vous déplacer.',
  },
  {
    icon: Accessibility,
    title: 'Suivi du handicap',
    text: 'Prise en charge adaptée pour enfants et adultes en situation de handicap moteur. Un accompagnement personnalisé et bienveillant.',
  },
  {
    icon: Baby,
    title: 'Pédiatrie',
    text: 'Séances adaptées aux bébés, enfants et adolescents : développement moteur, rééducation, suivi du handicap. Dans un cadre ludique et rassurant, à la maison.',
  },
  {
    icon: HomeIcon,
    title: 'Kiné à domicile',
    text: "Toutes les séances ont lieu chez vous. Pas de trajet, pas de salle d'attente : le soin vient à vous.",
  },
]

const STEPS = [
  { title: 'Contactez-moi', text: 'Par WhatsApp, appel ou SMS.' },
  { title: 'Fixons un créneau', text: 'On choisit ensemble la date et l’heure.' },
  { title: 'Premier bilan', text: 'Évaluation chez vous et plan de traitement.' },
  { title: 'Suivi régulier', text: 'Des séances qui évoluent avec vos progrès.' },
]

const FAQ = [
  { q: 'Combien coûte une séance à domicile ?', a: 'Je suis conventionné : les séances suivent le barème de la Sécurité sociale, avec une indemnité de déplacement pour les soins à domicile. Les deux sont remboursées sur prescription médicale, et votre mutuelle peut compléter.' },
  { q: 'Dans quelles villes vous déplacez-vous ?', a: 'Levallois-Perret, Neuilly-sur-Seine et Clichy. Pour une adresse proche, écrivez-moi.' },
  { q: 'Ai-je besoin d’une ordonnance ?', a: 'Pour être remboursé par la Sécurité sociale, oui. Une séance sans ordonnance reste possible.' },
  { q: 'Quel est le délai pour un premier rendez-vous ?', a: 'Généralement sous 2 à 3 jours. Pour les situations urgentes, je fais au mieux pour trouver une place rapidement.' },
  { q: 'Prenez-vous en charge les enfants ?', a: 'Oui. J’ai de l’expérience avec les enfants et les jeunes, notamment dans le suivi du handicap moteur.' },
  { q: 'Êtes-vous conventionné ?', a: 'Oui, je suis conventionné. Les tarifs respectent le barème de la Sécurité sociale.' },
  { q: 'Comment suis-je remboursé ?', a: 'Les séances sont remboursées par la Sécurité sociale sur prescription médicale. Vérifiez votre mutuelle pour les éventuels compléments.' },
  { q: 'Et en cas d’annulation ?', a: 'Merci de me prévenir au moins 24 heures à l’avance.' },
  { q: 'Y a-t-il des tarifs réduits ?', a: 'Les bénéficiaires de l’AME ont accès à des tarifs réduits. Parlons-en lors de la première séance.' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.headerInner}`}>
          <a href="#top" className={styles.brand} onClick={() => setMenuOpen(false)}>
            <span className={styles.brandName}>Philémon Eydoux</span>
            <span className={styles.brandRole}>Kinésithérapeute</span>
          </a>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={`btn btn-primary ${styles.navCta}`} onClick={() => setMenuOpen(false)}>
              Prendre rendez-vous
            </a>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <h1>
                Kinésithérapeute <em>à&nbsp;domicile</em>
              </h1>
              <p className={styles.heroSubtitle}>Levallois-Perret, Neuilly-sur-Seine et Clichy</p>
              <p className={styles.lead}>
                La kinésithérapie, chez vous. Je me déplace à votre domicile pour la rééducation,
                l&apos;accompagnement des personnes âgées et le suivi du handicap. Des soins attentifs, sans trajet
                ni salle d&apos;attente.
              </p>
              <div className={styles.heroActions}>
                <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} aria-hidden="true" />
                  Écrire sur WhatsApp
                </a>
                <a href={PHONE_HREF} className="btn btn-ghost">
                  <Phone size={18} aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </div>
              <ul className={styles.trust}>
                <li><ShieldCheck size={18} aria-hidden="true" /> Conventionné Sécurité sociale</li>
                <li><HomeIcon size={18} aria-hidden="true" /> 100&nbsp;% à domicile</li>
                <li><Clock size={18} aria-hidden="true" /> Réponse sous 2 à 4&nbsp;h</li>
              </ul>
            </div>

            <div className={styles.heroMedia}>
              <div className={styles.portrait}>
                <Image
                  src="/philemon-eydoux.jpg"
                  alt="Portrait de Philémon Eydoux, kinésithérapeute"
                  fill
                  priority
                  sizes="(max-width: 900px) 80vw, 440px"
                />
              </div>
              <div className={styles.portraitBadge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                <div>
                  <strong>Philémon Eydoux</strong>
                  <span>Masseur-kinésithérapeute · RPPS 10102028452</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Mes services</p>
              <h2>Un accompagnement adapté à chaque situation</h2>
            </div>
            <div className={styles.servicesGrid}>
              {SERVICES.map(({ icon: Icon, title, text }) => (
                <article key={title} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOINS */}
        <section id="soins" className={`${styles.section} ${styles.soinsSection}`}>
          <div className={`container ${styles.soinsGrid}`}>
            <div>
              <p className={styles.kicker}>Soins</p>
              <h2>Ce que je prends en charge à domicile</h2>
              <p className={styles.sectionIntro}>
                Quelques situations fréquentes. Votre situation n&apos;est pas dans la liste&nbsp;? Écrivez-moi, je vous
                dis si je peux vous aider.
              </p>
            </div>
            <ul className={styles.soinsList}>
              {SOINS.map((soin) => (
                <li key={soin}>
                  <Check size={20} aria-hidden="true" />
                  {soin}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
          <div className={`container ${styles.aboutGrid}`}>
            <div>
              <p className={styles.kicker}>Qui suis-je&nbsp;?</p>
              <h2>Rigueur scientifique et bienveillance</h2>
            </div>
            <div className={styles.aboutBody}>
              <p>
                Je suis Philémon Eydoux, kinésithérapeute à domicile. J&apos;accompagne entre autres les personnes
                âgées, avec des séances souples et adaptées, pour préserver leur bien-être et leur autonomie chez elles.
              </p>
              <p>
                Spécialisé en rééducation fonctionnelle et en remise en mobilité, j&apos;ai aussi une solide expérience
                auprès des enfants en situation de handicap moteur.
              </p>
              <ul className={styles.highlights}>
                <li>
                  <Award size={22} aria-hidden="true" />
                  <div>
                    <strong>Diplômé en kinésithérapie</strong>
                    <span>Universidad San Jorge (Saragosse, Espagne) · expérience en rééducation neurologique</span>
                  </div>
                </li>
                <li>
                  <ShieldCheck size={22} aria-hidden="true" />
                  <div>
                    <strong>Inscrit à l&apos;Ordre des masseurs-kinésithérapeutes</strong>
                    <span>N° RPPS 10102028452</span>
                  </div>
                </li>
                <li>
                  <HomeIcon size={22} aria-hidden="true" />
                  <div>
                    <strong>Au plus près de vous</strong>
                    <span>Séances à domicile, horaires flexibles</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <p className={styles.kicker}>Comment ça se passe</p>
              <h2>Quatre étapes, simplement</h2>
            </div>
            <ol className={styles.steps}>
              {STEPS.map((step, i) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ZONES */}
        <section id="zones" className={styles.section}>
          <div className={`container ${styles.zonesGrid}`}>
            <div>
              <p className={styles.kicker}>Zones d&apos;intervention</p>
              <h2>Je me déplace dans ces villes</h2>
              <ul className={styles.zonesList}>
                {ZONES.map(({ city, zip }) => (
                  <li key={city}>
                    <strong>{city}</strong>
                    <span>{zip}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.zonesNote}>Vous habitez juste à côté&nbsp;? Écrivez-moi, je vous dis si je peux venir.</p>
            </div>
            <div
              className={styles.mapBox}
              role="img"
              aria-label="Carte des zones d'intervention : Levallois-Perret, Neuilly-sur-Seine et Clichy"
            >
              <ZonesMap />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={styles.section}>
          <div className="container">
            <div className={styles.contactCard}>
              <div className={styles.contactMain}>
                <p className={`${styles.kicker} ${styles.kickerLight}`}>Prendre rendez-vous</p>
                <h2>Parlons de votre suivi</h2>
                <p>
                  Le plus rapide : un message WhatsApp. Je réponds habituellement dans les 2 à 4&nbsp;heures.
                </p>
                <div className={styles.heroActions}>
                  <a href={whatsappUrl} className={`btn ${styles.btnLight}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} aria-hidden="true" />
                    Écrire sur WhatsApp
                  </a>
                  <a href={PHONE_HREF} className={`btn ${styles.btnOutlineLight}`}>
                    <Phone size={18} aria-hidden="true" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <dl className={styles.contactInfo}>
                <div>
                  <dt><MapPin size={18} aria-hidden="true" /> Secteurs</dt>
                  <dd>Levallois-Perret (92)<br />Neuilly-sur-Seine (92)<br />Clichy (92)</dd>
                </div>
                <div>
                  <dt><Clock size={18} aria-hidden="true" /> Horaires</dt>
                  <dd>Lundi → vendredi<br />9h00 – 18h00</dd>
                </div>
                <div>
                  <dt><Phone size={18} aria-hidden="true" /> Téléphone</dt>
                  <dd><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={styles.section}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: FAQ.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              }),
            }}
          />
          <div className={`container ${styles.faqGrid}`}>
            <div>
              <p className={styles.kicker}>FAQ</p>
              <h2>Questions fréquentes</h2>
              <p className={styles.faqAside}>
                Une autre question ? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Écrivez-moi</a>.
              </p>
            </div>
            <div className={styles.faqList}>
              {FAQ.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary>
                    {item.q}
                    <Plus size={20} className={styles.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div>
            <p className={styles.footerName}>Philémon Eydoux</p>
            <p>Kinésithérapeute à domicile · Levallois-Perret, Neuilly-sur-Seine et Clichy</p>
          </div>
          <div className={styles.footerLinks}>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className={`container ${styles.footerBottom}`}>
          <p>© {new Date().getFullYear()} Philémon Eydoux. Annulation : merci de prévenir 24&nbsp;h à l&apos;avance.</p>
        </div>
      </footer>

      {/* Mobile quick actions */}
      <div className={styles.mobileBar}>
        <a href={PHONE_HREF} className={styles.mobileBarCall}>
          <Phone size={18} aria-hidden="true" /> Appeler
        </a>
        <a href={whatsappUrl} className={styles.mobileBarWa} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </>
  )
}
