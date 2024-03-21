import React from 'react'

function addpost() {
  return (
    <div className='w-[400px] h-[500px] bg-white bd-box flex flex-col justify-evenly '>
        <div className='w-[100%] h-[10%]  font1 flexb'>Add Post</div>
        <div className='w-[100%] h-[40%] flexb '>
            <input className='w-[90%] h-[95%] bd' type='image'/>
        </div>
        <div className='w-[100%] h-[20%]  flexb flex-c'>
            <label className='label mb-4 '>Caption</label>
            <input className='w-[90%] h-[40%] bd-box' type='text'/>
        </div>
        <div className='w-[100%] h-[20%] flex justify-evenly items-center'>
            <button className='w-[30%] h-[40%] green bd-box text-white'>Add</button>
            <button className='w-[30%]  h-[40%]  bd-box red text-white'>Cancel</button>
        </div>
    </div>
  )
}

export default addpost