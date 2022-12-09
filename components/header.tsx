import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function SiteHeader() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">Главная</Link>    
                </li>
                <li>
                    <Link href="/products">Все товары</Link>    
                </li>
                <li>
                    <Link href="/categories">Категории</Link>    
                </li>
                <li>
                    <Link href="/static/about-us">О нас</Link>
                </li>
                <li>
                    <Link href="/static/write-us">Обратная связь</Link>
                </li>
                <li>
                    <Link href="/cart">Корзина</Link>
                </li>
            </ul>
        </nav>

    )
}