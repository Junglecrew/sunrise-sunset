import { 
  useState, 
  useMemo, 
  useEffect
} from 'react'

import { BASE_API } from '../../config'
import { formatToLocale } from '../../helpers/formatLoLocale'

export const useMainBlock = () => {
  const [date, changeDate] = useState(new Date())
  const [weatherData, setWeatherData] = useState({})

  const formattedDate = useMemo(
    () => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    [date]
  )

  const preparedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  
  useEffect(() => {
   navigator.geolocation.getCurrentPosition(({ coords }) => {
    fetch(`${BASE_API}?lat=${coords.latitude}&lng=${coords.longitude}&date=${preparedDate}`)
      .then(response => response.json())
      .then(({ results }) => {
        const formattedData = {
          ...results,
          sunrise: formatToLocale(results.sunrise),
          sunset: formatToLocale(results.sunset),
          day_length: `${results.day_length.split(':')[0]}:${results.day_length.split(':')[1]}`
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