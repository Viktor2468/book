
const Featured = () => {
  return (
    <div className="w-full max-w-[1108px] flex flex-col gap-2 md:gap-1 md:px-4">
        <h1 className="text-2xl font-bold">Trending destinations</h1>
        <p>Most popular choices for travelers from North Macedonia</p>
        <div className="flex gap-2 md:gap-1" >
            <div className="w-full relative overflow-hidden rounded-tl-xl hover:brightness-75 transition ease-in-out cursor-pointer">
                <img 
                    className="object-cover w-full h-[270px] brightness-90" 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/691068.jpg?k=612f346134e1f9d25d74c1e0842cd90084f3f6cde308a996172b8be2bf7bb712&o=" />
                    <h1 
                        className="
                            text-2xl
                            font-bold
                            text-white
                            absolute
                            top-5
                            left-5
                            md:text-xl
                        ">
                            Budva
                        </h1>
            </div>
            <div className="w-full relative overflow-hidden rounded-tr-xl hover:brightness-75 transition ease-in-out cursor-pointer">
                <img 
                    className="object-cover w-full h-[270px] brightness-90" 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/637481.jpg?k=961a4e84de74ce94eb468318eb18fab847cbd6fc99dc93187fd1492172071375&o=" alt="" />
                     <h1 
                        className="
                            text-2xl
                            font-bold
                            text-white
                            absolute
                            top-5
                            left-5
                            md:text-xl
                        ">
                            Kotor
                        </h1>
            </div>
        </div>
        <div className="flex gap-2 md:gap-1" >
            <div className="w-full relative overflow-hidden rounded-bl-xl hover:brightness-75 transition ease-in-out cursor-pointer">
                <img 
                    className="object-cover w-full h-[270px] brightness-90" 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/638380.jpg?k=e3fd6461f3755e478e98050f49a1b2be8eed5e92913fac3cd317bfab8158e1e0&o=" />
                    <h1 
                        className="
                            text-2xl
                            font-bold
                            text-white
                            absolute
                            top-5
                            left-5
                            md:text-xl
                        ">
                            Podgorica
                        </h1>
            </div>
            <div className="w-full relative overflow-hidden hover:brightness-75 transition ease-in-out cursor-pointer md:hidden">
                <img 
                    className="object-cover w-full  h-[270px] brightness-90" 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/637152.jpg?k=e0c8290998356aa03d1ab85530d425b75a4958f5b06aca8c1bc55a638a988d7f&o=" alt="" />
                     <h1 
                        className="
                            text-2xl
                            font-bold
                            text-white
                            absolute
                            top-5
                            left-5
                            md:text-xl
                        ">
                            Belgrade
                        </h1>
            </div>
            <div className="w-full relative overflow-hidden rounded-br-xl hover:brightness-75 transition ease-in-out cursor-pointer">
                <img 
                    className="object-cover w-full h-[270px] brightness-90" 
                    src="https://cf.bstatic.com/xdata/images/city/600x600/972725.jpg?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o=" alt="" />
                     <h1 
                        className="
                            text-2xl
                            font-bold
                            text-white
                            absolute
                            top-5
                            left-5
                            md:text-xl
                        ">
                            Dubrovnik
                        </h1>
            </div>
        </div>
    </div>
  )
}

export default Featured