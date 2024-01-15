import React, { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import { FaLocationDot } from "react-icons/fa6";
import { FaSwimmer } from "react-icons/fa";
import { CiParking1 } from "react-icons/ci";
import { TbSmokingNo } from "react-icons/tb";
import { CiWifiOn } from "react-icons/ci";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineAirportShuttle } from "react-icons/md";
import { MdOutlineRoomService } from "react-icons/md";
import { GiBarbecue } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { PiShareNetworkThin } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/21957977.jpg?k=7f4694ceb6212232703a8170d04f4236a9aa3570641a950af5386b4df4933e97&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/22002066.jpg?k=e7e5a95bb5a6f142cbb1cad9dfe7c2dc30cd6d58a75e5cb2c8a899fdebd89d6a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/21985687.jpg?k=9db2ac6efc7e3e4072386c4dd375eeff456e0c1bf3540fde1bedcdf32039c3a4&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/21903673.jpg?k=2e1ce800b0bc96d114494a5b77b9a4b31a3b1bcc826227c7e3616abe24be941a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/21959215.jpg?k=6142bcef9edf96a8b1e4eb1b2f83d3675f380245ca252a95c565f82af2aae349&o=&hp=1"
    },
  ]
  const facilities = [
    {
      icon: <FaSwimmer />,
      name: "Outdoor swimming pool"
    },
    {
      icon: <CiParking1 />,
      name: "Free parking"
    },
    {
      icon: <TbSmokingNo />,
      name: "Nom-smoking rooms"
    },
    {
      icon: <CiWifiOn />,
      name: "Free Wifi"
    },
    {
      icon: <MdFamilyRestroom />,
      name: "Family rooms"
    },
    {
      icon: <MdOutlineAirportShuttle />,
      name: "Airport Shuttle"
    },
    {
      icon: <MdOutlineRoomService />,
      name: "Room service"
    },
    {
      icon: <GiBarbecue />,
      name: "BBQ facilities"
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center py-5 flex-col items-center">
      {openMap &&
        <div className="fixed top-0 left-0 z-[999] w-full h-[100%] flex items-center justify-center bg-black bg-opacity-75">
        <IoIosCloseCircle onClick={() => setOpenMap(false)} className="text-5xl text-white absolute top-2 right-2 cursor-pointer" />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.4735326516147!2d18.800398239366828!3d42.30709821899492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c2cae802512a1%3A0xd07bd1805c0fc57b!2sAruba!5e0!3m2!1smk!2smk!4v1705318957360!5m2!1smk!2smk"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
         className="
          border-none
          w-[90%]
          h-[85%]
         "></iframe>
        </div>}


       {open && 
        <div className="fixed top-0 left-0 w-full h-[100vh] z-50 bg-black bg-opacity-75 overflow-hidden">
          <IoIosCloseCircle onClick={() => setOpen(false)} className="text-4xl text-white absolute top-10 right-10 cursor-pointer" />
          
          <div className="w-full h-full flex items-center justify-center gap-10">
            <FaArrowCircleLeft className="text-6xl text-white cursor-pointer" onClick={() => handleMove('l')} />
            <img className="w-[80%] h-[80vh] object-cover sm:w-[95%] sm:h-[500px] select-none" src={photos[slideNumber].src} alt="" />
            <FaArrowCircleRight className="text-6xl text-white cursor-pointer" onClick={() => handleMove('r')} />
          </div>
          
        </div>
      
       }
        <div className="w-full max-w-[1128px]">
          <h1 className="
            text-2xl
            font-bold
            text-[#003580]
            sm:px-3 
          ">
            Hotel Abura
          </h1>
          <div className="flex items-center py-2 gap-2  sm:px-3 justify-between sm:flex-col">
            
            <div className="flex items-center gap-3 sm:flex-col">
              <div className="flex gap-1 items-center">
              <FaLocationDot className="text-[#003580]" />
              <span>Lastva Grbaljska bb, 85317 Budva, Montenegro</span>
              </div>
              <span className="text-[#003580] font-semibold cursor-pointer" onClick={() => setOpenMap(true)}>Good location - show map</span>
            </div>
            <div className="flex gap-5 items-center sm:flex-col sm:w-full"> 
              <div className="flex gap-5 text-[#007dfc]">
                <button className="text-3xl p-1 hover:bg-gray-200 h-max transition ease-in-out"><PiShareNetworkThin /></button>
                <button className="text-3xl p-1 hover:bg-gray-200 h-max transition ease-in-out"><CiHeart /></button>
              </div>
             
              <button 
                className="
                  w-full 
                  bg-[#007dfc]  
                  rounded-md
                  py-3
                  px-10
                  font-bold
                  hover:opacity-75
                  transition
                  ease-in-out
                  text-white
                  sm:w-full
                ">
                  Reserve
                </button>
            </div>
          </div>
          <div 
            className="
              grid 
              grid-cols-4 
              gap-2 
              sm:grid-cols-1 
              overflow-hidden
              [&>*:nth-child(1)]:col-span-2
              [&>*:nth-child(1)]:row-span-2
              sm:[&>*:nth-child(1)]:col-span-1
              sm:[&>*:nth-child(1)]:row-span-1
              sm:px-3
              [&>*:nth-child(1)]:rounded-tl-xl
              [&>*:nth-child(1)]:rounded-bl-xl
              [&>*:nth-child(3)]:rounded-tr-xl
              [&>*:nth-child(5)]:rounded-br-xl
              sm:hidden
            ">
              {photos.map((photo, i) => (
                <div className="overflow-hidden sm:rounded-md">
                  <img onClick={() => handleOpen(i)} className="h-full object-cover cursor-pointer" src={photo.src} />
                </div>
              ))}
          </div>
          <div className="hidden sm:block">
          <Slider {...settings}>
          {photos.map((photo, i) => (
                <div className="overflow-hidden sm:rounded-md">
                  <img onClick={() => handleOpen(i)} className="h-full object-cover cursor-pointer" src={photo.src} />
                </div>
              ))}
          </Slider>
          </div>
          <div className="py-7 sm:px-3 flex gap-4 sm:flex-col">
            <div className="w-2/3 sm:w-full sm:px-3">
                <div>
                  <h1 className="text-2xl font-semibold mb-4">Stay in the heart of Budva</h1>
                  <p>
                    You're eligible for a Genius discount at Hotel Aruba! To save at this property, all you have to do is sign in.
                    Featuring free bike rental, Aruba Hotel features an outdoor pool and a tennis court on a quiet location, about 6 km from the nearest town of Budva. Free WiFi is offered on site.
                    All rooms are air-conditioned and soundproofed, offering a safe and a work desk. The bathrooms come with a bathrobe, slippers and toiletries. Hotel Aruba's restaurant serves traditional dishes from Montenegro.
                    The sea, and the nearest beach of Jaz, are located within 2 km and can be reached via bike trail from the hotel. Budva Aquapark is some 3 km from Aruba Hotel.
                    Guests can also visit the beaches of Ploce or Trsteno. The airport of Tivat is 13 km away, and the vibrant town of Kotor is at a distance of 15 km. Free covered parking is provided at the hotel, no reservation needed.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="text-xl font-semibold mb-3">
                    Most popular facilities
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {facilities.map(facilitie => (
                      <div className="flex items-center gap-2 text-[#008009]">
                        <div>{facilitie.icon}</div>
                        <div>{facilitie.name}</div>  
                      </div>
                    ))}
                  </div>  
                </div>
            </div>
            <div className="w-1/3 sm:w-full sm:px-3 p-5 bg-[#007dfc] rounded-md text-white h-max flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-bold">Perfect for a 9-night stay!</h1>
                <p>
                  Located in the real heart of Budva,
                  this propery has an excilent location score of 9.8!
                </p>
              </div>
              <div className="my-5">
                 <h1 className="font-bold text-2xl">MKD 12.132 <span className="font-thin">(9 Nights)</span></h1>
              </div>
              <button 
              className="
                w-full 
                bg-[#003580]  
                rounded-md
                py-3
                font-bold
                hover:opacity-75
                transition
                ease-in-out
              ">
                Reserve or Book Now!
              </button>
            </div>
          </div>
         
        </div>
      </div>

      <MailList />
    </div>
  )
}

export default Hotel