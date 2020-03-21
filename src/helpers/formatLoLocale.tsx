export const formatToLocale = (time: string) => {
  const array = time.split(':')
  const hours = time.indexOf('PM') > 0 ? 12 : 0 
  const formattedHours = Number(array[0]) + hours
  
  return `${formattedHours}:${array[1]}`
}