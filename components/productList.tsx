import { Product } from '@/types/products'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { selectCartState, addToCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faShare} from "@fortawesome/free-solid-svg-icons"


export default function ProductList({products}:{products: Product[]}) {
    const [numberToBuy, setNumberToBuy] = useState({})
    const cartState = useSelector(selectCartState);
    const dispatch = useDispatch();

    const checkProduct = (productId: number, shift: number) => (event: any) => {
        const productNumber = (numberToBuy[productId] || 1) + shift;
        
        if(products.find(p => p.id === productId) !== undefined && productNumber > -1 && productNumber < 1001) {
            setNumberToBuy(curr => {return {...curr, [productId]: productNumber}})
        }
    }

    const addToCartClick = (productId: number) => (e: any) => {
        e.preventDefault()
        // if(Object.keys(numberToBuy).find(p => parseInt(p) === productId && numberToBuy[productId] > 0 && numberToBuy[productId] < 1001)) {
            // logic to add to cart
            // console.log(numberToBuy[productId])
            const product = products.filter(p => p.id === productId)[0] 
            console.log("Product:",product, cartState)
            dispatch(addToCart({amount: numberToBuy[product.id] || 1, product: product}))
        // } 
    }

    return (

        <section className="products" id="products">
            

            <div className="box-container">
            {products.length < 1 ? 
                <div><h1>Nothing Found</h1></div> : 
                products.map((p) => 
                        <div className="box">
                            <span className="discount">-{p.discount}%</span>

                            <div className="image">
                                <Link href={`/products/${p.id}`}>
                                    <img src="media/img-2.jpg" alt="" />
                                </Link>
                                
                                <div className="icons">
                                    <div className="number-input">
                                        <button onClick={checkProduct(p.id, -1)}> - </button>
                                        <input
                                            type="number" 
                                            name="numberToBuy" 
                                            min="1" 
                                            max="1000"
                                            value={numberToBuy[p.id] || 1} />
                                        <button onClick={checkProduct(p.id, 1)}> + </button>
                                    </div>
                                    
                                    <button 
                                        className="cart-btn"
                                        onClick={addToCartClick(p.id)}>Add to cart</button>
                                    <FontAwesomeIcon icon={faHeart}/>
                                    <FontAwesomeIcon icon={faShare}/>
                                </div>
                            </div>

                            <div className="content">
                                <Link href={`/products/${p.id}`}>
                                    <h3>{p.name}</h3>
                                </Link>
                                <div className="price">${p.price * (100-p.discount)/100} <span>${p.price}</span></div>
                            </div>
                        </div>
                )
            }
            </div>
        </section>

    )
}