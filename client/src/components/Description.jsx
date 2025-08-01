import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28' 
    initial={{opacity:0.2 , y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1 , y:0}}
      viewport={{once:true}}
    >
      <h1 className='text-4xl sm:text-4xl font-semibold mb-2 ' >Create AI Images</h1>
      <p className='text-gray-500 mb-8 ' >Turn your imagination into visuals</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center ' >
        <img src={assets.sample_img_1} alt="" />
        <div className='' >
            <h2 className='text-3xl font-medium max-w-lg mb-4 ' >Introducing AI-Powered Text to image Generator</h2>
        <p className='text-gray-600 mb-4' >Easily bring your ideas to life with our free AI image generator. Wheather you need stunning visuals or uniqe imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
        <p  className='text-gray-600' >Simply type in a text prompt, and our cutting-edge,
            Ai will generate high-quality images in seconds. from 
            Product visuals to character designs and portraits,
            even concepts that don't yet exits can be visualized
            effortlessly. Powered by advanced AI technology 
            the creative possibilites are limitless.
        </p>
        </div>
      </div>

    </motion.div>
  )
}

export default Description
