import Banner from "../components/pages/home/Banner";
import Category from "../components/pages/home/Category";
import FlashSales from "../components/pages/home/FlashSales";
import Hero from "../components/pages/home/Hero";
import Support from "../components/pages/home/Support";
import { banner } from "../utils/assets"


const HomeContainer = () => {
    return <div className="home_container container">

        <Hero />
        <FlashSales />
        <Banner src={banner} alt="banner_1" url="/" />
        <Category />
        <Support />

    </div>
}

export default HomeContainer;