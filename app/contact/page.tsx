import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import styles from './contact.module.css'

const PHONE_NUMBER = '33635550050'
const WHATSAPP_MESSAGE = 'Bonjour Philémon, je souhaiterais prendre un rendez-vous.'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Prendre contact</h1>
          <p>Réservez facilement votre séance de kinésithérapie</p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* WhatsApp CTA */}
            <div className={styles.whatsappCta}>
              <div className={styles.whatsappCard}>
                <div className={styles.whatsappIcon}>
                  <MessageCircle size={48} color="white" />
                </div>
                <h2>Me contacter via WhatsApp</h2>
                <p>Le moyen le plus rapide de prendre rendez-vous</p>
                <p className={styles.phone}>06 35 55 00 50</p>
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
                <p>06 35 55 00 50</p>
                <small>Disponible du lundi au vendredi de 9h à 18h</small>
              </div>

              <div className={styles.infoCard}>
                <MapPin size={32} color="#7CB9D4" />
                <h3>Localisation</h3>
                <p>Levallois-Perret</p>
                <p>(Île-de-France)</p>
              </div>

              <div className={styles.infoCard}>
                <Clock size={32} color="#7CB9D4" />
                <h3>Horaires</h3>
                <p>Lundi au vendredi</p>
                <p>9h00 - 18h00</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className={styles.process}>
            <h2>Comment ça fonctionne ?</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Contactez-moi</h3>
                <p>Via WhatsApp, appel ou SMS</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Confirmez votre RDV</h3>
                <p>Choix de la date et heure</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Première séance</h3>
                <p>Bilan et plan de traitement</p>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Suivi régulier</h3>
                <p>Progression adaptée</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className={styles.faq}>
            <h2>Questions fréquentes</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Dois-je une ordonnance médicale ?</h3>
                <p>Pour être remboursé par la Sécurité Sociale, oui. Cependant, une séance sans ordonnance est possible.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Quel est le délai pour le premier RDV ?</h3>
                <p>Généralement sous 2-3 jours. Pour les urgences, je fais de mon mieux pour trouver une place rapidement.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Acceptez-vous les enfants ?</h3>
                <p>Absolument ! J'ai de l'expérience avec les enfants et les jeunes, notamment dans le suivi du handicap moteur.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Êtes-vous conventionné Sécu ?</h3>
                <p>Oui, je suis conventionné. Les tarifs respectent le barème de la Sécurité Sociale.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Proposez-vous des séances à domicile ?</h3>
                <p>Oui, possibilité de séances à domicile avec un supplément. À discuter lors du premier contact.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Que faire en cas d'annulation ?</h3>
                <p>Veuillez m'avertir au minimum 24 heures à l'avance pour éviter des frais d'annulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <h2>Prêt à commencer votre suivi ?</h2>
          <p>Contactez-moi dès maintenant via WhatsApp</p>
          <a href={whatsappUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
