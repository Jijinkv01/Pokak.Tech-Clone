import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-800 pb-9'>
        <div className='flex pt-10 '>
            <div className='w-1/3'>
                <div className='pl-15'>
                    <img src="https://pokaktech.com/images/logo.png" alt="" />
                </div>
                <div className='pl-15 pt-10 text-gray-300 text-lg'>
                    <p>As professional web developers and website</p>
                    <p>designers, we provide the best web development</p>
                    <p>services in the UAE.</p>
                </div>
                <div className='pl-15 pt-5 text-gray-300 text-lg'>
                    <p>From understanding your business objectives in</p>
                    <p>creating the perfect web development solution...</p>
                </div>
                <div className='flex justify-start items-center gap-3  pl-15 pt-5 text-blue-400 text-lg '>
                    <h3>Read More</h3>
                    <FaLongArrowAltRight />
                </div>
            </div>
            <div className='w-1/3'>
                <div className='pl-15 text-white text-3xl'>
                    <h1>Get In Touch</h1>
                </div>
                <div className='flex flex-col pl-15 pt-13 gap-3 text-gray-200'>
                    <input className='bg-gray-600 p-3 rounded-sm' type="text" placeholder='Name' />
                    <input className='bg-gray-600 p-3 rounded-sm' type="text" placeholder='Email ID' />
                    <input className='bg-gray-600 p-3 h-25 rounded-sm' type="text" placeholder='Your Message...' />
                    <div className='pt-5'>
                    <button className='bg-blue-400 px-8 py-2 text-xl font-medium rounded-md'>SEND MESSAGE</button>
                </div>
                </div>
                
            </div>
            <div className='w-1/3'>
                <div className='pl-15 text-white text-3xl'>
                    <p>Contact Info</p>
                </div>
                <div className=' pt-10 border-b border-b-gray-600 w-80 ml-15 text-gray-300 text-lg'>
                    <p>Pokak Technologies PVT LTD :</p>
                    <p>Suit No. 414 Valamkottil Tower,</p>
                    <p>Kakkanad, Kochi - 682021</p>
                </div>
                <div className='flex items-center pt-5 pb-5 border-b border-b-gray-600 w-80 ml-15 text-gray-300 text-lg'>
                    <p>phone: +91 9656033444</p>
                </div>
                <div className='flex flex-col  pt-5 pb-5  w-80 ml-15 text-gray-300 text-lg'>
                    <p>email: info@pokaktech.com</p>
                    <p>pokaktech@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer