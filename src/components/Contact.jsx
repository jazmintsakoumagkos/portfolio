import { useFadeUp } from '../hooks/useFadeUp'
import styles from './Contact.module.css'

const contacts = [
  {
    href: 'mailto:jazmintsakoumagkos@gmail.com',
    icon: '✉',
    iconColor: 'var(--pink)',
    label: 'Email',
    display: 'jazmintsakoumagkos@gmail.com',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/jazmintsakoumagkos/',
    icon: 'in',
    iconColor: 'var(--cyan)',
    label: 'LinkedIn',
    display: 'jazmintsakoumagkos',
    external: true,
  },
  {
    href: 'https://github.com/jazmintsakoumagkos',
    icon: '⌥',
    iconColor: 'var(--purple)',
    label: 'GitHub',
    display: 'jazmintsakoumagkos',
    external: true,
  },
  {
    href: 'tel:+5493804228376',
    icon: '☎',
    iconColor: 'var(--yellow)',
    label: 'Phone / WhatsApp',
    display: '+54 9 380 422-8376',
    external: false,
  },
]

function ContactCard({ item }) {
  const ref = useFadeUp()
  return (
    <a
      href={item.href}
      className={`${styles.card} fade-up`}
      ref={ref}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
    >
      <div className={styles.icon} style={{ color: item.iconColor }}>
        {item.icon}
      </div>
      <div className={styles.text}>
        <small>{item.label}</small>
        <span>{item.display}</span>
      </div>
    </a>
  )
}

export default function Contact() {
  const labelRef = useFadeUp()
  const titleRef = useFadeUp()

  return (
    <section id="contact">
      <div className="section-wrapper">
        <p className="section-label fade-up" ref={labelRef} data-num="05">Contact</p>
        <h2 className="section-title fade-up" ref={titleRef}>Let's connect</h2>
        <div className={styles.grid}>
          {contacts.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
