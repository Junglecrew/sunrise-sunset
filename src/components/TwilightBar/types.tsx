export type TTwilightBar = {
  weatherData: Record<string, string>,
  barWidth?: number,
}

export type TData = {
  start: number,
  end: number,
}

export type TAnimationStart = {
  data: TData,
  i?: number,
  action: (newData: TData) => void,
  tickStart: number,
  tickEnd: number,
}