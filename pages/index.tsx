import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import AboutUs from '@/components/about-us'
import ProductList from '@/components/productList'
import { useEffect, useState } from 'react'

const getProducts = async () => {
  const resp = await fetch("/api/products")
  return resp.json()
}


export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts().then( data => {
          setProducts(data)
      })
  }, []);


  return (
    <>

      <Head>
        <title>Магазин одежды</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="home" id="home">
        <div className="content">
          <h3>Best clothes in the univeristy</h3>
          <span>natural cannabis</span>
          <p>
            lSunt voluptate amet esse pariatur voluptate aliquip aute qui laboris
            cillum magna fugiat aliqua duis.
          </p>
          <a id="#" className="btn">shop now</a>
        </div>
      </section>
      <AboutUs />
      <h1 className="heading">latest <span>products</span></h1>
      <ProductList products={products}/>
      <h2><Link href={`/products`}>See all products ..</Link></h2>
    </>
  )
}
