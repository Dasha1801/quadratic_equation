import { useCallback } from 'react'
import './style.scss'
import Separator from '../separator'

interface IPropsResult {
  a: number
  b: number
  c: number
}

const Result = ({ a, b, c }: IPropsResult) => {
  const D = Math.pow(b, 2) - 4 * a * c

  const renderResult = useCallback(() => {
    if (D < 0) {
      return (
        <div className="resultWrapper">
          <span>D &#8249; 0,</span>{' '}
          <span>уравнение не имеет действительных решений.</span>
        </div>
      )
    } else if (D === 0) {
      return (
        <div className="resultWrapper">
          <span> D = 0, уравнение имеет один корень,</span>
          <span>x = {-b / (2 * a)}</span>
        </div>
      )
    }

    return (
      <div className="resultWrapper">
        <span>D &#8250; 0,</span>
        <span>
          x<sub>1</sub> = {((-b + Math.sqrt(D)) / (2 * a)).toFixed(2)},
        </span>
        <span>
          x<sub>2</sub> = {((-b - Math.sqrt(D)) / (2 * a)).toFixed(2)}
        </span>
      </div>
    )
  }, [a, b, c, D])
  return (
    <>
      <Separator />
      <div className="resultBlock">
        <div className="title">Результат:</div>
        {renderResult()}
      </div>
    </>
  )
}

export default Result
