export type Category = {
    id: number,
    name: string
} 

export type Product = {
    id: number,
    name: string,
    price: number,
    discount: number,
    desc: string,
    images: string[],
    category: string,
}

export type CartItemType = {
    amount: number,
    product: Product
}