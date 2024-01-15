const MailList = () => {
  return (
    <div className="w-full">
         <div className="bg-[#003580] w-full py-12 text-white flex items-center flex-col gap-5 sm:px-3">
            <div className="text-center">
                <h1 className="text-2xl font-thin">Save time, save money!</h1>
                <p className="font-thin text-gray-300">Sign up and we'll send the best deals to you</p>
            </div>
            <div className="flex rounded-md overflow-hidden gap-2">
                <input className="h-[48px] w-[250px] sm:w-[150px] outline-none text-[#007dfc] pl-2"  placeholder="Your email adress" type="email" />
                <button className="text-xl font-thin bg-[#007dfc] h-[48px] px-5 hover:opacity-75">Subscribe</button>
            </div>
        </div>
        <div className="bg-[#007dfc] py-5 flex justify-center text-[white] ">
            <div className="w-full max-w-[1108px] text-sm flex justify-between sm:flex-col sm:items-center sm:text-center sm:gap-5">
                <div className="flex flex-col">
                   <p>Countries</p>
                   <p>Regions</p>
                   <p>Cities</p>
                   <p>Districts</p>
                   <p>Airports</p>
                   <p>Hotels</p>
                   <p>Places of interest</p>
                </div>
                <div className="flex flex-col">
                    <p>Homes</p>
                    <p>Apartments</p>
                    <p>Resorts</p>
                    <p>Villas</p>
                    <p>Hostels</p>
                    <p>B&Bs</p>
                    <p>Guest houses</p>
                </div>
                <div className="flex flex-col">
                   <p>Unique places to stay</p>
                   <p>All destinations</p>
                   <p>All flight destinations</p>
                   <p>All car hire locations</p>
                   <p>Discover</p>
                   <p>Reviews</p>
                   <p>Discover monthly stays</p>
                   <p>Unpacked: Travel articles</p>
                   <p>Seasonal and holiday deals</p>
                   <p>Traveller Review Awards</p>
                </div>
                <div className="flex flex-col">
                    <p>Car hire</p>
                    <p>Flight finder</p>
                    <p>Restaurant reservations</p>
                    <p>Booking.com for Travel Agents</p>
                </div>
                <div className="flex flex-col">
                    <p>About Book.com</p>
                    <p>Customer Service help</p>
                    <p>Partner help</p>
                    <p>Careers</p>
                    <p>Sustainability</p>
                    <p>Press centre</p>
                    <p>Safety resource centre</p>
                    <p>Investor relations</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
        <div className="text-center text-sm p-2 text-gray-500">Copyright © 1996–2024 Booking.com™. All rights reserved.</div>
    </div> 
  )
}
 
export default MailList