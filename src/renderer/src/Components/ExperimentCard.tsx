import { ArrowRight, Clock, Code, Database, KeyRound, Lock, Network, Terminal } from 'lucide-react'
import type { Experiment } from '@renderer/Constant/experiments'
import '../Sass/Components/ExperimentCard.scss'

interface ExperimentCardProps {
  experiment: Experiment
  onStart?: (experiment: Experiment) => void
}

const ICONS = {
  database: Database,
  code: Code,
  terminal: Terminal,
  key: KeyRound,
  network: Network,
  lock: Lock
} as const

const ExperimentCard = ({ experiment, onStart }: ExperimentCardProps) => {
  const Icon = ICONS[experiment.icon]

  return (
    <article className="exp-card">
      <div className="exp-card-body">
        <div className="exp-card-top">
          <span className={`exp-card-icon accent-${experiment.accent}`}>
            <Icon size={18} />
          </span>
          <span className="exp-card-meta">
            {experiment.category} • {experiment.difficulty}
          </span>
        </div>

        <h3 className="exp-card-title">{experiment.title}</h3>
        <p className="exp-card-desc">{experiment.description}</p>
      </div>

      <div className="exp-card-footer">
        <span className="exp-card-time">
          <Clock size={14} />
          {experiment.duration}
        </span>
        <button
          type="button"
          className="exp-card-btn"
          onClick={() => onStart?.(experiment)}
        >
          Start Lab
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  )
}

export default ExperimentCard
