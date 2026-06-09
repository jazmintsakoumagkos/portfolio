import { useFadeUp } from '../hooks/useFadeUp'
import styles from './Education.module.css'

const cards = [
  { icon: '🎓', accent: 'pink',   title: 'Associate Degree in Informatics',  sub: 'Universidad Nacional de La Rioja · 82% completed' },
  { icon: '☁️', accent: 'cyan',   title: 'Generative AI Learning Path',       sub: 'Google Cloud Skills Boost' },
  { icon: '🌐', accent: 'yellow', title: 'Web Development',                   sub: 'Junior Achievement · HTML, CSS, JavaScript' },
  { icon: '⚡', accent: 'purple', title: 'MERN Stack',                        sub: 'Polo Tecnológico de La Rioja · 2023–2024' },
]

const languages = [
  { name: 'Spanish', level: 'Native',                    pct: 100, gradient: 'linear-gradient(90deg, var(--pink), var(--purple))' },
  { name: 'English', level: 'C1 Advanced — Professional', pct: 88,  gradient: 'linear-gradient(90deg, var(--cyan), var(--purple))' },
]

function Card({ card }) {
  const ref = useFadeUp()
  return (
    <div className={`${styles.card} ${styles[card.accent]} fade-up`} ref={ref}>
      <div className={styles.icon}>{card.icon}</div>
      <p className={styles.cardTitle}>{card.title}</p>
      <p className={styles.cardSub}>{card.sub}</p>
    </div>
  )
}

export default function Education() {
  const labelRef = useFadeUp()
  const titleRef = useFadeUp()
  const langLabelRef = useFadeUp()

  return (
    <section id="education">
      <div className="section-wrapper">
        <p className="section-label fade-up" ref={labelRef} data-num="04">Education &amp; Courses</p>
        <h2 className="section-title fade-up" ref={titleRef}>Always learning</h2>

        <div className={styles.grid}>
          {cards.map((c) => <Card key={c.title} card={c} />)}
        </div>

        <div className={styles.langSection}>
          <h3 className={styles.langLabel} ref={langLabelRef}>Languages</h3>
          <div className={styles.langGrid}>
            {languages.map((lang) => {
              const ref = useFadeUp()
              return (
                <div key={lang.name} className={`${styles.langItem} fade-up`} ref={ref}>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                  <div className={styles.langBar}>
                    <div
                      className={styles.langBarFill}
                      style={{ width: `${lang.pct}%`, background: lang.gradient }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
