import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


export default function ProductDetailsPage() {
    const router = useRouter()
    const { id } = router.query


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Подробнее о товаре {id}</h2>
                <Link href="/products">Список всех товаров</Link>
            </main>
        </div>
    )
}