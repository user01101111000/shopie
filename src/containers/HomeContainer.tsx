import Banner from "../components/pages/home/Banner";
import BestSelling from "../components/pages/home/BestSelling";
import Category from "../components/pages/home/Category";
import ExploreHome from "../components/pages/home/ExploreHome";
import FlashSales from "../components/pages/home/FlashSales";
import Hero from "../components/pages/home/Hero";
import Support from "../components/pages/home/Support";
import { banner } from "../utils/assets"


const HomeContainer = () => {
    return <div className="home_container container">

        <Hero />
        <hr />
        <FlashSales />
        <hr />
        <Category />
        <hr />
        <BestSelling />
        <hr />
        <Banner src={banner} alt="banner_1" url="/" />
        <hr />
        <ExploreHome />
        <hr />
        <Support />

    </div>
}

export default HomeContainer;