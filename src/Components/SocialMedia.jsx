import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='bg-gray-800 border border-b-gray-600 '>
        <div className='flex text-4xl items-center justify-center p-15 gap-20 text-gray-300'>
            <FaFacebookF />
            <FaTwitter />
            <IoLogoInstagram />
            <FaLinkedinIn />
            <IoLogoGoogleplus />
            <FaPinterestP />
            <FaBehance />
            <FaWhatsapp />

        </div>
    </div>
  )
}

export default SocialMedia