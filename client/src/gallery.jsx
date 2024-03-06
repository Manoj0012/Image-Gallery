import React from 'react'
import  Nav from './nav'
import Postcard from './postcard'
function gallery() {
  const num=[1,2,3,4,5,6]
  return (
    <div className='min-w-[100vh] min-h-[100vh] flex flex-col items-center'>
      <div className='w-[95%] h-[7vh]'><Nav/></div>
      <div className='w-[100%] h-[93vh] flex justify-center items-center '>
        <div className='w-[98%] h-[95%]  bd-box banner1 grid grid-cols-2  justify-items-center over Scroll'>
        {num.map((items)=>
          <Postcard key={items}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default gallery