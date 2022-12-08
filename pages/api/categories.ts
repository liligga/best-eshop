import type { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '../../types/products'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Category[]>
) {
    res.status(200).json(
        [
            {
                id: 1,
                name: "Категория 1",
            },
            {
                id: 2,
                name: "Категория 2",
            },
            {
                id: 3,
                name: "Категория 3",
            }
        ]
    )
}
