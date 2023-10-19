import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";


const Home = () => {
        const brands = useLoaderData();
    return (
        <div className="w-11/12 mx-auto h-full">
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;