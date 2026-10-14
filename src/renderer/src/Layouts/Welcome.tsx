import { useState } from 'react'
import GetStarted from '@renderer/Components/GetStarted'
import TermCond from '@renderer/Components/TermCond'
import '../Sass/Layouts/Welcome.scss'
import Prerequisite from '@renderer/Components/Prerequisite'

export interface CheckPoint {
  id: 'gs' | 'tc' | 'pr'
  state: null | 'active' | 'done'
}

export type CheckComponent = 'get-started' | 'term-cond' | 'pre-requisite'

const Welcome = () => {
  const [checkPoint, setCheckPoint] = useState<CheckPoint[]>([
    { id: 'gs', state: 'active' },
    { id: 'tc', state: null },
    { id: 'pr', state: null },
  ])
  const [checkComponent, setCheckComponent] = useState<CheckComponent>('get-started')

  return (
    <section className='welcome'>
      <ul className='checkpoint'>
        {
          checkPoint.map((item, idx) => {
            return <li key={item.id} className={item.state ?? ''}>{idx + 1}</li>
          })
        }
      </ul>

      {checkComponent === 'get-started' && <GetStarted setCheckPoint={setCheckPoint} setCheckComponent={setCheckComponent} />}
      {checkComponent === 'term-cond' && <TermCond setCheckPoint={setCheckPoint} setCheckComponent={setCheckComponent} />}
      {checkComponent == 'pre-requisite' && <Prerequisite />}
    </section>
  )
}

export default Welcome