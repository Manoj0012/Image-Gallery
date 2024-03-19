import React from 'react'
import  Nav from '../components/nav'
import Postcard from '../components/postcard'
function gallery() {
  const num=[1,2,3,4,5,6]
  return (
    <div className='min-w-[100vh] min-h-[100vh] flex flex-col items-center '>
      <div className='w-[95%] h-[5vh]'><Nav/></div>
      <div className='w-[100%] h-[95vh] flex justify-center items-center '>
        <div className='w-[98%] h-[98%]  bd-box banner5 grid grid-cols-2  justify-items-center over Scroll '>
        {num.map((items)=>
          <Postcard key={items}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default gallery