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

    const countTotal = (fee: number) => {
        setTotalFee(totalFee + fee)
    }


    return (
        <section className="cart">
            { cartState.length < 1 ? <div>No products in your shopping cart</div> : 
                <>
                    <h3>Products in your shopping cart:</h3>
                    <div className="cart_container">
                        {cartState.map((p: CartItemType, ind: number) =>
                            <CartItem cartItem={p} ind={ind+1} updateTotal={countTotal}/>                                      
                        )}

                    </div>
                </>
            }

        </section>
    )
}