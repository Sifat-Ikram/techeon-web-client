import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../home/Navbar";
import swal from "sweetalert";


const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find(product => product._id === id)
    const { _id, productName, photoUrl, brandName, brandType, price, rating, description } = product;
    
    const getStoredProduct = () =>{
        const storedProduct = localStorage.getItem('product-id');
        if(storedProduct){
            return JSON.parse(storedProduct);
        }
        return [];
    }

    const handleAddToCart = () =>{
        const savedProduct = id =>{
            const storedProduct = getStoredProduct();
            const exist = storedProduct.find(productId => productId === id);
            if(!exist){
                storedProduct.push(id);
                localStorage.setItem('product-id', JSON.stringify(storedProduct));
                swal("Good job!", "Your have added this item successfully", "success");
            }
            else{
                swal("Oops!", "This item is already selected. Try another one", "error");
            }
        }

        savedProduct(id);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto mt-10 text-left space-y-10">
                <img src={photoUrl} className="h-96 w-full" alt="" />
                <div className=" flex justify-end">
                    <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                </div>
                <h1 className="font-semibold text-4xl">Product Name: {productName}</h1>
                <h1 className="text-2xl font-medium">Brand: {brandName}</h1>
                <h1 className="text-2xl font-medium">Product: {brandType}</h1>
                <h1 className="text-2xl font-medium">Price: {price}</h1>
                <h1 className="text-lg"><span className="text-2xl font-medium">Description: </span>{description}</h1>
            </div>

        </div>
    );
};

export default ProductDetails;