'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>PE</div>
            <span>Philémon Eydoux</span>
          </Link>

          {/* Menu Burger */}
          <button
            className={styles.burgerMenu}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                Qui je suis
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.ctaLink} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
