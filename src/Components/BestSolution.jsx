import React from 'react'
import { CgBorderStyleDashed } from "react-icons/cg";

const BestSolution = () => {
  return (
    <div className='bg-white mb-8'>
            <div className='flex flex-col items-center justify-center '>
                <h1 className='text-5xl pt-10 font-bold text-gray-700 '>Best Solution In One Place</h1>
                <CgBorderStyleDashed className='text-6xl '/>
            </div>
                <div className='flex flex-col justify-center items-center font-serif text-gray-500 text-lg  mb-10'>
                    <p>We Pride Ourselves On Delivering Exceptional Customer Service And Providing Our Employees With</p>
                    <p>Top-Notch Training To Ensure That Our Clients Receive The Best Possible Experience.</p>
                </div>
                <div>
                    <div className='flex items-start  '>
                        <div>
                            
                        </div>
                        <div className='w-1/3 flex flex-col items-center justify-start gap-2 '>
                            <p className=' rounded-r-full text-lg py-4 px-10 bg-blue-400 text-white '>01. why choose us</p>
                            <p className=' text-lg py-4 px-10  text-black pl-2'>02. Our Services</p>
                            <p className='text-lg py-4 px-10  text-black mr-17'>03. Projects   </p>
                            <p className=' text-lg py-4 px-10  text-black pl-2'>04. UI/UX Design</p>
                        </div>
                        <div className='w-1/3'>
                            <img src="https://pokaktech.com/images/tab1.png" alt="" />
                        </div>
                        <div className='w-1/3 flex flex-col items-start justify-start gap-2 pl-12  '>
                            <h1 className='text-3xl font-bold text-gray-700'>Why Chose Us</h1>
                            <div className='flex flex-col gap-1 text-lg text-gray-500 mt-5 mb-5'>
                                <p>In today's digital age, having a</p>
                                <p>professional online presence is just</p>
                                <p>as important for small startups as it</p>
                                <p>is for large corporations. A website</p>
                                <p>serves as your company's virtual</p>
                                <p>business card and a central hub for</p>
                                <p>product information and</p>
                                <p>communication. Our skilled</p>
                                <p>designers and copywriters will work</p>
                                <p>with you to create a website with up</p>
                                <p>to seven sub pages, including a home</p>
                                <p>page, company profile, and product</p>
                                <p>or team pages. Additional pages can</p>
                                <p>be added upon request.</p>
                            </div>
                            <button className='bg-blue-400 text-white py-4 px-10 text-xl cursor-pointer rounded-xl hover:border-2 border-blue-500 hover:bg-white hover:text-blue-400'>READ MORE</button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default BestSolution