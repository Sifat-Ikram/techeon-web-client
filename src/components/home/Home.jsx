import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;