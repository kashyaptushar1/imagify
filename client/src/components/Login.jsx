import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

const Login = () => {
    const [state , setState] = useState("Login")
         const {setShowLogin} =  useContext(AppContext)
   
    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset'
        } 

    },[])
  return (
 <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center' >

        <motion.form className='relative bg-white p-10 rounded-xl text-slate-500'
         initial={{opacity:0.2 , y:50}}
      transition={{duration:0.3}}
      whileInView={{opacity:1 , y:0}}
      viewport={{once:true}}
        >
            <h1 className='text-center text-2xl text-neutral-700 font-medium' >{state}</h1>
            <p className='text-sm' >Welcome back! please signinto continue</p>

            { state !== 'Login' && <div className='border  px-6 py-2 flex items-center gap-2 rounded-full mt-5' >
                <img className='h-5' src={assets.profile_icon} alt="" />
                <input className='outline-none text-sm' type="text" placeholder='Full Name' required />
            </div>}
            <div className='border  px-6 py-2 flex items-center gap-2 rounded-full mt-4' >
                <img className='' src={assets.email_icon} alt="" />
                <input className='outline-none text-sm' type="email" placeholder='Email' required />
            </div>
            <div className='border  px-6 py-2 flex items-center gap-2 rounded-full mt-4' >
                <img className='' src={assets.lock_icon} alt="" />
                <input className='outline-none text-sm' type="password" placeholder='Password' required />
            </div>
            <p className='text-sm text-blue-600 my-4 cursor-pointer' >Forget Password?</p>

            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
              {state === 'Login'? 'Login':'Create Account'}
            </button>

           {state === 'Login'?
           <p className='mt-5 text-center' >Don't have an account? <span onClick={()=>setState('sign up')} className='text-blue-600 cursor-pointer' >Sign up</span> </p>
           :
            <p className='mt-5 text-center' >Already have an account? <span onClick={()=>setState('Login')} className='text-blue-600 cursor-pointer' >Login</span> </p>

           } 
           
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
        </motion.form>
      
    </div>
    )
  
}

export default Login
