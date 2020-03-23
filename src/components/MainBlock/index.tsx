import React, { Fragment} from 'react'

import { Title } from '../Title'
import { InfoBlock } from '../InfoBlock'
import { Controls } from '../Controls'
import { TwilightBar } from '../TwilightBar'
import { useMainBlock } from './useMainBlock'
import { Loader } from '../Loader'

export const MainBlock = (): JSX.Element => {
  const { 
    changeDate,
    formattedDate,
    showData,
    weatherData,
  } = useMainBlock()

  return (
    <div className='container'>
      <div className='main-wrapper'>
        {showData ?
          <Fragment>
            <Title formattedDate={formattedDate}/>
            <InfoBlock weatherData={weatherData} />
            <Controls changeDate={changeDate} />
            <TwilightBar 
              weatherData={weatherData} 
              barWidth={720}
            />
          </Fragment>
          : <Loader />
        }
      </div>
    </div>
  )
}
