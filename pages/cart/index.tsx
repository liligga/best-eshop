import styles from '@/styles/Home.module.css'
import products from './cartProducts.json'
import { Product, CartItemType } from '@/types/products'
import CartItem from '@/components/cartItem'
import { useState } from 'react'
import { selectCartState, addToCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CartPage() {
    const [totalFee, setTotalFee] = useState(0)
    const cartState = useSelector(selectCartState);
    const dispatch = useDispatch();

    const updateCart = (productId: number) => (e: any) => {
        const product = cartState.filter(p => p.product.id === productId)?.[0]?.product
        console.log("Product:",product, cartState)
        dispatch(addToCart({amount: parseInt(e.target.value) || 1, product: product}))
    }

    return (
        <section className="cart">
            { cartState.length < 1 ? <div><h3>No products in your shopping cart</h3></div> : 
                <>
                    <h3>Products in your shopping cart:</h3>
                    <div className="cart_container">
                        {cartState.map((p: CartItemType, ind: number) =>
                            <CartItem cartItem={p} updateTotal={updateCart} key={p.product.id} />                                      
                        )}

                    </div>
                    <div className="cart_container">Total: $0</div>
                </>
            }
            
        </section>
    )
}