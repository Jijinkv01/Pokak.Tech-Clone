import React from 'react'
import { CgBorderStyleDashed } from "react-icons/cg";

const WorkProcess = () => {
  return (
    <div className='bg-gray-100 border border-b-gray-300'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-5xl pt-10 font-bold text-gray-700 '>Creative Work Process</h1>
            <CgBorderStyleDashed className='text-6xl '/>
        </div>
        <div className='flex flex-col justify-center items-center font-serif text-gray-500 text-lg mb-10'>
            <p>At Our Company, We Specialize In Planning, Creating, And Maintaining Websites That Effectively Showcase Your Brand,</p>
            <p>Attract New Customers, And Communicate Your Story To The World.</p>
        </div>
        <div className='flex  pb-8 px-15 text-2xl font-bold text-gray-600 '>
            <div className='w-1/4  flex flex-col items-center justify-center'>
                <img src="https://pokaktech.com/images/wrk1.png" alt="" />
                <div className='pt-10'>
                    <p className='transform duration-400 cursor-pointer hover:text-blue-400'>Planning</p>
                </div>
            </div>
            <div className='w-1/4 flex flex-col items-center justify-center'>
                <img src="https://pokaktech.com/images/wrk2.png" alt="" />
                <div className='pt-10'>
                    <p className='transform duration-400 cursor-pointer hover:text-blue-400'>Designing</p>
                </div>
            </div>
            <div className='w-1/4 flex flex-col items-center justify-center'>
                <img src="https://pokaktech.com/images/wrk3.png" alt="" />
                <div className='pt-10'>
                    <p className='transform duration-400 cursor-pointer hover:text-blue-400'>Programing</p>
                </div>
            </div>
            <div className='w-1/4 flex flex-col items-center justify-center'>
                <img src="https://pokaktech.com/images/wrk4.png" alt="" />
                <div className='pt-10'>
                    <p className='transform duration-400 cursor-pointer hover:text-blue-400'>Presentation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkProcess