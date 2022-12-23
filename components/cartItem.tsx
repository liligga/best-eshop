import { useEffect, useState } from "react"
import { Product, CartItemType } from '@/types/products'


export default function CartItem({cartItem, ind, updateTotal}: {cartItem: CartItemType, ind: number, updateTotal: any}) {
    const [number, setNumber] = useState(1)

    useEffect(() => {
        updateTotal(countTotal(cartItem.product.price, number))
    }, [])

    const changeNumberOfItems = (e: any) => {
        const n = parseInt(e.target.value)
        setNumber(n)
        updateTotal(parseFloat(countTotal(cartItem.product.price, n)))
    }

    const countTotal = (price: number, number: number) => {
        return (price * number).toFixed(2)
    }

    return (
        <>
            <div className="row_left">
                <div>{ind}</div>
                <div className="product_name">{cartItem.product.name}</div>
                <div className="pro_bot">
                    <div className="count">
                        <input value={number} type="number" name="items" min="0" max="1000" onChange={changeNumberOfItems} />шт.
                    </div>
                    <div className="price">${cartItem.product.price}</div>
                    <div className="status">на складе</div>
                </div>
            </div>
            <div className="row_right">
                <div className="total_price">${countTotal(cartItem.product.price, number)}</div>
                <div className="delete"></div>
            </div>
        </> 
    )
}