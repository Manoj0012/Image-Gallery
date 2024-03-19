import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './logo'
export default function nav(){
    let navbar=[
        {title:"Home",Link:"/"},{title:"Aboutus",Link:"/about"},{title:"Gallery",Link:"/gallery"},{title:"Signup",Link:"/signup"}
    ]
    return(
        <div className='w-[100%] h-[100%] flex items-center  bg-main justify-evenly pt-3'>
          <div className='left w-[60%] h-[100%]  flex items-center mt-4'><Logo/></div>
          <div className='right w-[35%] h-[100%]  text-black flex items-center justify-evenly  mt-3 font2'>
            {
                navbar.map((items,index)=>{
                    return(
                        <NavLink className="text-sm" key={index} to={items.Link}>{items.title}</NavLink>
                    )
                })
            }
          </div>
        </div>
    )
}