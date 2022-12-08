import { useEffect, useState } from "react"


export default function CartItem({product, ind, updateTotal}: {product: any, ind: number, updateTotal: any}) {
    const [number, setNumber] = useState(1)

    useEffect(() => {
        updateTotal(countTotal(product.price, number))
    }, [])

    const changeNumberOfItems = (e: any) => {
        const n = parseInt(e.target.value)
        setNumber(n)
        updateTotal(parseFloat(countTotal(product.price, n)))
    }

    const countTotal = (price: number, number: number) => {
        return (price * number).toFixed(2)
    }

    return (
        <tr>
            <td>{ind}</td>
            <td>{product.name}</td>
            <td><input value={number} type="number" name="items" min="0" max="1000" onChange={changeNumberOfItems} />шт.</td>
            <td>${product.price}</td>
            <td>${countTotal(product.price, number)}</td>
        </tr>  
    )
}