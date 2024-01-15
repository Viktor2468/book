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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div className="w-full max-w-[1128px] md:px-4">
        <div className="ml-[10px] mb-[10px]">
          <h1 className="text-2xl font-bold mb-2">Browse by property type</h1>
          <p>Pick a vibe and explore the top destinations</p>
        </div>
        <Slider {...settings}>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Hotels</div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Apartments</div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Resorts</div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Villas</div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Cabins</div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Cottages</div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl brightness-90 hover:brightness-75" 
              src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Holiday homes</div>
          </div>
          <div className="relative ">
            <img  
              className="w-full rounded-xl brightness-90hover:brightness-75" 
              src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=" alt="" />
            <div className="absolute top-4 left-4 font-bold text-white">Serviced apartments</div>
          </div>
    
        </Slider>
      </div>
  )
}


export default PropertyList