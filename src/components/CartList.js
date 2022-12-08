import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => { setCART(cart) }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='cartlist-item'>
                            <div>
                                <img src={cartItem.url} width={40} />
                            </div>
                            <div>
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            > -</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+ </button>

                            <span> {cartItem.price * cartItem.quantity} </span>
                        </div>
                        </div>
                    )
                })
            }
            <p> <b>Total : </b><span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>

        </div>
    )
}
export default CartList;