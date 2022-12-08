import styles from '../../styles/Home.module.css'
import products from './cartProducts.json'
import { Product } from '../../types/products'
import CartItem from '../../components/cartItem'
import { useState } from 'react'

export default function CartPage() {
    const [totalFee, setTotalFee] = useState(0)

    const countTotal = (fee: number) => {
        setTotalFee(totalFee + fee)
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h3>Товары в корзине</h3>
                <table>
                    {products.map((p: Product, ind: number) =>
                        <CartItem product={p} ind={ind} updateTotal={countTotal}/>                                      
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