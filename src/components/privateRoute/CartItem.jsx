import Swal from 'sweetalert2'

const CartItem = ({ item }) => {
    const { _id, productName, photoUrl, brandName, brandType, price, rating, description } = item;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Do you really want to delete this product from cart?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://techeon-web-server-41gzrlvkn-md-sifat-ikrams-projects.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        });
    }

    return (
        <div className="flex space-x-5">
            <div>
                <img src={photoUrl} className="w-56 h-44 rounded-md" alt={productName} />
            </div>
            <div className="py-16 space-y-3 text-left">
                <h1 className="text-lg font-semibold"> Product Name: {productName}</h1>
                <h1 className="text-lg font-semibold">Price: ${price}</h1>
                <div>
                    <button onClick={() => handleDelete(_id)} className="bg-red-600 px-3 py-1 text-white font-semibold text-lg rounded-md">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;