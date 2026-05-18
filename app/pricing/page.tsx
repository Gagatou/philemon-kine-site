import { Check } from 'lucide-react'
import styles from './pricing.module.css'
import Link from 'next/link'

export default function Pricing() {
  const packages = [
    {
      name: 'Séance simple',
      description: 'Prise en charge classique',
      price: '60',
      features: [
        'Consultation de 30-45 min',
        'Examen clinique complet',
        'Traitement personnalisé',
        'Plan de rééducation',
        'Conseils d\'hygiène de vie'
      ]
    },
    {
      name: 'Forfait 10 séances',
      description: 'Idéal pour une réééducation',
      price: '55',
      priceNote: 'par séance',
      highlighted: true,
      features: [
        'Suivi progressif garantis',
        'Plan de rééducation adapté',
        '10% de réduction',
        'Conseils personnalisés',
        'Suivi entre les séances',
        'Flexibilité d\'agenda'
      ]
    },
    {
      name: 'Forfait 20 séances',
      description: 'Pour les pathologies complexes',
      price: '50',
      priceNote: 'par séance',
      features: [
        'Prise en charge approfondie',
        'Plan détaillé 20 séances',
        '16% de réduction',
        'Réunion bilan mensuelle',
        'Suivi renforcé',
        'Adaptation continue'
      ]
    }
  ]

  const additional = [
    { name: 'Bilan initial approfondi', price: '+15€' },
    { name: 'Séance à domicile', price: '+20€' },
    { name: 'Visite préparatoire (enfant)', price: '+10€' },
    { name: 'Rapport médical', price: 'Sur demande' }
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Tarifs</h1>
          <p>Investissez dans votre santé et votre bien-être</p>
        </div>
      </section>

      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.pricingHeader}>
            <h2>Nos tarifs</h2>
            <p>Tous les tarifs sont accessibles aux personnes mineures avec AME</p>
          </div>

          <div className={styles.pricingGrid}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`${styles.card} ${pkg.highlighted ? styles.highlighted : ''}`}
              >
                {pkg.highlighted && <div className={styles.badge}>Populaire</div>}
                <h3>{pkg.name}</h3>
                <p className={styles.description}>{pkg.description}</p>
                <div className={styles.price}>
                  <span className={styles.amount}>{pkg.price}€</span>
                  {pkg.priceNote && <span className={styles.note}>{pkg.priceNote}</span>}
                </div>
                <ul className={styles.features}>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={20} color="#7CB9D4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Prendre rendez-vous
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.additional}>
            <h2>Services additionnels</h2>
            <div className={styles.additionalGrid}>
              {additional.map((service, idx) => (
                <div key={idx} className={styles.additionalItem}>
                  <span>{service.name}</span>
                  <span className={styles.additionalPrice}>{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.infoBox}>
              <h3>À savoir</h3>
              <ul>
                <li><strong>Remboursement Sécu :</strong> Les séances sont remboursées par la Sécurité Sociale sur prescription médicale</li>
                <li><strong>Mutuelles :</strong> Vérifiez votre couverture pour les dépassements éventuels</li>
                <li><strong>AME :</strong> Accès aux tarifs réduits pour les bénéficiaires de l'AME</li>
                <li><strong>Annulation :</strong> 24h minimum pour annuler un rendez-vous</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Vous avez des questions sur les tarifs ?</h2>
          <p>N'hésitez pas à me contacter, je serai ravi de discuter de vos besoins</p>
          <Link href="/contact" className="btn btn-primary">
            Me contacter
          </Link>
        </div>
      </section>
    </>
  )
}
