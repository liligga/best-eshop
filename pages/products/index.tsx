import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const getProducts = async () => {
    const resp = await fetch("/api/products")
    return resp.json()
}


export default function ProductListPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then( data => {
            setProducts(data)
        })
    }, []);


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h3>Список наших товаров</h3>
                <div className={styles.productList}>

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
                </div>
                
            </main>
        </div>


    )
}