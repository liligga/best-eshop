import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export default function ProductDetailsPage() {
    const router = useRouter()
    const { id } = router.query

    const handleClick = (e) => {
        e.preventDefault()
        router. back()
    }

    return (

            <main>
                <h2>Подробнее о товаре {id}</h2>
                <a onClick={handleClick}>Назад</a>
            </main>

    )
}