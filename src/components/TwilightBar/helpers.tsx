import { formatToLocale } from '../../helpers/formatToLocale'
import { defaultBarWidth } from '../../config'
import { TAnimationStart } from './types'

// Animation function
export const animationStart = ({
  data,
  i = 1,
  action,
  tickStart,
  tickEnd, 
}: TAnimationStart): void => {
  if (i === 20) {
    return
  }
  setTimeout(() => action({ 
    start: data.start + tickStart * i,
    end: data.end + tickEnd * i }),
    100 + 20 * i
  )

  return animationStart({ 
    data, 
    i: i + 1, 
    action, 
    tickStart, 
    tickEnd 
  })
}

// prepare data for gradient in %
export const prepareData = (data: Record<string, string>, barWidth: number) => {
  const newOptionsStart = formatToLocale(data.civil_twilight_begin).split(':')
  const newOptionsEnd = formatToLocale(data.civil_twilight_end).split(':')
  const minutesAdjustment = barWidth / defaultBarWidth
  const minutes = 60 * minutesAdjustment

  return {
    start: (Number(newOptionsStart[0]) * minutes + Number(newOptionsStart[1]) * minutesAdjustment) * 100 / barWidth,
    end: (Number(newOptionsEnd[0]) * minutes + Number(newOptionsEnd[1]) * minutesAdjustment) * 100 / barWidth
  }
}