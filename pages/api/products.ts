import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  id: number,
  name: string,
  price: number,
  desc: string,
  images: string[],
  category: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(
    [
      {
        id: 1,
        name: "Товар 1",
        price: 20.8,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, laboriosam!",
        images: ["1.jpg"],
        category: "Категория 1"
      },
      {
        id: 2,
        name: "Товар 2",
        price: 110.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, laboriosam!",
        images: ["2.jpg"],
        category: "Категория 1"
      },
      {
        id: 3,
        name: "Товар 3",
        price: 65.5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, laboriosam!",
        images: ["3.jpg"],
        category: "Категория 2"
      }
    ]
  )
}
