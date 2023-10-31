import { IState } from '../app'
import './style.scss'

interface IPropsData {
  data: IState
  onChange: (key: keyof IState, val: string) => void
}

const EnterUserData = ({ data: { a, b, c }, onChange }: IPropsData) => {
  return (
    <div className="wrapperData">
      <div className="title">
        ax<sup>2</sup> + bx + c = 0
      </div>
      <div className="text">Введите данные для расчета корней уравнения.</div>
      <div className="expression">
        <input
          value={a}
          type="number"
          onChange={(e) => onChange('a', e.target.value)}
        />{' '}
        x <sup>2</sup> + {'  '}
        <input
          value={b}
          type="number"
          onChange={(e) => onChange('b', e.target.value)}
        />{' '}
        x +{' '}
        <input
          value={c}
          type="number"
          onChange={(e) => onChange('c', e.target.value)}
        />{' '}
        = 0
      </div>
    </div>
  )
}

export default EnterUserData
