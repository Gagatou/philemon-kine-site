'use client'

import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Award, Heart, Footprints, MessageCircle, Clock, Moon, Sun, ChevronDown, Home as HomeIcon, Users, Activity, Accessibility, Stethoscope } from 'lucide-react'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

const PHONE_NUMBER = '33635550050'
const WHATSAPP_MESSAGE = 'Bonjour Philémon, je souhaiterais prendre un rendez-vous.'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.style.colorScheme = 'light'
    }
  }, [isDarkMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      {/* Sticky Navigation - Updated */}
      <nav className={styles.stickyNav}>
        <div className="container">
          <div className={styles.navWrapper}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>PE</div>
              <span>Philémon Eydoux</span>
            </div>
            <ul className={styles.navLinks}>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className={activeSection === 'home' ? styles.active : ''}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={activeSection === 'about' ? styles.active : ''}
                >
                  Qui je suis
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className={activeSection === 'services' ? styles.active : ''}
                >
                  Mes services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className={activeSection === 'faq' ? styles.active : ''}
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`${styles.ctaBtn} ${activeSection === 'contact' ? styles.active : ''}`}
                >
                  Me contacter
                </button>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className={styles.darkModeBtn}
                  aria-label="Toggle dark mode"
                  title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className={styles.hero}>
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
              <p className={styles.subtitle}>Kinésithérapeute à domicile</p>
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
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Prendre rendez-vous
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className={styles.services} data-animate>
        <div className="container">
          <h2>Mes services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Users size={48} color="white" /></div>
              <h3>Accompagnement personnes âgées à domicile</h3>
              <p>Suivi spécialisé à domicile pour maintenir la mobilité et l'autonomie des seniors. J'accompagne les personnes âgées avec des séances adaptées à domicile.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><HomeIcon size={48} color="white" /></div>
              <h3>Kinésithérapeute à domicile</h3>
              <p>Séances de rééducation directement chez vous, sans déplacement. Flexibilité et confort au cœur de mon service à domicile.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Stethoscope size={48} color="white" /></div>
              <h3>Rééducation à domicile</h3>
              <p>Suivi post-opératoire et réadaptation fonctionnelle à votre domicile. Récupération progressive dans le confort de votre maison.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Accessibility size={48} color="white" /></div>
              <h3>Suivi du handicap à domicile</h3>
              <p>Prise en charge adaptée à domicile pour enfants et adultes en situation de handicap. Accompagnement personnalisé et bienveillant chez vous.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className={styles.about} data-animate>
        <div className="container">
          <h2>Qui je suis</h2>

          <div className={styles.aboutContent}>
            <div className={styles.story}>
              <p>
                Je suis Philémon Eydoux, kinésithérapeute à domicile spécialisé dans l'accompagnement des personnes âgées.
                Je me déplace à votre domicile pour vous proposer des séances de rééducation flexibles et adaptées.
                Mon objectif est d'accompagner mes patients vers le bien-être et le maintien de leur autonomie à domicile.
              </p>
              <p>
                Diplômé en kinésithérapie, je suis spécialisé dans la rééducation fonctionnelle à domicile et l'accompagnement
                à la remise en mobilité. J'ai également de l'expérience solide dans l'accompagnement à domicile des enfants
                atteints de handicap moteur. Mon approche combine rigueur scientifique et bienveillance, directement chez vous.
              </p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlightCard}>
                <Award size={32} color="#7CB9D4" />
                <h3>Formation complète</h3>
                <p>Diplômé en kinésithérapie avec expérience dans la rééducation neurologique</p>
              </div>
              <div className={styles.highlightCard}>
                <Heart size={32} color="#7CB9D4" />
                <h3>Spécialisation handicap</h3>
                <p>Accompagnement adapté pour les enfants et adultes en situation de handicap</p>
              </div>
              <div className={styles.highlightCard}>
                <HomeIcon size={32} color="#7CB9D4" />
                <h3>Suivi à domicile</h3>
                <p>Séances flexibles chez vous pour plus de confort et d'accessibilité</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={styles.contactSection} data-animate>
        <div className="container">
          <h2>Prendre contact</h2>

          <div className={styles.contactGrid}>
            {/* WhatsApp CTA */}
            <div className={styles.whatsappCta}>
              <div className={styles.whatsappCard}>
                <div className={styles.whatsappIcon}>
                  <MessageCircle size={48} color="white" />
                </div>
                <h3>Me contacter via WhatsApp</h3>
                <p>Le moyen le plus rapide de prendre rendez-vous</p>
                <p className={styles.phone}>06&nbsp;35&nbsp;55&nbsp;00&nbsp;50</p>
                <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Envoyer un message WhatsApp
                </a>
                <p className={styles.response}>
                  Habituellement, je réponds dans les 2-4 heures
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <Phone size={32} color="#7CB9D4" />
                <h3>Appel direct</h3>
                <p className={styles.phoneNumber}>06&nbsp;35&nbsp;55&nbsp;00&nbsp;50</p>
                <small>Disponible du lundi au vendredi de 9h à 18h</small>
              </div>

              <div className={styles.infoCard}>
                <MapPin size={32} color="#7CB9D4" />
                <h3>Mes lieux d'intervention</h3>
                <div style={{ marginTop: '12px' }}>
                  <p style={{ marginBottom: '8px' }}>📍 Levallois-Perret</p>
                  <p>📍 Neuilly-sur-Seine</p>
                </div>
                <small>(Île-de-France)</small>
              </div>

              <div className={styles.infoCard}>
                <Clock size={32} color="#7CB9D4" />
                <h3>Horaires</h3>
                <p>Lundi, mercredi au vendredi</p>
                <p>9h00 - 18h00</p>
                <small>(Fermé le mardi)</small>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className={styles.process}>
            <h3>Comment ça fonctionne ?</h3>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}><MessageCircle size={40} color="white" /></div>
                <h4>Contactez-moi</h4>
                <p>Via WhatsApp, appel ou SMS</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}><Clock size={40} color="white" /></div>
                <h4>Confirmez votre RDV</h4>
                <p>Choix de la date et heure</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}><Heart size={40} color="white" /></div>
                <h4>Première séance</h4>
                <p>Bilan et plan de traitement</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepIcon}><Footprints size={40} color="white" /></div>
                <h4>Suivi régulier</h4>
                <p>Progression adaptée</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className={styles.faq} data-animate>
            <h3>Questions fréquentes</h3>
            <div className={styles.faqGrid}>
              {[
                { q: 'Dois-je une ordonnance médicale ?', a: 'Pour être remboursé par la Sécurité Sociale, oui. Cependant, une séance sans ordonnance est possible.' },
                { q: 'Quel est le délai pour le premier RDV ?', a: 'Généralement sous 2-3 jours. Pour les urgences, je fais de mon mieux pour trouver une place rapidement.' },
                { q: 'Acceptez-vous les enfants ?', a: 'Absolument ! J\'ai de l\'expérience avec les enfants et les jeunes, notamment dans le suivi du handicap moteur.' },
                { q: 'Êtes-vous conventionné Sécu ?', a: 'Oui, je suis conventionné. Les tarifs respectent le barème de la Sécurité Sociale.' },
                { q: 'Proposez-vous des séances à domicile ?', a: 'Oui, absolument ! Je suis kinésithérapeute à domicile. Toutes mes séances se déroulent directement chez vous pour plus de confort et d\'accessibilité.' },
                { q: 'Que faire en cas d\'annulation ?', a: 'Veuillez m\'avertir au minimum 24 heures à l\'avance pour éviter des frais d\'annulation.' },
                { q: 'Comment suis-je remboursé ?', a: 'Les séances sont remboursées par la Sécurité Sociale sur prescription médicale. Vérifiez votre couverture mutuelle pour les dépassements éventuels.' },
                { q: 'Y a-t-il une réduction possible ?', a: 'Les bénéficiaires de l\'AME ont accès à des tarifs réduits. N\'hésitez pas à m\'en parler lors de votre première visite.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${expandedFaq === idx ? styles.expanded : ''}`}
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className={styles.faqHeader}>
                    <h4>{item.q}</h4>
                    <ChevronDown size={20} className={styles.faqChevron} />
                  </div>
                  {expandedFaq === idx && <p>{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta} data-animate>
        <div className="container">
          <h2>Prêt à commencer votre suivi à domicile ?</h2>
          <p>Contactez-moi dès maintenant via WhatsApp pour planifier vos séances à domicile</p>
          <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.brand}>
              <h3>Philémon Eydoux</h3>
              <p>Kinésithérapeute à domicile</p>
              <p className={styles.tagline}>
                Votre partenaire pour le bien-être et la mobilité à domicile
              </p>
            </div>

            <div className={styles.section}>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection('home')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}>
                    Accueil
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}>
                    Qui je suis
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit' }}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

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
              © {new Date().getFullYear()} Philémon Eydoux. Tous droits réservés.
            </p>
            <p className={styles.disclaimer}>
              Site professionnel de kinésithérapie. Respectez les délais de 24h pour les annulations.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
