import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <div className='flex pl-20 pr-10 '>
        <div className='flex items-center justify-center gap-3 border-b-2 border-b-gray-300 border-r-2 border-r-gray-300 w-60 h-15 bg-gray-100 '>
            <MdEmail className='text-blue-500 text-2xl'/>
            <p className='hover:text-blue-500 cursor-pointer font-medium text-gray-500'>info@pokaktech com</p>
        </div>
        <div className='flex items-center justify-center  gap-3 border-b-2  border-b-gray-300  w-60 h-15 bg-gray-100'>
            <MdPhoneEnabled className='text-blue-500 text-2xl'/>
            <p className='hover:text-blue-500 cursor-pointer font-medium text-gray-500'>+91 9656 033 444</p>
        </div>
        <div className='flex items-center justify-end  gap-5 text-gray-600 border-b-2  border-b-gray-300 pr-8 w-140 h-15 bg-gray-100'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
        </div>
        <div className='flex items-center justify-center cursor-pointer text-lg text-white font-medium w-50 h-15 bg-blue-400 hover:bg-white hover:text-blue-400 hover:border-3 '>
            <button >GET STARTED</button>
        </div>
    </div>
        <div className='flex pl-20 pr-10 bg-white '>
            <div className='p-8 '>
                <img src="https://pokaktech.com/images/dark_logo.png" alt="" />
            </div>
            <div className='flex gap-10 items-center justify-center pl-24 text-lg font-medium '>
                <a className='hover:text-blue-400 hover:underline' href="">HOME</a>
                <a className='hover:text-blue-400 hover:underline' href="">ABOUT US</a>
                <a className='hover:text-blue-400 hover:underline' href="">ODOO ERP</a>
                <a className='hover:text-blue-400 hover:underline' href="">INDUSTRY</a>
                <a className='hover:text-blue-400 hover:underline' href="">SERVICES</a>
                <a className='hover:text-blue-400 hover:underline' href="">PROJECTS</a>
                <a className='hover:text-blue-400 hover:underline' href="">CONTACT US</a>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar