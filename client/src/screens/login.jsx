import React, { useEffect, useState } from 'react'
import Logo from '../components/logo'
import { loginValidate } from '../utils/validate'
import { api } from '../utils/api'
import Goback from '../assets/image/goback.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function login() {
    const nav =useNavigate()
    const [name,setName]=useState("")
    const[pass,setPass]=useState("")
    const[err,setErr]=useState({})
    const[issubmit,setSubmit]=useState(false)
    // console.log(name)
    const values={
        name:name,pass:pass,
      }
    //   console.log(err)
    
      function handlesubmit(e){
       e.preventDefault();
       setErr(loginValidate(values))
       setSubmit(true);
      }
      
        
    
      useEffect(()=>{
       if(Object.keys(err).length==0&&issubmit){
        api.post("/user/login",{name:name,password:pass})
        .then((res)=>{
         const resdata=res.data
         if(resdata==="!valid"){
            toast.error("password doesn't match")
           
         }
         else if(resdata=="!user"){
            toast.error("User doesn't exits")
            nav("/signup")
         }
         else{
            const values=res.data
            const role=values.role
            const token=values.Token
            if(role=='admin'){
            localStorage.setItem("token",token)
         nav("/admin")}
         else{
            nav("/user")
         }
         console.log(res.data)
         }
        })
        .catch((error)=>{console.log(error)})
       }
      })
    return (
        <div className='min-w-[100vh] h-[100vh] flex'>
            <div className='w-[50%] h-[100%] flex  flex-col items-center'>
                <div className='w-[90%] h-[17vh] ml-3'><Logo /></div>
                <div className='w-[100%] h-[75vh]  flex items-center justify-center flex-col'>
                    <div className='w-[400px] h-[550px]  flex flex-col items-center  justify-evenly bd-box '>
                        <div className='bg-white w-[90%] h-[10%]  p-1 flex items-center justify-center font1 '>Welcome Back</div>
                        <div className='w-[90%] h-[40%]  flex flex-col items-center '>
                            <label className='label'>Username</label>
                            <input type="text" className='input-s bd' onChange={(e)=>{setName(e.target.value)}}/>
                            <div className='w-[90%] h-[20%] bg-white text-center err-msg'>{err.name&&<p>{err.name}</p>}</div>
                            <label className='label '>Password</label>
                            <input type="text" className='input-s bd' onChange={(e)=>{setPass(e.target.value)}}/>
                            <div className='w-[90%] h-[20%] bg-white text-center err-msg'>{err.pass&&<p>{err.pass}</p>}</div>
                            </div>
                            <div className='bg-white w-[80%] h-[15%] flex flex-col  justify-center items-center pt-2'>
                            <button className='w-[70%] h-[60%] bg-black text-white bd shadowb' onClick={handlesubmit}>Login</button>
                            <div className="logout w[70%] h-[30%] pt-2 text-login pt-4" >Don't have an account?<a href='/signup' className='text-black'> Signup</a></div>
                        </div>
                    </div>
                    <a className='bg-black  w-[65px] h-[35px] bd-box mt-4 text-white flex justify-center items-center' href='/'><img className="w-[25px] h-[25px] mr-1 " src={Goback}/></a>
                </div>
            </div>
            <div className='w-[50%] h-[100%] banner2 '></div>
        </div>
    )
}

export default login