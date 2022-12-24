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
        name: "T-shirt",
        price: 20.8,
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, laboriosam!",
        images: ["1.jpg"],
        category: "beige",
      },
      {
        id: 2,
        name: "T-shirt",
        price: 10.2,
        discount: 60,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora doloribus!",
        images: ["2.jpg"],
        category: "white"
      },
      {
        id: 3,
        name: "Hoodie",
        price: 65.5,
        discount: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["3.jpg"],
        category: "brown"
      },
      {
        id: 4,
        name: "T-shirt",
        price: 33,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["4.jpg"],
        category: "grey"
      },
      {
        id: 5,
        name: "Sweater",
        price: 65.5,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["5.jpg"],
        category: "grey"
      },
      {
        id: 6,
        name: "Overall",
        price: 100,
        discount: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["6.jpg"],
        category: "white"
      },

      {
        id: 7,
        name: "Sneakers",
        price: 80,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["7.jpg"],
        category: "blue"
      },
      {
        id: 8,
        name: "Sweater",
        price: 30,
        discount: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["8.jpg"],
        category: "grey"
      },
      {
        id: 9,
        name: "T-shirt",
        price: 10,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["9.jpg"],
        category: "black"
      },
      {
        id: 10,
        name: "Sneakers",
        price: 50,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["10.jpg"],
        category: "white"
      },
      {
        id: 11,
        name: "Blouse",
        price: 47,
        discount: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["11.jpg"],
        category: "black"
      },
      {
        id: 12,
        name: "Dress",
        price: 120,
        discount: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["12.jpg"],
        category: "red"
      },
      {
        id: 13,
        name: "T-shirt",
        price: 10,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["13.jpg"],
        category: "sea-color"
      },
      {
        id: 14,
        name: "Dress",
        price: 90,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["14.jpg"],
        category: "black"
      },
      {
        id: 15,
        name: "Cap",
        price: 6,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["15.jpg"],
        category: "orange"
      },
      {
        id: 16,
        name: "Shirt",
        price: 20,
        discount: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["16.jpg"],
        category: "green"
      },
      {
        id: 17,
        name: "Shirt",
        price: 20,
        discount: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["17.jpg"],
        category: "white"
      },
      {
        id: 18,
        name: "Jacket",
        price: 40,
        discount: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["18.jpg"],
        category: "blue"
      },
      {
        id: 19,
        name: "T-shirt",
        price: 10,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["19.jpg"],
        category: "white"
      },
      {
        id: 20,
        name: "Dress",
        price: 200,
        discount: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["20.jpg"],
        category: "red"
      },
      {
        id: 21,
        name: "Coat",
        price: 120,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["21.jpg"],
        category: "brown"
      },
      {
        id: 22,
        name: "Dress",
        price: 40,
        discount: 70,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["22.jpg"],
        category: "white"
      },
      {
        id: 23,
        name: "Outfit set",
        price: 200,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["23.jpg"],
        category: "brown",
      },
      {
        id: 24,
        name: "Suit",
        price: 50,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["24.jpg"],
        category: "grey"
      },
      {
        id: 25,
        name: "Sneakers",
        price: 70,
        discount: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["25.jpg"],
        category: "pink"
      },
      {
        id: 26,
        name: "Dress",
        price: 300,
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["26.jpg"],
        category: "black",
      },
      {
        id: 27,
        name: "T-shirt",
        price: 15,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["27.jpg"],
        category: "blue"
      },
      {
        id: 28,
        name: "Sneakers",
        price: 40,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["28.jpg"],
        category: "black"
      },
      {
        id: 29,
        name: "Sneakers",
        price: 100,
        discount: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["29.jpg"],
        category: "white"
      },
      {
        id: 30,
        name: "Dress",
        price: 120,
        discount: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["30.jpg"],
        category: "white"
      },
      {
        id: 31,
        name: "Blouse",
        price: 40,
        discount: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["31.jpg"],
        category: "beige"
      },
      {
        id: 32,
        name: "Pants",
        price: 30,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["32.jpg"],
        category: "pink"
      },
      {
        id: 33,
        name: "Dress",
        price: 60,
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["33.jpg"],
        category: "blue"
      },
      {
        id: 34,
        name: "Sweater",
        price: 70,
        discount: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["34.jpg"],
        category: "black"
      },
      {
        id: 35,
        name: "Jacket",
        price: 50,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["35.jpg"],
        category: "blue"
      },
      {
        id: 36,
        name: "Blouse",
        price: 80,
        discount: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["36.jpg"],
        category: "pink"
      },
      {
        id: 37,
        name: "T-shirt",
        price: 10,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["37.jpg"],
        category: "white"
      },
      {
        id: 38,
        name: "Pants",
        price: 30,
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["38.jpg"],
        category: "black"
      },
      {
        id: 39,
        name: "Suit",
        price: 170,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["39.jpg"],
        category: "black"
      },
      {
        id: 40,
        name: "Dress",
        price: 500,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["40.jpg"],
        category: "red"
      },
      {
        id: 41,
        name: "Jacket",
        price: 40,
        discount: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["41.jpg"],
        category: "yellow"
      },
      {
        id: 42,
        name: "Dress",
        price: 60,
        discount: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["42.jpg"],
        category: "black"
      },
      {
        id: 43,
        name: "Blouse",
        price: 20,
        discount: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["43.jpg"],
        category: "yellow"
      },
      {
        id: 44,
        name: "Blouse",
        price: 30,
        discount: 20,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["44.jpg"],
        category: "yellow"
      },
      {
        id: 45,
        name: "Jacket",
        price: 30,
        discount: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["45.jpg"],
        category: "black"
      },
      {
        id: 46,
        name: "T-shirt",
        price: 20,
        discount: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["46.jpg"],
        category: "red"
      },
      {
        id: 47,
        name: "Sweater",
        price: 50,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["47.jpg"],
        category: "sea color"
      },
      {
        id: 48,
        name: "Dress",
        price: 100,
        discount: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["48.jpg"],
        category: "blue"
      },
      {
        id: 49,
        name: "Jacket",
        price: 120,
        discount: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["49.jpg"],
        category: "black"
      },
      {
        id: 50,
        name: "Coat",
        price: 70,
        discount: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["50.jpg"],
        category: "yellow"
      },
      {
        id: 51,
        name: "Sweater",
        price: 80,
        discount: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas ex vitae!",
        images: ["51.jpg"],
        category: "blue",
      },
    ]
  )
}
