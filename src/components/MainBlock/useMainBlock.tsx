import { 
  useState, 
  useMemo, 
  useEffect
} from 'react'

import { BASE_API } from '../../config'
import { formatToLocale } from '../../helpers/formatToLocale'

type TUseMainBlock = {
  changeDate: (value: Date) => void,
  formattedDate: string,
  weatherData: {},
  showData: boolean,
}

export const useMainBlock = (): TUseMainBlock => {
  const [date, changeDate] = useState(new Date())
  const [weatherData, setWeatherData] = useState({})

  const formattedDate = useMemo(
    () => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    [date]
  )

  const preparedDate = useMemo(
    () => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    [date]
  )
  
  useEffect(() => {
    navigator.geolocation && navigator.geolocation.getCurrentPosition(({ coords }) => {
    fetch(`${BASE_API}?lat=${coords.latitude}&lng=${coords.longitude}&date=${preparedDate}`)
      .then(response => response.json())
      .then(({ results }) => {
        const dayLength = results.day_length.split(':')
        const formattedData = {
          ...results,
          sunrise: formatToLocale(results.sunrise),
          sunset: formatToLocale(results.sunset),
          day_length: `${dayLength[0]}:${dayLength[1]}`
        }
        setWeatherData(formattedData)
      })
      .catch(e => console.log(e))
    }, ({ message }) => console.warn(message))
  }, [preparedDate])

  return {
    changeDate,
    formattedDate,
    weatherData,
    showData: Object.keys(weatherData).length !== 0
  }
}