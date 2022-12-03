import { useRouter } from 'next/router'
import Link from 'next/link'


export default function ProductDetails() {
    const router = useRouter()
    const { id } = router.query


    return (
        <div>
            <h2>Подробнее о товаре {id}</h2>
            <Link href="/products">Список всех товаров</Link>
        </div>
    )
}