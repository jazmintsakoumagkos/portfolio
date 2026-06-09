import styles from './Hero.module.css'

const welcomeWords = [
  { text: 'Welcome', color: '#E8306A' },
  { text: 'to the',  color: '#00CCDD' },
  { text: 'amazing', color: '#D4BE00' },
  { text: 'digital', color: '#00CC55' },
  { text: 'portfolio', color: '#E05A00' },
]

const shapes = [
  { cls: styles.shape1 },
  { cls: styles.shape2 },
  { cls: styles.shape3 },
  { cls: styles.shape4 },
  { cls: styles.shape5 },
  { cls: styles.shape6 },
  { cls: styles.shape7 },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      {}
      <div className={styles.heroBg}>
        {shapes.map((s, i) => (
          <div key={i} className={`${styles.shape} ${s.cls}`} />
        ))}
      </div>

      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />

      <p className={styles.heroTag}>Frontend Developer · La Rioja, Argentina</p>

      <div className={styles.heroLayout}>
        {}
        <div className={styles.heroLeft}>
          <div className={styles.heroWelcome}>
            {welcomeWords.map(({ text, color }) => (
              <span
                key={text}
                className={styles.welcomeLine}
                style={{ color }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {}
        <div className={styles.heroRight}>
          <div className={styles.heroRoleRow}>
            <p className={styles.heroRole}>Frontend Developer</p>
            <h1 className={styles.heroName}>
              <span className={styles.pink}>Ana Jazmín</span> Tsakoumagkos
            </h1>
          </div>

          <p className={styles.heroBio}>
            Aspiring technology professional from Argentina, pursuing a degree in
            Information Technology and continuously expanding my skills through
            study, projects, and hands-on experience. Passionate about learning,
            solving problems, and creating meaningful solutions through
            technology. 82% through my CS degree — and every commit counts. ✨
          </p>

          <div className={styles.heroCta}>
            <a
              href="https://github.com/jazmintsakoumagkos"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/jazmintsakoumagkos/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jazmintsakoumagkos@gmail.com"
              className="btn-outline"
              style={{ borderColor: 'var(--yellow)', color: 'var(--yellow)' }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>Scroll</div>
    </section>
  )
}
