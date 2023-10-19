import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../home/Navbar";
import CartItem from "./CartItem";


const MyCart = () => {
    const products = useLoaderData();
    
    const [addedProducts, setAddedProducts] = useState([]);

    const getStoredProduct = () =>{
        const storedProduct = localStorage.getItem('product-id');
        if(storedProduct){
            return JSON.parse(storedProduct);
        }
        return [];
    }

    useEffect(() => {
        const storedProductId = getStoredProduct();
        if (products.length) {
            const storedProduct = [];
            for (const id of storedProductId) {
                const product = products.find(product => product._id === id);
                if (product) {
                    storedProduct.push(product);
                }
            }
            setAddedProducts(storedProduct);
        }
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                <h1 className="text-5xl font-semibold text-left mb-10">Added Product</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                    {
                        addedProducts.map(item => <CartItem key={item._id} item={item}></CartItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;