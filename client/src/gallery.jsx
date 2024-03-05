import React from 'react'
import  Nav from './nav'
import Postcard from './postcard'
function gallery() {
  return (
    <div className='min-w-[100vh] h-[100vh] flex flex-col items-center'>
      <div className='w-[95%] h-[7vh]'><Nav/></div>
      <div className='w-[100%] h-[93vh] flex justify-center items-center '>
        <div className='w-[98%] h-[98%]  bd-box banner1 '>
        <Postcard/>
        <Postcard/>
        </div>
      </div>
    </div>
  )
}

export default gallery