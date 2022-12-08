import { Product } from '../types/products'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function ProductList({products}:{products: Product[]}) {
    return (
        <>
        {products.map((p) => 
            <div className={styles.card}>
                <Link href={`/products/${p.id}`}>{p.name}</Link>
                <p>
                    {p.desc}
                </p>
                <p>Цена: {p.price}</p>
                <p>Категория: {p.category}</p>
            </div>

        )}
        </>
    )
}