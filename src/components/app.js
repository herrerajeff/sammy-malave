import React from 'react'

export default function App({children}) {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {children}
    </div>
  )
}
