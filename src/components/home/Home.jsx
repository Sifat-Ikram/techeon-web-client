import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";
import Marquee from "react-fast-marquee";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div className="w-11/12 mx-auto h-full">
            <Navbar></Navbar>
            <Marquee speed={100} className="py-5 px-10 text-blue font-bold text-2xl">
                Hurry up!!! There is a big discount on apple products. Buy any apple product and get 30% discount. The discount offer is available for this month only.
            </Marquee>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;