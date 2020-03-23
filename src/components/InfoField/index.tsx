import React from 'react'

type TInfoField = {
  data: Array<string>
}

export const InfoField = ({ data }: TInfoField): JSX.Element => (
  <li className='info-block__elem'>
    <span className='info-field__key'>
      {data[0]}
    </span>
    <span className='info-field__devider'>: </span>
    <span className='info-field__value'>
      {data[1]}
    </span>
  </li>
)
