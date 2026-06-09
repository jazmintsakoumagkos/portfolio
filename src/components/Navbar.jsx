import styles from './Navbar.module.css'

const links = ['about', 'skills', 'experience', 'education', 'contact']

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#about" className={styles.logo}>AJT.DEV</a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
