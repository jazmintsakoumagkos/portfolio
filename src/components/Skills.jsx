import { useFadeUp } from '../hooks/useFadeUp'
import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    color: 'pink',
    skills: ['JavaScript', 'Python', 'C', 'React', 'Node.js', 'HTML/CSS'],
  },
  {
    label: 'Databases',
    color: 'yellow',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    label: 'Tools & Platforms',
    color: 'purple',
    skills: ['GitHub', 'Claude Code', 'SNOW', 'Microsoft 365', 'Google Workspace', 'WordPress'],
  },
  {
    label: 'Soft Skills',
    color: 'mixed',
    skills: [
      { name: 'Self-Learning',    color: 'green' },
      { name: 'Critical Thinking', color: 'green' },
      { name: 'Problem Solving',  color: 'orange' },
      { name: 'Teamwork',         color: 'orange' },
      { name: 'Time Management',  color: 'red' },
      { name: 'Multitasking',     color: 'red' },
    ],
  },
]

function SkillBlock({ group }) {
  const ref = useFadeUp()
  return (
    <div className={styles.block} ref={ref}>
      <h3 className={styles.blockLabel}>{group.label}</h3>
      <div className={styles.grid}>
        {group.skills.map((skill) => {
          const name   = typeof skill === 'string' ? skill : skill.name
          const color  = typeof skill === 'string' ? group.color : skill.color
          return (
            <span key={name} className={`${styles.pill} ${styles[color]}`}>
              {name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default function Skills() {
  const labelRef = useFadeUp()
  const titleRef = useFadeUp()

  return (
    <section id="skills">
      <div className="section-wrapper">
        <p className="section-label fade-up" ref={labelRef} data-num="01">Skills</p>
        <h2 className="section-title fade-up" ref={titleRef}>What I work with</h2>
        {skillGroups.map((g) => (
          <SkillBlock key={g.label} group={g} />
        ))}
      </div>
    </section>
  )
}
