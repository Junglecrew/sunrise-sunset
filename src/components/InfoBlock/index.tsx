import React from 'react'

import { InfoField } from '../InfoField'

type TInfoBlock = {
  weatherData: Record<string, string>
}

export const InfoBlock = ({ weatherData }: TInfoBlock): JSX.Element => {
  const preparedData = {
    Sunrise: weatherData.sunrise,
    Sunset: weatherData.sunset,
    Length: weatherData.day_length,
  }

  return (
    <div className='info-block'>
      <ul className='info-block__list'>
        {Object.entries(preparedData).map(entry => (
          <InfoField key={entry[0]} data={entry} />
        ))}
      </ul>
    </div>
  )
}
