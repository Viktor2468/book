import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import PopularList from "../../components/popularList/PopularList"
import MailList from "../../components/mailList/MailList"


const Home = () => {
  return (
    <div>
        <Navbar />
        <Header type={null} />
        <div className="mt-[80px] mb-[50px] flex flex-col items-center gap-[30px]">
          <Featured />
          <PropertyList />
          <PopularList />
        </div>
        <MailList />
    </div>
  )
}

export default Home