import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './logo'
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom'
export default function nav(){
    const nav=useNavigate();
    const [state,setState]=useState(false)
    const [name,setName]=useState("")
    console.log(name)
    const [Link,setLink]=useState('')
    let navbar=[
        {title:"Home",Link:"/"},{title:"Aboutus",Link:"/about"},{title:"Gallery",Link:"/gallery"}
    ]
    useEffect(()=>{
        console.log("hello")
        api.get("/")
        .then((res)=>{
            const check=res.data
            console.log(check)
            if(check=='invalid'){
                setState(false)
            }
            else{
                setName(check.username)
                if(check.role=="admin"){
                    setLink("/admin")
                }else{
                setLink("/user")
                }
                setState(true)
            }
        })
        .catch((err)=>{console.log(err)})
    },[])
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
            {state==false&&<NavLink className="text-sm"  to={"/signup"}>Signup</NavLink>}
            {state==true&&<NavLink className="text-sm font2"  to={Link}>Hi, {name}</NavLink>}
          </div>
        </div>
    )
}