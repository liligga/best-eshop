import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars,
    faHeart,
    faShoppingCart,
    faUser
} from "@fortawesome/free-solid-svg-icons"
import { selectNumberOfProducts } from "@/store/cartSlice";
import { useSelector } from "react-redux";


export default function SiteHeader() {
    const numberOfProducts = useSelector(selectNumberOfProducts);

    return (
        <header>
            <input type="checkbox" name="" id="toggler" />
            {/* <label htmlFor="toggler" className="fa fa-bars"> */}
                <FontAwesomeIcon icon={faBars} />
            {/* </label> */}

            <Link href="#" className="logo">Univer<span>.</span></Link>

            <nav className="navbar">
                <Link href="/">Home</Link>
                <Link href="/static/about-us">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/categories">Categories</Link>
                <Link href="/static/write-us">Contacts</Link>
            </nav>

            <div className="icons">
                <Link href="#">
                    <FontAwesomeIcon icon={faHeart} className="fas fa-heart"/>
                </Link>
                <Link href="/cart" className="fas fa-shopping-cart cart-link">
                    <FontAwesomeIcon icon={faShoppingCart} className="fas fa-shopping-cart" />
                    <span>{numberOfProducts}</span></Link>
                <Link href="#" >
                    <FontAwesomeIcon icon={faUser} className="fas fa-user" />
                </Link>
            </div>
        </header>

    )
}