import { useEffect, useState } from "react"
import { Product, CartItemType } from '@/types/products'
import { removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { countSubTotal } from "utils/products"


export default function CartItem({cartItem, updateTotal}: {cartItem: CartItemType, updateTotal: any}) {
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch();


    return (
        <>
            <div className="row_left">
                <div className="product_name">{cartItem.product.name}</div>
                <div className="count number-input">
                    <button onClick={updateTotal(cartItem.product.id, -1)}> - </button>
                    <input
                        value={cartItem.amount} 
                        type="number" 
                        name="items" 
                        min={1} 
                        max={1000}
                    />
                    <button onClick={updateTotal(cartItem.product.id, 1)}> + </button>    
                    
                </div>
                <span>шт.</span>
                <div className="price">${cartItem.product.price * (100 - cartItem.product.discount)/100}</div>
                <div className="status">на складе</div>

            </div>
            <div className="row_right">
                <div className="total_price">${countSubTotal(
                    cartItem.product.price*(100 - cartItem.product.discount)/100, 
                    cartItem.amount)
                    }</div>
                <div className="delete" onClick={(e) => dispatch(removeFromCart(cartItem.product.id))}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>
        </> 
    )
}