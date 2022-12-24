import styles from '@/styles/Home.module.css'
import ProductList from '@/components/productList'
import { useEffect, useState } from 'react'
import { Category, Product } from '@/types/products'


const getProducts = async () => {
    const resp = await fetch("/api/products")
    return resp.json()
}

const getCategories = async () => {
    const resp = await fetch("/api/categories")
    return resp.json()
}



export default function CategoriesPage() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState<number | boolean>(true)

    const FILTER_MAP = {
        boolean: () => true,
        number: (p: Product) => p.category == activeCategory
    }

    useEffect(() => {
        getProducts().then( data => {
            setProducts(data)
        })
        getCategories().then(data => {setCategories(data)})
    }, [])

    return (
            <main>
                <h3>Список товаров по категориям</h3>
                <ul className={styles.categoryList}>
                    <li><a href="#" onClick={() => setActiveCategory(true)}>Все</a></li>
                    <>{categories.map((c: Category) => 
                        <li key={c.id}>
                            <a href="#" onClick={() => setActiveCategory(c.id) }>{c.name}</a>
                        </li>
                    )}</>
                </ul>
                <div className={styles.productList}>
                    <ProductList products={products.filter(FILTER_MAP[typeof activeCategory])} />
                </div>
            </main>
    )
}