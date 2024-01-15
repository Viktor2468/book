import { useLocation } from "react-router"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {
  const location = useLocation();
  const [destenation, setDestenation] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  console.log(location)
  return (
    <div>
      <Navbar  />
      <div className="flex justify-center my-5">
        <div className="w-full flex max-w-[1128px] gap-5 sm:flex-col">
          <div className="flex-[1]  p-4 rounded-md sticky top-3 h-max shadow-listBoxShadow border border-[#003580] sm:relative sm:mx-2">
            <h1 className="text-2xl text-[#003580] mb-3 font-bold">Search</h1>
            <div className="flex flex-col gap-1 mb-3">
              <label className="text-[#007dfc] font-semibold" htmlFor="">Destination</label>
              <input className="h-10 outline-none border border-[#007dfc] rounded-sm p-[5px]" type="text" placeholder={destenation} />
            </div>
            <div className="flex flex-col gap-1 mb-3 relative">
              <label className="text-[#007dfc] font-semibold" htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} className="h-10 outline-none border border-[#007dfc] rounded-sm p-[5px] cursor-pointer bg-white select-none flex items-center">
              {`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}
                {openDate &&
                <DateRange 
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="absolute top-[65px] left-0"
                />}
              </span>
            </div>
            <div className="text-[#007dfc] font-semibold mb-3">Options</div>
            <div className="ml-3">
            <div className="flex gap-1 mb-3 items-center justify-between">
              <label className="" htmlFor="">Min price <small>(per night)</small></label>
              <input className="h-7 outline-none p-[5px] w-[80px] border border-[#007dfc] rounded-sm" type="number"/>
            </div>
            <div className="flex gap-1 mb-3 items-center justify-between">
              <label className="" htmlFor="">Max price <small>(per night)</small></label>
              <input className="h-7 outline-none p-[5px] w-[80px] border border-[#007dfc] rounded-sm" type="number"/>
            </div>
            <div className="flex gap-1 mb-3 items-center justify-between">
              <label className="" htmlFor="">Adult</label>
              <input className="h-7 outline-none p-[5px] w-[80px] border border-[#007dfc] rounded-sm" min={1} type="number" placeholder={options.adult} />
            </div>
            <div className="flex gap-1 mb-3 items-center justify-between">
              <label className="" htmlFor="">Children</label>
              <input className="h-7 outline-none p-[5px] w-[80px] border border-[#007dfc] rounded-sm" min={0} type="number" placeholder={options.children} />
            </div>
            <div className="flex gap-1 mb-3 items-center justify-between">
              <label className="" htmlFor="">Rooms</label>
              <input className="h-7 outline-none p-[5px] w-[80px] border border-[#007dfc] rounded-sm" min={1} type="number" placeholder={options.rooms} />
            </div>
            </div>  
            <button className="w-full bg-[#003580] text-white font-semibold h-10 flex items-center justify-center rounded-sm hover:bg-[#007dfc] transition ease-in-out">
              Search
            </button>     
          </div>
          <div className="flex-[3]">
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
          </div>
        </div>
      </div>
      <MailList />
    </div>
  )
}

export default List