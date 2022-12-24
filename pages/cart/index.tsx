import styles from '@/styles/Home.module.css'
import products from './cartProducts.json'
import { Product, CartItemType } from '@/types/products'
import CartItem from '@/components/cartItem'
import { useState } from 'react'
import { selectCartState, addToCart, selectTotal } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CartPage() {
    const cartState = useSelector(selectCartState);
    const totalSum = useSelector(selectTotal);
    const dispatch = useDispatch();

    const updateCart = (productId: number, change: number) => (e: any) => {
        const item = cartState.filter(p => p.product.id === productId)?.[0]
        const productNumber = (item.amount || 1) + change;
        if(item && productNumber > 0 && productNumber < 1001) {
            dispatch(addToCart({amount: productNumber, product: item.product}))
        }
    }

    return (
        <main>
            <section className="cart">
                { cartState.length < 1 ? <div><h3>No products in your shopping cart</h3></div> :
                    <>
                        <h3>Products in your shopping cart:</h3>
                        <div className="cart_container">
                            {cartState.map((p: CartItemType, ind: number) =>
                                <CartItem cartItem={p} updateTotal={updateCart} key={p.product.id} />
                            )}
                        </div>
                        <div className="cart_container">Total: ${totalSum}</div>
                    </>
                }
            
            </section>
        </main>
    )
}