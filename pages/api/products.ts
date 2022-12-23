import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/types/products'


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
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, laboriosam!",
        images: ["1.jpg"],
        category: 1
      },
      {
        id: 2,
        name: "Товар 2",
        price: 110.2,
        discount: 10,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora doloribus!",
        images: ["2.jpg"],
        category: 2
      },
      {
        id: 3,
        name: "Товар 3",
        price: 65.5,
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["3.jpg"],
        category: 3
      }
    ]
  )
}
