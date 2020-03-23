import React from 'react'

import { useTwilightBar } from './useTwilightBar'
import { TTwilightBar } from './types'
import { defaultBarWidth } from '../../config'

export const TwilightBar = (
  { weatherData, 
    barWidth = defaultBarWidth 
  }: TTwilightBar
): JSX.Element => {
  const { style } = useTwilightBar(weatherData, barWidth)

  return (
    <div className='twilight-container'>
      <div className='twilight-wrapper' style={style}>
      </div>
    </div>
  )
}

