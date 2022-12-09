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
        <div className={styles.container}>
            <main className={styles.main}>
                <h3>Товары в корзине</h3>
                <table>
                    {cartState.map((p: Product, ind: number) =>
                        <CartItem product={p} ind={ind+1} updateTotal={countTotal}/>                                      
                    )}
                    <tr>
                        <td>
                            Всего:
                        </td>
                        <td>
                            ${totalFee}
                        </td>
                    </tr>
                </table>
            </main>
        </div>
    )
}