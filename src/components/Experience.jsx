import { useFadeUp } from '../hooks/useFadeUp'
import styles from './Experience.module.css'

const jobs = [
  {
    period: '2024 – 2025',
    title: 'Customer Support & Tech Sales',
    badge: 'Part-time',
    company: 'Solutec',
    desc: 'Advised and assisted customers with their technological needs, combining product knowledge with communication skills to deliver tailored recommendations and support.',
  },
  {
    period: '2024 · 4 months',
    title: 'Web Developer',
    badge: 'Internship',
    company: 'GAO Tek',
    desc: 'Worked on e-commerce websites using WordPress. Handled content management, layout adjustments, and shop configuration for online store environments.',
  },
  {
    period: '2 months',
    title: 'IT Support / Technician',
    badge: 'Internship',
    company: 'Datacenter',
    desc: 'Provided technical support and assisted with datacenter management tasks. Gained hands-on experience in IT infrastructure and troubleshooting.',
  },
]

function TimelineItem({ job }) {
  const ref = useFadeUp()
  return (
    <div className={`${styles.item} fade-up`} ref={ref}>
      <p className={styles.meta}>{job.period}</p>
      <h3 className={styles.title}>
        {job.title} <span className={styles.badge}>{job.badge}</span>
      </h3>
      <p className={styles.company}>{job.company}</p>
      <p className={styles.desc}>{job.desc}</p>
    </div>
  )
}

export default function Experience() {
  const labelRef = useFadeUp()
  const titleRef = useFadeUp()

  return (
    <section id="experience">
      <div className="section-wrapper">
        <p className="section-label fade-up" ref={labelRef} data-num="02">Experience</p>
        <h2 className="section-title fade-up" ref={titleRef}>Where I've worked</h2>
        <div className={styles.timeline}>
          {jobs.map((job) => (
            <TimelineItem key={job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
