import React, { useState } from 'react'
import { assets } from '../assets/assets'
 import { motion } from "motion/react"

const Result = () => {
  const [image , setImage] = useState(assets.sample_img_1)
  const [isImageLoaded , setIsImageLoaded] = useState(true)
  const [loading , setLoading] = useState(true)
  const [input , setInput] = useState("")


  const onSubmitHandler =   async(e)=>{

  }

  return (
    <motion.form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center ' 
     
            initial={{opacity:0.2 , y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1 , y:0}}
            viewport={{once:true}}
    >
    <div>
      <div className='relative' >
        <img src={image} alt="" className='max-w-sm rounded '/>

        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading?'w-full transition-all duration-[10s]':'x-0'}`}/>

      </div>
      <p className={!loading ? "hidden": ""} >Loading...</p>
    </div>

    { 
    
    isImageLoaded &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 m-10 rounded-full' >
      <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer' >Generate Another</p>
      <a href="" download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer' >Download</a>
    </div>


    }
     {
      !isImageLoaded && 
      <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full' >
        <input 
          onChange={e=>setInput(e.target.value)}
          value={input}
        type="text" placeholder='Describe what you want to generate placeholder-color' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
        <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full ' >Generate</button>
    </div>
     }
    


   

    


    </motion.form>
  )
}

export default Result
