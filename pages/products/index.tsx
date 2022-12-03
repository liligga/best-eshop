import Link from 'next/link'

export default function ProductList() {
    return (
        <div>
            <h3>Список наших товаров</h3>
            <div className="product-card"><Link href="/products/1">Товар 1</Link> </div>
            <div className="product-card"><Link href="/products/2">Товар 2</Link> </div>
            <div className="product-card"><Link href="/products/3">Товар 3</Link> </div>
            <div className="product-card"><Link href="/products/4">Товар 4</Link> </div>
        </div>

    )
}