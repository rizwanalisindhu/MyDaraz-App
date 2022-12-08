import '../App.css';

function CartList({ cart }) {
    return (

        <div>
            {
                cart.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>
                            <button> -</button>
                            <span> {cartItem.quantity} </span>
                            <button>+ </button>

                            <span> {cartItem.price} </span>
                        </div>
                    )
                })
            }
           

        </div>
    )
}
export default CartList;