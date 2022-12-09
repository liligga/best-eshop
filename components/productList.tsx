import { Product } from '../types/products'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export default function ProductList({products}:{products: Product[]}) {
    const [numberToBuy, setNumberToBuy] = useState({})

    const checkProduct = (event: any, productId: number) => {
        const productNumber = parseInt(event.target.value)
        
        if(products.find(p => p.id === productId) !== undefined && productNumber > -1 && productNumber < 1001) {
            setNumberToBuy({...numberToBuy, [productId]: productNumber})
        }
    }

    const addToCart = (productId: number) => {
        if(Object.keys(numberToBuy).find(p => parseInt(p) === productId && numberToBuy[productId] > 0 && numberToBuy[productId] < 1001)) {
            // logic to add to cart
            console.log(numberToBuy[productId])
        } 
    }

    return (
        <>
        {products.map((p) => 
            <div className={styles.card} key={p.id}>
                <Link href={`/products/${p.id}`}>{p.name}</Link>
                <p>
                    {p.desc}
                </p>
                <p>Цена: {p.price}</p>
                <p>Категория: {p.category}</p>
                <input type="number" name="numberToBuy" min="0" max="1000" onChange={(e) => checkProduct(e, p.id)} />
                <button onClick={(e) => addToCart(p.id)}>Добавить в корзину</button>
            </div>

        )}
        </>
    )
}