import { 
  useState, 
  useRef, 
  useEffect 
} from 'react'

import { prepareData, animationStart } from './helpers'

export const useTwilightBar = (weatherData: any, barWidth: number) => {
  const [newData, setNewData] = useState({
    start: 0,
    end: 0
  })
  
  const usePreviousState = (weatherData: Record<string, string>) => {
    const ref = useRef() as { current: Record<string, string> }
    useEffect(() => {
      ref.current = weatherData
    })
    return ref.current
  }

  const prevState = usePreviousState(weatherData) || weatherData

  // Меняется weatherData и обновляется градиент
  useEffect(() => {
    const newData = prepareData(weatherData, barWidth)
    const oldData = prepareData(prevState, barWidth)
    const tickStart = (newData.start - oldData.start) / 20
    const tickEnd = (newData.end - oldData.end) / 20

    animationStart({ 
      data: oldData, 
      action: setNewData,
      tickStart,
      tickEnd
    })
    //eslint-disable-next-line
  }, [weatherData])

  const style = {
    width: `${barWidth}px`,
    transition: 'background 0.8s linear',
    background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) ${newData.start - 5}%, rgba(0,212,255,1) ${newData.start}%, rgba(0,212,255,1) ${newData.end}%, rgba(9,9,121,1) ${newData.end + 5}%, rgba(2,0,36,1) 100%)`
  }

  return {
    style
  }
} 
