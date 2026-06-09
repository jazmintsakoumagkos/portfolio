import { useFadeUp } from '../hooks/useFadeUp'
import styles from './Projects.module.css'

export default function Projects() {
  const labelRef     = useFadeUp()
  const titleRef     = useFadeUp()
  const contentRef   = useFadeUp()

  return (
    <section id="projects">
      <div className="section-wrapper">
        <p className="section-label fade-up" ref={labelRef} data-num="03">Projects</p>
        <h2 className="section-title fade-up" ref={titleRef}>What I've built</h2>

        <div className={`${styles.placeholder} fade-up`} ref={contentRef}>
          <h3>Projects Loading...</h3>
          <p>
            Currently crafting things worth showing. Check back soon — or check
            my GitHub in the meantime.
          </p>
          <a
            href="https://github.com/jazmintsakoumagkos"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            View GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
