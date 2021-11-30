import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Durga",
      email: "durga@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Ram",
      email: "ram@gmail.com",
      password: bcrypt.hashSync("2468", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 100,
      countInStock: 10,
      brand: "Nike",
      rating: 0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: "2",
      name: "adidas Slim Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      countInStock: 20,
      brand: "Adidas",
      rating: 1.5,
      numReviews: 12,
      description: "high quality product",
    },
    {
      _id: "3",
      name: "Lacostge free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 115,
      countInStock: 0,
      brand: "Lacoste",
      rating: 2.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      _id: "4",
      name: "Nike Slim Pantt",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 150,
      countInStock: 15,
      brand: "Nike",
      rating: 3,
      numReviews: 9,
      description: "high quality product",
    },
    {
      _id: "5",
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 142,
      countInStock: 5,
      brand: "Puma",
      rating: 4.6,
      numReviews: 10,
      description: "high quality product",
    },
    {
      _id: "6",
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 139,
      countInStock: 12,
      brand: "Adidas",
      rating: 0.5,
      numReviews: 120,
      description: "high quality product",
    },
  ],
};

export default data;
