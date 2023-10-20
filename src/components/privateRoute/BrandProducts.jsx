import { useLoaderData, useParams } from "react-router-dom";
import ProductItems from "./ProductItems";
import Navbar from "../home/Navbar";
import swal from "sweetalert";


const BrandProducts = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const getProduct = () => {
        if (products) {
            return products.filter(item => item.brandName === id);
        }
        else{
            swal("Ooops!!!", "there is no product here yet", "error")
        }
    }

    const allProduct = getProduct();
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    allProduct.map(product => <ProductItems key={product._id} product={product}></ProductItems>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;