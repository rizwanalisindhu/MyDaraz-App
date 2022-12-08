import '../App.css';

function ProductList({ product }) {
    return (
        <div className='flex'>
            {product.map((productItem, productIndex) => {
                return (
                    <div style={{ width: '33%' }}>

                        <div className='product-item'>
                            <img src={productItem.url} width="100%" />
                            <p>{productItem.name} | {productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p>Rs. {productItem.price} /-</p>
                            <button>Add To Cart</button>
                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default ProductList