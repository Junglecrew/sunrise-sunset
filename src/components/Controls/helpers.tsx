export const secondsInDay: number = 24 * 60 * 60 * 1000

export const getDaysForward = (value: string): Date => (
  new Date(Date.now() + Number(value) * secondsInDay)
)

export const getDaysBackward = (value: string): Date => (
  new Date(Date.now() - Number(value) * secondsInDay)
)