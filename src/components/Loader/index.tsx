import React from 'react'

export const Loader = (): JSX.Element => (
  <div className='loader-wrapper'>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)