import React, { useEffect, useState } from 'react'
import Logo from '../components/logo'
import Goback from '../assets/image/goback.png'
import { validate } from '../utils/validate';
import {api} from '../utils/api'
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
function signup() {
  const nav=useNavigate();
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCpassword]=useState("");
  const [err,setErr]=useState({})
  const [issubmit,setSubmit]=useState(false)
  // console.log(name,password,cpassword)
  const values={
    name:name,pass:password,cpass:cpassword
  }
  console.log(err)

  function handlesubmit(e){
   e.preventDefault();
   setErr(validate(values))
   setSubmit(true);
  }
  useEffect(()=>{
    if(Object.keys(err)==0&&issubmit){
     api.post("/user/signin",{name:name,password:password})
     .then((res)=>{
      const resdata=res.data
      console.log(res)
      if(resdata=="user created"){ toast.success(resdata)
      nav('/login')
      }
      else{
        toast.error(resdata)
      }
     })
     .catch((err)=>{
      console.log(err)
     })
    }
  })
  return (
    <div className='min-w-[100vh] h-[100vh] flex '>
      <div className='w-[50%] h-[100%] flex  flex-col items-center'>
        <div className='w-[90%] h-[17vh] '><Logo /></div>
        <div className='w-[100%] h-[75vh]  flex  flex-col items-center justify-center '>
          <div className='w-[400px] h-[600px]  flex flex-col items-center  justify-evenly bd-box '>
            <div className='bg-white w-[90%] h-[10%] text-start p-1 flex items-center justify-center font1'>Get Started Now</div>
            <div className='w-[90%] h-[60%]  flex flex-col items-center '>
              <label className='label'>Username</label>
              <input type="text" className='input-s bd'  onChange={(e)=>{setName(e.target.value)}}/>
              <div className='w-[80%] h-[20%]  text-center err-msg'>{err.name&&<p>{err.name}</p>}</div>
              <label className='label '>Password</label>
              <input type="text" className='input-s bd' onChange={(e)=>{setPassword(e.target.value)}}/>
              <div className='w-[80%] h-[20%]  text-center err-msg'>{err.pass&&<p>{err.pass}</p>}</div>
              <label className='label '>Confirm Password</label>
              <input type="text" className='input-s bd' onChange={(e)=>{setCpassword(e.target.value)}} />
              <div className='w-[80%] h-[20%]  text-center err-msg'>{err.cpass&&<p>{err.cpass}</p>}</div>
            </div>
            <div className='bg-white w-[80%] h-[15%] flex flex-col  justify-center items-center pt-2'>
              <button className='w-[70%] h-[60%] bg-black text-white bd shadowb' onClick={handlesubmit}>signup</button>
              <div className="w[70%] h-[30%] pt-2 mb-2 text-login pt-4" >Already have an account?<a href='/login' className='text-black'> Login</a></div>
            </div>
          </div>
          <a className=' bg-black w-[65px] h-[35px] bd-box mt-4 text-white flex justify-center items-center' href='/'><img className="w-[25px] h-[25px] mr-1 " src={Goback}/></a>
        </div>
      </div>
      <div className='w-[50%] h-[100%] banner2 '></div>
    </div>
  )
}

export default signup