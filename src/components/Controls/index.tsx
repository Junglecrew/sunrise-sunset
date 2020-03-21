import React from 'react'

import { ControlVariants, preSymbols } from '../../config'

type TControls = {
  changeDate: (value: Date) => void
}

export const Controls = ({ changeDate }: TControls) => {
  const handleClick = (value: string, type: string) => () => {
    if (type === 'forward') {
      return changeDate(new Date(Date.now() + Number(value) * 24 * 60 * 60 * 1000))
    } 
    else {
      return changeDate(new Date(Date.now() - Number(value) * 24 * 60 * 60 * 1000))
    }
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
            {type === 'back' ? preSymbols.MINUS : preSymbols.PLUS} {value} {title}
          </button>
        ))}
      </ul>
    </div>
  )
}
