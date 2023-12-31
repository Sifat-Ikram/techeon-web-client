import React from 'react';
import Navbar from '../home/Navbar';
import { useLoaderData } from 'react-router-dom';
import swal from "sweetalert";
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, productName, photoUrl, brandName, brandType, price, rating } = product;
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.currentTarget;
        
        const productName = form.product_name.value;
        const photoUrl = form.photoUrl.value;
        const brandName = form.brand_name.value;
        const brandType = form.brand_type.value;
        const price = form.product_price.value;
        const rating = form.product_rating.value;

        const updatedProduct = { productName, photoUrl, brandName, brandType, price, rating };
        console.log(updatedProduct);

        fetch(`https://techeon-web-server-41gzrlvkn-md-sifat-ikrams-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                Swal.fire(
                    'Congratulations!!!',
                    'Product is updated',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto mt-14 p-5 space-y-10">
                <h1 className="text-5xl font-semibold">Update Product</h1>
                <div className="rounded-md w-11/12 mx-auto p-5">
                    <form onSubmit={handleUpdate} className="space-y-10">
                        <div className="flex justify-between">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Product name</span>
                                </label>
                                <input type="text" name="product_name" defaultValue={productName} placeholder="Type product name here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Image</span>
                                </label>
                                <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Type photoUrl here" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Brand name</span>
                                </label>
                                <input type="text" name="brand_name" defaultValue={brandName} placeholder="Type brand name here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Brand Type</span>
                                </label>
                                <input type="text" name="brand_type" defaultValue={brandType} placeholder="Type of Brand" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Product Price</span>
                                </label>
                                <input type="text" name="product_price" defaultValue={price} placeholder="Type price here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Product Rating</span>
                                </label>
                                <input type="text" name="product_rating" defaultValue={rating} placeholder="Type rating here" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;