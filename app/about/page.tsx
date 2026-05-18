import { Award, Heart, Footprints } from 'lucide-react'
import styles from './about.module.css'

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Qui je suis</h1>
          <p>Découvrez mon parcours et ma passion pour la kinésithérapie</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.story}>
              <h2>Mon parcours</h2>
              <p>
                Je suis Philémon Eydoux, kinésithérapeute passionné par la rééducation et la réathlétisation.
                Mon objectif est d'accompagner mes patients vers le bien-être et le retour à leurs activités.
              </p>
              <p>
                Diplômé en kinésithérapie, je suis spécialisé dans la rééducation fonctionnelle et l'accompagnement
                à la remise en mobilité. J'ai également de l'expérience solide dans l'accompagnement des enfants
                atteints de handicap moteur. Mon approche combine rigueur scientifique et bienveillance.
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
                <Footprints size={32} color="#7CB9D4" />
                <h3>Sportif passionné</h3>
                <p>Trail runner et sportif, je comprends les enjeux de la réathlétisation</p>
              </div>
            </div>
          </div>

          <div className={styles.expertise}>
            <h2>Mes domaines d'expertise</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseItem}>
                <h3>Rééducation fonctionnelle</h3>
                <p>Suivi post-opératoire et réadaptation suite à une blessure</p>
              </div>
              <div className={styles.expertiseItem}>
                <h3>Réathlétisation sportive</h3>
                <p>Reprise progressive du sport en toute sécurité pour athlètes et amateurs</p>
              </div>
              <div className={styles.expertiseItem}>
                <h3>Suivi du handicap moteur</h3>
                <p>Prise en charge spécialisée des enfants atteints de handicap moteur</p>
              </div>
              <div className={styles.expertiseItem}>
                <h3>Prévention des blessures</h3>
                <p>Conseils et programme d'exercices pour prévenir les pathologies</p>
              </div>
              <div className={styles.expertiseItem}>
                <h3>Récupération</h3>
                <p>Techniques de récupération active et passive optimisées</p>
              </div>
              <div className={styles.expertiseItem}>
                <h3>Éducation thérapeutique</h3>
                <p>Vous apprenez les bons gestes et postures du quotidien</p>
              </div>
            </div>
          </div>

          <div className={styles.philosophy}>
            <h2>Ma philosophie</h2>
            <div className={styles.philosophyContent}>
              <p>
                Chaque patient est unique. Je crois en une approche personnalisée où l'écoute et la bienveillance
                sont au cœur du processus thérapeutique. Mon rôle est non seulement de traiter la douleur ou
                la pathologie, mais aussi de vous autonomiser pour que vous repreniez vos activités avec confiance.
              </p>
              <p>
                En tant que sportif passionné par le trail running, je comprends l'importance du bien-être
                physique et mental. Cette passion m'aide à motiver mes patients et à créer une dynamique positive
                autour de la rééducation.
              </p>
              <p>
                <strong>Mon engagement :</strong> vous offrir un suivi de qualité, adapté à vos besoins et vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
