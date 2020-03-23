import React from 'react'

import { ControlVariants, preSymbols } from '../../config'

import { getDays} from './helpers'

type TControls = {
  changeDate: (value: number) => void,
}

export const Controls = ({ changeDate }: TControls): JSX.Element => {
  const handleClick = (value: number, type: string) => () => {
    if (type === 'forward') {
      return changeDate(getDays(value))
    }
    return changeDate(getDays(value) * (-1))
  }

  return (
    <div className='controls__wrapper'>
      <ul className='controls__list'>
        {ControlVariants.map(({
          type,
          value,
          title
        }) => (
          <button key={`${type}-${value}`} onClick={handleClick(value, type)}>
            {type === 'backward' ? preSymbols.MINUS : preSymbols.PLUS} {value} {title}
          </button>
        ))}
      </ul>
    </div>
  )
}
