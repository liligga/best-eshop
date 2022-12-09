import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ProductSearch from '@/components/productSearch'
import ProductList from '@/components/productList'
import { Product } from '@/types/products'


const getProducts = async () => {
    const resp = await fetch("/api/products")
    return resp.json()
}


export default function ProductListPage() {
    const [products, setProducts] = useState([])
    const [searchToken, setSearchToken] = useState("")

    useEffect(() => {
        getProducts().then( data => {
            setProducts(data)
        })
    }, []);


    const submitSearch = (e: any) => {
        const search = e.target.value.trim().toLowerCase();
        if (search.length >= 3) {
            setSearchToken(search);
        } else {
            setSearchToken('')
        }
    }


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h3>Список наших товаров</h3>
                <ProductSearch onSearch={submitSearch}/>
                <div className={styles.productList}>
                    <ProductList products={products.filter((p: Product) => p.name.toLowerCase().includes(searchToken)||p.desc.toLowerCase().includes(searchToken))} />
                </div>
                
            </main>
        </div>


    )
}