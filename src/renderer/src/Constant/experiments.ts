export type ExperimentCategory = 'Web Security' | 'System' | 'Network' | 'Cryptography'
export type ExperimentDifficulty = 'Beginner' | 'Intermediate' | 'Advanced'
export type ExperimentIcon = 'database' | 'code' | 'terminal' | 'key' | 'network' | 'lock'
export type ExperimentAccent = 'violet' | 'amber' | 'rose' | 'fuchsia' | 'sky' | 'indigo'

export interface Experiment {
  id: string
  title: string
  description: string
  category: ExperimentCategory
  difficulty: ExperimentDifficulty
  duration: string
  icon: ExperimentIcon
  accent: ExperimentAccent
}

export const CATEGORIES: Array<'All' | ExperimentCategory> = [
  'All',
  'Web Security',
  'System',
  'Network',
  'Cryptography'
]

export const DIFFICULTIES: Array<'All Difficulties' | ExperimentDifficulty> = [
  'All Difficulties',
  'Beginner',
  'Intermediate',
  'Advanced'
]

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'sql-injection',
    title: 'SQL Injection',
    description:
      'Exploit input sanitization flaws to bypass authentication and query hidden database records.',
    category: 'Web Security',
    difficulty: 'Beginner',
    duration: '45 min',
    icon: 'database',
    accent: 'violet'
  },
  {
    id: 'xss',
    title: 'Cross-Site Scripting',
    description:
      'Craft stored and reflected payloads to hijack user sessions and manipulate page DOM.',
    category: 'Web Security',
    difficulty: 'Beginner',
    duration: '35 min',
    icon: 'code',
    accent: 'amber'
  },
  {
    id: 'command-injection',
    title: 'Command Injection',
    description:
      'Inject shell commands into unsanitized backend routines to spawn a remote shell.',
    category: 'System',
    difficulty: 'Intermediate',
    duration: '60 min',
    icon: 'terminal',
    accent: 'rose'
  },
  {
    id: 'password-security',
    title: 'Password Security',
    description:
      'Analyze hashing vulnerabilities, test rainbow table attacks, and test salted key resilience.',
    category: 'Cryptography',
    difficulty: 'Beginner',
    duration: '40 min',
    icon: 'key',
    accent: 'fuchsia'
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description:
      'Inspect virtual network traffic, trace ARP spoofing vectors, and intercept plaintext data.',
    category: 'Network',
    difficulty: 'Intermediate',
    duration: '50 min',
    icon: 'network',
    accent: 'sky'
  },
  {
    id: 'broken-auth',
    title: 'Broken Authentication',
    description:
      'Deconstruct signed JSON Web Tokens and exploit signing keys to forge admin privileges.',
    category: 'Web Security',
    difficulty: 'Advanced',
    duration: '60 min',
    icon: 'lock',
    accent: 'indigo'
  }
]
