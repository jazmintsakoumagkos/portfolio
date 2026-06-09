import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2025 <span className={styles.accent}>Ana Jazmín Tsakoumagkos</span> — All rights reserved
      </p>
      <p className={styles.sub}>
        La Rioja, Argentina <span className={styles.dot}>·</span> Open to remote opportunities
      </p>
    </footer>
  )
}
