import { Link } from "react-router-dom";


const BrandItem = ({ brand }) => {
    const { id, title, image } = brand;
    return (
        <div>
            <Link key={id} to={`/${title}`}>
                <button className="relative hover:text-white text-black">
                    <img src={image} alt="" className="hover:opacity-80 relative h-52 w-96 rounded-lg" />
                    <h1 className=" -mt-20 pl-3 absolute text-5xl text-center font-semibold">{title}</h1>
                </button>
            </Link>
        </div>
    );
};

export default BrandItem;