import React from 'react'

type TTitle = {
  formattedDate: string
}

export const Title = ({ formattedDate }: TTitle): JSX.Element => {
  return (
    <div className='title'>
      {formattedDate}
    </div>
  )
}
