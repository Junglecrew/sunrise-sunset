import { formatToLocale } from '../../helpers/formatToLocale'
import { defaultBarWidth } from '../../config'
import { TAnimationStart } from './types'

// Animation function
export const animationStart = ({
  data,
  step = 1,
  action,
  tickStart,
  tickEnd, 
}: TAnimationStart): void => {
  if (step === 20) {
    return
  }
  setTimeout(() => action({ 
    start: data.start + tickStart * step,
    end: data.end + tickEnd * step }),
    100 + 20 * step
  )

  return animationStart({ 
    data, 
    step: step + 1, 
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