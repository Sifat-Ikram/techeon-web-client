import { useEffect, useState } from "react";
import BrandItem from "./BrandItem";


    const Brands = ({brands}) => {      
    return (
        <div className="mt-20">
            <h1 className="text-4xl mb-10">Our Brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                brands.map( brand => <BrandItem key={brand.id} brand={brand}></BrandItem> )
              }
            </div>
        </div>
    );
};

export default Brands;