import IconButton from '../IconButton'
import logo from './logo.png'
import { IoBedOutline } from "react-icons/io5";
import { CiPlane } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { MdOutlineLocalTaxi } from "react-icons/md";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="bg-[#003580] flex justify-center">
        { isOpen && 
          <div className="bg-black w-[100vw] h-[100vh] fixed top-0 z-20 bg-opacity-80 flex items-center justify-center">
          <div className="p-10 bg-white rounded-md relative w-[30%] sm:w-full">
            <div onClick={() => setIsOpen(!isOpen)} className="absolute top-3 right-3 text-xl cursor-pointer" ><IoMdClose /></div>
            <div className="text-2xl font-semibold mb-8">
              Sign in or create an account
            </div>
            <form className="flex flex-col">
              <label className="" htmlFor="email">Email adress</label>
              <input className="border border-black rounded-md h-[45px] outline-none pl-2 w-full" placeholder="Enter your email adress" id="email" type="email" />
              <button className="bg-[#007dfc] h-[45px] mt-4 rounded-md text-white font-semibold hover:bg-[#003580] transition ease-in-out">Continue with email</button>
            </form>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="flex-shrink mx-4">Or use one of these options</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
              <div className="flex justify-center items-center gap-6 mb-[30px]">
                <div className="border border-gray-300 w-[75px] h-[75px] text-3xl flex justify-center items-center rounded-md text-[#316FF6] hover:border-[#007dfc] cursor-pointer"><FaFacebookSquare /></div>
                <div className="border border-gray-300 w-[75px] h-[75px] text-3xl flex justify-center items-center rounded-md text-[#4285F4] hover:border-[#007dfc] cursor-pointer"><FaGoogle /></div>
                <div className="border border-gray-300 w-[75px] h-[75px] text-3xl flex justify-center items-center rounded-md hover:border-[#007dfc] cursor-pointer"><FaApple /></div>
              </div>
            <div className="border-b border-gray-300"></div>
            <div className="text-sm text-center py-4">By signing in or creating an account, you agree with our <a className="text-[#007dfc]" href="#">Terms & conditions</a> and <a className="text-[#007dfc]" href="#">Privacy statement</a></div>
            <div className="border-b border-gray-300"></div>
            <div className="text-sm text-center text-gray-500 pt-4">
            All rights reserved.
            Copyright (2006 - 2024) - Book.com™
            </div>
          </div>
        </div>
        }
          
          <div className="w-full max-w-[1108px] text-white flex items-center justify-between py-4 md:justify-between md:px-4">
              <div className='flex items-center font-semibold gap-1'>
                <Link to={"/"}>
                <div className='text-3xl flex items-center'>R<img src={logo} className="h-[100%] w-[30px]" /><img src={logo} className="h-[100%] w-[30px] rotate-90" />ms<span className='text-[#007dfc]'>.com</span></div>
                </Link>
              </div>
              <div className='hidden md:flex text-3xl'>
                <GiHamburgerMenu />
              </div>

              <div className="flex md:hidden">
                <IconButton active label="Stays" icon={IoBedOutline} />
                <IconButton label="Flights" icon={CiPlane} />
                <IconButton label="Car rentals" icon={IoCarSportOutline} />
                <IconButton label="Attractions" icon={MdOutlineAttractions} />
                <IconButton label="Airport taxis" icon={MdOutlineLocalTaxi} />
            </div>
              <div className="flex gap-3 md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="px-[10px] py-[8px] rounded-[4px] bg-white text-[#007dfc] font-semibold hover:opacity-90 w-[80px] border border-[#007dfc] text-sm">Register</button>
                <button onClick={() => setIsOpen(!isOpen)} className="px-[10px] py-[8px] rounded-[4px] bg-white text-[#007dfc] font-semibold hover:opacity-90 w-[80px] border border-[#007dfc] text-sm">Login</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default Navbar