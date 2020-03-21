import React from 'react'

type TTitle = {
  formattedDate: string
}

export const Title = ({ formattedDate }: TTitle) => {
  return (
    <div className='title'>
      {formattedDate}
    </div>
  )
}
