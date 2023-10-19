

const CartItem = ({item}) => {
    const { _id, productName, photoUrl, brandName, brandType, price, rating, description } = item;
    return (
        <div className="flex space-x-5">
            <div>
                <img src={photoUrl} className="w-56 h-44 rounded-md" alt={productName} />
            </div>
            <div className="py-16 space-y-3 text-left">
                <h1 className="text-lg font-semibold"> Product Name: {productName}</h1>
                <h1 className="text-lg font-semibold">Price: ${price}</h1>
                <div>
                    <button className="bg-red-600 px-3 py-1 text-white font-semibold text-lg rounded-md">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;