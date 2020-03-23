export const BASE_API = `https://api.sunrise-sunset.org/json`

export const ControlVariants = [
  {
    title: 'days',
    type: 'backward',
    value: 7
  },
  {
    title: 'day',
    type: 'backward',
    value: 1
  },
  {
    title: 'day',
    type: 'forward',
    value: 1
  },
  {
    title: 'days',
    type: 'forward',
    value: 7
  },
]

export const preSymbols = {
  PLUS: '+',
  MINUS: '-'
}

export const defaultBarWidth = 1440