
import { IoBedOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import cityf from "./cityf.png"
import { useNavigate } from "react-router";


const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1,
      })

      const navigate = useNavigate();

      const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev, 
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }})
      }

      const handleSearch = () => {
        navigate("/hotels", {state: {destination, date, options}});
      }

  return (

    <div className="bg-[#003580] flex flex-col justify-center items-center relative">
       
        <div className="w-full max-w-[1108px]">
           
            <div className="pt-[20px] md:px-4">
                <h1 className="text-white text-[2.5rem] font-[700] md:text-[1.5rem]">Find your next stay</h1>
                <p className="text-white text-[1.3rem] md:text-[1rem]">Search low prices on hotels, homes and much more...</p>   
            </div>
            
        </div>
        <img src={cityf} className="w-full md:mb-[-32px]" alt="" />
        <div className="
        h-[65px] bg-[#febb02] border-[4px] border-[#febb02] flex items-center justify-between 
        gap-1 absolute bottom-[-32px] w-full max-w-[1108px] rounded-md shadow-md md:relative md:flex-col
        md:h-full md:gap-1
        ">
                <div className="flex items-center gap-2 bg-white h-full rounded-l-md px-4 w-[39%] md:w-[100%] md:h-[50px] md:rounded-md">
                    <IoBedOutline size={25} />
                    <input 
                        className="outline-none placeholder:text-black focus:placeholder:text-gray-500 md:h-[50px]" 
                        type="text" 
                        placeholder="Where are you going?"
                        onChange={e => {
                            return setDestination(e.target.value);
                        }}
                    />
                </div>

                <div className="
                flex items-center gap-2 bg-white h-full px-4 w-[25%] cursor-pointer relative 
                select-none md:w-full md:border-[#febb02] md:border-[2px] md:h-[50px] md:rounded-md
                ">
                    <IoCalendarOutline size={25} />
                    <span className="w-full h-full flex items-center" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
                    {openDate &&<DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="absolute top-[61px] left-0 shadow-md z-20 md:w-full"
                        minDate={new Date()}
                    />}
                </div>

                <div className="flex items-center gap-2 bg-white h-full px-4 w-[25%] cursor-pointer relative md:w-[100%] md:h-[50px]  md:rounded-md">
                    <IoPersonOutline size={25} />
                    <span className="select-none w-full h-full flex items-center" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult · ${options.children} children · ${options.rooms} rooms`}</span>
                    {openOptions &&<div className="absolute top-[60px] right-0 text-black shadow-md rounded-md w-full p-10 flex flex-col gap-4 z-20 bg-white">
                        <div className="w-full flex justify-between items-center">
                            <span>Adult</span>
                            <div className="flex gap-2 border border-black p-2 rounded-md w-1/2 justify-between items-center">
                                <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")} className="text-2xl disabled:cursor-not-allowed">-</button>
                                <span>{options.adult}</span>
                                <button onClick={() => handleOption("adult", "i")} className="text-2xl">+</button>
                            </div>
                            
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span>Children</span>
                            <div className="flex gap-2 border border-black p-2 rounded-md w-1/2 justify-between items-center">
                                <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")} className="text-2xl disabled:cursor-not-allowed">-</button>
                                <span>{options.children}</span>
                                <button onClick={() => handleOption("children", "i")} className="text-2xl">+</button>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span>Rooms</span>
                            <div className="flex gap-2 border border-black p-2 rounded-md w-1/2 justify-between items-center">
                                <button disabled={options.rooms <= 1} onClick={() => handleOption("rooms", "d")} className="text-2xl disabled:cursor-not-allowed">-</button>
                                <span>{options.rooms}</span>
                                <button onClick={() => handleOption("rooms", "i")} className="text-2xl">+</button>
                            </div>
                        </div>
                    </div>}
                </div>

                <button className="
                gap-2 bg-[#007dfc] h-full rounded-r-md px-4 w-[11%] text-center text-white 
                text-xl font-semibold hover:bg-[#003580] transition ease-in-out md:w-[100%] md:rounded-md md:h-[50px]
                " onClick={handleSearch}>Search</button>
        </div>
        
    </div>
  )
}

export default Header