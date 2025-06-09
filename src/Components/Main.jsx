import React from 'react'
import { BsArrowReturnLeft } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";

const Main = () => {
  return (
    <div className='flex '>
        <div className='w-1/2 bg-black '>
            <img src="https://pokaktech.com/images/computer2.png" alt="" />
        </div>  
        <div className='w-1/2  bg-blue-400 flex flex-col gap-6 pb-10'>
            <div className='pt-35 pl-5'>
                <img src="https://pokaktech.com/images/top_shape.png" alt="" />
            </div>
            <div className='pl-5'>
                <h1 className='text-5xl text-white font-extrabold'>User Experience</h1>
            </div>
            <div className='pl-5'>
                <h1 className='text-5xl text-white font-extrabold'>Consulting</h1>
            </div>
            <div className='pl-5 text-2xl text-white font-medium font-sans'>
                <p className=''>Looking to establish your online presence</p>
                <p className=''>and generate revenue through your own</p>
                <p className=''>e-commerce store? With our professional</p>
                <p className=''>web development services, you can create</p>
                <p className=''>a unique and user-friendly online store</p>
                <p className=''>that your customers will love.</p>
            </div>
            <div className='pl-5 pt-5'>
                <input className='bg-blue-300 w-65 h-15 rounded-md text-amber-50 text-large font-medium pl-5' placeholder='Email...' type="email" />
                <button className='bg-white text-black text-xl h-15 rounded-md w-40'>GET STARTED</button>
            </div>
            <div className=' pl-5 pt-20 flex'>
                <div className='text-white '>
                <p className='font-medium'>P R E V</p>
                <BsArrowReturnLeft className='text-3xl' />
            </div>
            <div className='flex pl-29 items-center text-white'>
                <MdOutlineHorizontalRule />
                <MdOutlineHorizontalRule />
                <MdOutlineHorizontalRule />
            </div>
                <div className='text-white justify-end pl-35 '>
                    <p className='font-medium'>P R E V</p>
                    <BsArrowReturnRight className='text-3xl'/>
                </div>
            </div>
            
        </div>  
    </div>
  )
}

export default Main