import { Link } from "react-router-dom"

const SearchItem = () => {
  return (
    <div className="flex border border-[#007dfc] p-4 rounded-md gap-5 mb-5 hover:shadow-listBoxShadow transition ease-in-out sm:flex-col sm:mx-2">
        <img className="w-[200px] h-[200px] sm:w-full object-cover rounded-md" src="https://cf.bstatic.com/xdata/images/hotel/square600/21957977.webp?k=df623ce1087e70567989ef8767d3df6fdc07ef1c3d705858ca52b08c68072dd1&o=" alt="" />
        <div className="flex flex-col gap-2 flex-[2]">
            <h1 className="text-xl font-bold text-[#003580]">Hotel Abura</h1>
            <span className="text-[12px]">500m from center</span>
            <span className="text-[12px] bg-[#007dfc] w-max text-white p-1 rounded-md">Free airport taxi</span>
            <span className="font-bold text-sm">Studio Apartment with Air conditioning</span>
            <span className="text-[12px]">Entire studio • 1 bathroom • 21m² • 1 full bed</span>
            <span className="text-[12px] font-bold text-[#008009]">Free cancelation</span>
            <span className="text-[12px] font-bold text-[#008009]">No prepayment needed</span>
        </div>
        <div className="flex-[1] flex flex-col items-end justify-between">
            <div className="flex gap-2 ">
                <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold">Eccellent</span>
                    <span className="text-[12px]">432 reviews</span>
                </div>
                <button className="text-xl font-bold bg-[#003580] text-white p-1 h-max rounded-e-md rounded-t-md">8.9</button>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xl font-semibold">MKD 12,132</span>
                <span className="text-[12px]">Includes taxes and fees</span>
                <Link to={"/hotels/:id"}>
                    <button className="bg-[#007dfc] text-white w-full px-6 py-3 rounded-md hover:bg-[#003580] transition ease-in-out mt-4">See availability</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default SearchItem