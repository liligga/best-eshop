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
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(Infinity)
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("")
    const [filteredProducts, setFiltered] = useState([])


    useEffect(() => {
        getProducts().then( data => {
            setProducts(data)
        })
    }, []);

    useEffect(() => {
        let result = products;
        result = result.filter((p: Product) => p.name.toLowerCase().includes(searchToken)||p.desc.toLowerCase().includes(searchToken))
        result = result.filter((p: Product) => p.price > minPrice && p.price < maxPrice)
        result = result.filter((p: Product) => p.category.includes(category))
        setFiltered(result)
    }, [searchToken, minPrice, maxPrice, category])

    const setFilter = (val: string | number, field: string) => (e: any) => {
        console.log('category')
        switch (field) {
            case 'minPrice':
                setMinPrice(val)
                break
            case 'maxPrice':
                setMaxPrice(val)
                break
            case 'category':
                setCategory(val)
                break
            // case 'minPrice':
            //     setMinPrice(val)
            //     break
            // case 'minPrice':
            //     setMinPrice(val)
            //     break
        }
    }

    const submitSearch = (e: any) => {
        const search = e.target.value.trim().toLowerCase();
        if (search.length >= 3) {
            setSearchToken(search);
        } else {
            setSearchToken('')
        }
    }


    return (
        <>
            <main>
                <h3 className='productsHeading'>Our products</h3>
                <ProductSearch onSearch={submitSearch} onFilter={setFilter} />
                <ProductList products={filteredProducts} />
                
            </main>
        </>
    )
}