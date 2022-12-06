export type Category = {
    id: number,
    name: string
} 

export type Product = {
    id: number,
    name: string,
    price: number,
    desc: string,
    images: string[],
    category: number
}