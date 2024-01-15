import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const PropertyList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="w-full max-w-[1128px] md:px-4">
        <div className="ml-[10px] mb-[10px]">
            <h1 className="text-2xl font-bold mb-2">Homes guests love</h1>
            <p>From castles and villas to boats and igloos, we've got it all</p>
        </div>
        <Slider className="popularList" {...settings}>
         
          <div className="relative hover:outline-[#003580]">
                <img  
                className="w-full h-[218px] rounded-t-xl" 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt="" />
                <div className="p-2 relative">
                    <div className="font-bold">Villa Domina</div>
                    <p className="text-sm text-gray-500">Canada, Stanstead-Est</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="bg-[#003580] text-white p-1 flex items-center rounded-md mt-1">9.3</span>
                        <span>Superb</span>
                        · 
                        <span>1,258 reviews</span>
                    </div>
                    <div className="mt-5 flex justify-end gap-1"><span>Starting from</span><span className="font-bold">MKD 2,897</span></div>
                </div>
                
            </div>
            <div className="relative hover:outline-[#003580]">
                <img  
                className="w-full h-[218px] rounded-t-xl" 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=" alt="" />
                <div className="p-2">
                    <div className="font-bold">numa I Vita Apartments</div>
                    <p className="text-sm text-gray-500">Fortezza da Basso, Italy, Florence</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="bg-[#003580] text-white p-1 flex items-center rounded-md mt-1">9.2</span>
                        <span>Superb</span>
                        · 
                        <span>1,304 reviews</span>
                    </div>
                    <div className="mt-5 flex justify-end gap-1"><span>Starting from</span><span className="font-bold">MKD 7,387</span></div>
                </div>
                
            </div>
            <div className="relative hover:outline-[#003580]">
                <img  
                className="w-full h-[218px] rounded-t-xl" 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" />
                <div className="p-2">
                    <div className="font-bold">Quays at The Tower of London</div>
                    <p className="text-sm text-gray-500">City of London, United Kingdom, London</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="bg-[#003580] text-white p-1 flex items-center rounded-md mt-1">9.4</span>
                        <span>Superb</span>
                        · 
                        <span>22.236 reviews</span>
                    </div>
                    <div className="mt-5 flex justify-end gap-1"><span>Starting from</span><span className="font-bold">MKD 2,897</span></div>
                </div>
                
            </div>
            <div className="relative hover:outline-[#003580]">
                <img  
                className="w-full h-[218px] rounded-t-xl" 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o=" alt="" />
                <div className="p-2">
                    <div className="font-bold">Casa Portuguesa Prata</div>
                    <p className="text-sm text-gray-500">Santa Maria Maior, Portugal, Lisboa</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="bg-[#003580] text-white p-1 flex items-center rounded-md mt-1">7.7</span>
                        <span>Superb</span>
                        · 
                        <span>70 reviews</span>
                    </div>
                    <div className="mt-5 flex justify-end gap-1"><span>Starting from</span><span className="font-bold">MKD 12,867</span></div>
                </div>
                
            </div>
            <div className="relative hover:outline-[#003580]">
                <img  
                className="w-full h-[218px] rounded-t-xl" 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/123802411.webp?k=a7b31816f098dc6d7a4d707495c2d98738e78f16d7e172c2ae76b0c2f61c18f5&o=" alt="" />
                <div className="p-2">
                    <div className="font-bold">Apartments by Adrez Living</div>
                    <p className="text-sm text-gray-500">Prague 1, Czech Republic, Prague</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="bg-[#003580] text-white p-1 flex items-center rounded-md mt-1">8.3</span>
                        <span>Superb</span>
                        · 
                        <span>361 reviews</span>
                    </div>
                    <div className="mt-5 flex justify-end gap-1"><span>Starting from</span><span className="font-bold">MKD 3,717</span></div>
                </div>
                
            </div>
            <div className="relative hover:outline-[#003580]">
                <img  
                className="w-full h-[218px] rounded-t-xl" 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=" alt="" />
                <div className="p-2">
                    <div className="font-bold">Apartments by The Sloane Club</div>
                    <p className="text-sm text-gray-500">United Kingdom, London</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <span className="bg-[#003580] text-white p-1 flex items-center rounded-md mt-1">9.1</span>
                        <span>Superb</span>
                        · 
                        <span>195 reviews</span>
                    </div>
                    <div className="mt-5 flex justify-end gap-1"><span>Starting from</span><span className="font-bold">MKD 35,60</span></div>
                </div>
                
            </div>
    
        </Slider>
      </div>
  )
}


export default PropertyList