import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../../../helpers/functions-general'

const Footer = () => {
  return (
    <>
        <footer className="footer bg-darkblue py-14">
        <div className="container ml-auto mr-auto px-[15px]">
        <div className="footer__wrapper text-light lg:grid lg:grid-cols-3 place-content-center">
        <div className="footer__socials py-5 flex flex-col items-center lg:px-2 lg:py-0 lg:border-r-[1px] border-light">
            <img src={`${baseImgUrl}/home/logo.png`} alt="" className=' object-contain size-24'/>
            <p className='text-xs mb-5'>Copyright © 2024</p>
            <ul className='flex gap-[2rem]'>
                <li><FaFacebook className='text-accent cursor-pointer text-2xl'/></li>
                <li><FaLinkedin className='text-accent cursor-pointer text-2xl'/></li>
                <li><FaGithub className='text-accent cursor-pointer text-2xl'/></li>
                <li><FaInstagram className='text-accent cursor-pointer text-2xl'/></li>
                <li><FaTwitter className='text-accent cursor-pointer text-2xl'/></li>
                <li><MdEmail className='text-accent cursor-pointer text-2xl'/></li>

            </ul>
        </div>
        <div className="footer__links py-5 flex flex-col items-center lg:px-2 lg:py-0 lg:border-r-[1px] border-light">
            <ul className='flex flex-col text-center gap-3'>
            <li className='text-md hover:opacity-70 hover:transition-all'><Link to="/home">Home</Link></li>
            <li className='text-md hover:opacity-70 hover:transition-all'><Link to="/skills">Skills</Link></li>
            <li className='text-md hover:opacity-70 hover:transition-all'><Link to="/project">Project</Link></li>
            <li className='text-md hover:opacity-70 hover:transition-all'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="footer__contact footer-box py-5 flex flex-col items-center lg:px-5 lg:py-0  lg:!items-start lg:ml-4 ">
            <h2 className='mb-5 text-center text-sm mb-3 font-semibold lg:text-left'>CONTACT DETAILS</h2>
            <ul className='flex flex-col text-center lg:text-left gap-3'>
            <li className='text-md flex items-center gap-5'><HiDevicePhoneMobile className='text-2xl'/> +63 928 688 9888</li>
            <li className='text-md flex items-center gap-5'><MdEmail className='text-2xl'/>gianlajarca14@gmail.com</li>
            <li className='text-md flex items-center gap-5'><FaHome className='text-2xl'/>Brgy. Anilao-Labac, Lipa City, Batangas</li>
            </ul>
        </div>
        </div>
        </div>
        </footer>
    </>
  )
}

export default Footer