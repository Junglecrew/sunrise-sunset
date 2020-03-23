import React from 'react'

import { ControlVariants, preSymbols } from '../../config'

import { getDaysForward, getDaysBackward} from './helpers'

type TControls = {
  changeDate: (value: Date) => void
}

export const Controls = ({ changeDate }: TControls): JSX.Element => {
  const handleClick = (value: string, type: string) => () => {
    if (type === 'forward') {
      return changeDate(getDaysForward(value))
    } 
    return changeDate(getDaysBackward(value))
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
