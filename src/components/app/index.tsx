import { useState, useMemo } from 'react'
import EnterUserData from '../enterUserData'
import './style.scss'
import Result from '../result'

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
  const [isHasResult, setIsHasResult] = useState(false)

  const onChange = (key: keyof typeof state, val: string) => {
    setState({ ...state, [key]: val.replace(/[^0-9]/g, '') })
    isHasResult && setIsHasResult(false)
  }

  const resetData = () => {
    setState(InitState)
    setIsHasResult(false)
  }

  const isDisabled = useMemo(
    () => Object.values(state).some((val) => val === ''),
    [state]
  )

  return (
    <div className="wrapperApp">
      <h1>
        Решение квадратного уравнения
        <br /> вида: ax<sup>2</sup> + bx + c = 0
      </h1>
      <EnterUserData data={state} onChange={onChange} />
      <div className="actions">
        <div
          className={`btn ${isDisabled || isHasResult ? 'notValid' : ''}`}
          onClick={!isDisabled ? () => setIsHasResult(true) : undefined}
        >
          Рассчитать корни
        </div>
        <div className="btn red" onClick={resetData}>
          Очистить
        </div>
      </div>
      {isHasResult && (
        <Result a={Number(state.a)} b={Number(state.b)} c={Number(state.c)} />
      )}
    </div>
  )
}

export default App
