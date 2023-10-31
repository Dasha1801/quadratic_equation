import { useState, useMemo } from 'react'
import EnterUserData from '../enterUserData'
import './style.scss'

export interface IState {
  a: string
  b: string
  c: string
}

const InitState = {
  a: '',
  b: '',
  c: '',
}

const App = () => {
  const [state, setState] = useState<IState>(InitState)

  const onChange = (key: keyof typeof state, val: string) => {
    setState({ ...state, [key]: val.replace(/[^0-9]/g, '') })
  }

  const resetData = () => setState(InitState)

  const isDisabled = useMemo(
    () => Object.values(state).some((val) => val === ''),
    [state]
  )
  return (
    <div className="wrapperApp">
      <h1>Решение квадратного уравнения</h1>
      <EnterUserData data={state} onChange={onChange} />
      <div className="actions">
        <div className={`btn ${isDisabled ? 'notValid' : ''}`}>
          Рассчитать корни
        </div>
        <div className="btn red" onClick={resetData}>
          Очистить
        </div>
      </div>
    </div>
  )
}

export default App
