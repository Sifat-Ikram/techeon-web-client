import { useEffect, useState } from "react";
import Navbar from "../home/Navbar";
import { Link } from "react-router-dom";


const ProductItems = ({ product }) => {
    const { _id, productName, photoUrl, brandName, brandType, price, rating, description } = product;




    return (
        <div>
            <div className="flex justify-between items-center px-3 pr-5 rounded-lg border-blue-500 bg-blue-400 border-4 border-solid">
                <figure><img src={photoUrl} alt={productName} className="h-40 w-40 rounded-lg" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title ">Name: {productName}</h2>
                    <h2 className="card-title">Brand: {brandName}</h2>
                    <h2 className="card-title">Type: {brandType}</h2>
                    <div className="flex justify-between">
                        <h2 className="card-title">Price: {price}</h2>
                        <h2 className="card-title">Ratings: {rating}</h2>
                    </div>
                    <div className="flex gap-10 justify-center">
                        <Link to={`/details/${_id}`}>
                            <button className="btn-primary py-2 px-4 rounded-lg font-semibold">Details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn-accent text-white py-2 px-4 rounded-lg font-semibold">Update</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductItems;