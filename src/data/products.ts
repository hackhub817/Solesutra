import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  { id: "clothing", name: "Clothing", image: "/placeholder.svg" },
  { id: "electronics", name: "Electronics", image: "/placeholder.svg" },
  { id: "accessories", name: "Accessories", image: "/placeholder.svg" },
  { id: "footwear", name: "Footwear", image: "/placeholder.svg" },
];
export const products: Product[] = [
  // Clothing
  {
    id: "1",
    name: "Cotton T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear",
    originalPrice: 599,
    discountedPrice: 399,
    category: "clothing",
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        images: [
          "/tshirt-white1.svg",
          "/tshirt-white2.svg",
          "/tshirt-white3.svg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Denim Jeans",
    description: "Classic fit denim jeans with modern styling",
    originalPrice: 1999,
    discountedPrice: 1499,
    category: "clothing",
    colors: [
      {
        name: "Blue",
        code: "#1E3A8A",
        images: ["/jeans-blue1.svg", "/jeans-blue2.svg"],
      },
    ],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "3",
    name: "Casual Shirt",
    description: "Lightweight casual shirt perfect for any occasion",
    originalPrice: 899,
    discountedPrice: 649,
    category: "clothing",
    colors: [
      {
        name: "Light Blue",
        code: "#3B82F6",
        images: ["/shirt-lightblue1.svg", "/shirt-lightblue2.svg"],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Winter Jacket",
    description: "Warm and stylish winter jacket",
    originalPrice: 3499,
    discountedPrice: 2799,
    category: "clothing",
    colors: [
      {
        name: "Gray",
        code: "#6B7280",
        images: ["/jacket-gray1.svg", "/jacket-gray2.svg", "/jacket-gray3.svg"],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },

  // Electronics (no sizes)
  {
    id: "5",
    name: "Wireless Headphones",
    description: "Premium sound quality with noise cancellation",
    originalPrice: 2999,
    discountedPrice: 2199,
    category: "electronics",
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/headphones-black1.svg", "/headphones-black2.svg"],
      },
    ],
    sizes: [],
  },
  {
    id: "6",
    name: "Smart Watch",
    description: "Track your fitness and stay connected",
    originalPrice: 4999,
    discountedPrice: 3999,
    category: "electronics",
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/watch-black1.svg", "/watch-black2.svg"],
      },
    ],
    sizes: [],
  },
  {
    id: "7",
    name: "Bluetooth Speaker",
    description: "Portable speaker with powerful bass",
    originalPrice: 1799,
    discountedPrice: 1299,
    category: "electronics",
    colors: [
      {
        name: "Red",
        code: "#DC2626",
        images: ["/speaker-red1.svg", "/speaker-red2.svg"],
      },
    ],
    sizes: [],
  },
  {
    id: "8",
    name: "USB Power Bank",
    description: "10000mAh fast charging power bank",
    originalPrice: 999,
    discountedPrice: 749,
    category: "electronics",
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        images: ["/powerbank-white1.svg", "/powerbank-white2.svg"],
      },
    ],
    sizes: [],
  },

  // Accessories (no sizes)
  {
    id: "9",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple compartments",
    originalPrice: 899,
    discountedPrice: 649,
    category: "accessories",
    colors: [
      {
        name: "Brown",
        code: "#8B4513",
        images: ["/wallet-brown1.svg", "/wallet-brown2.svg"],
      },
    ],
    sizes: [],
  },
  {
    id: "10",
    name: "Sunglasses",
    description: "UV protection with stylish frame",
    originalPrice: 1299,
    discountedPrice: 899,
    category: "accessories",
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/sunglasses-black1.svg", "/sunglasses-black2.svg"],
      },
    ],
    sizes: [],
  },
  {
    id: "11",
    name: "Designer Watch",
    description: "Elegant watch for formal occasions",
    originalPrice: 2499,
    discountedPrice: 1899,
    category: "accessories",
    colors: [
      {
        name: "Silver",
        code: "#C0C0C0",
        images: ["/watch-silver1.svg", "/watch-silver2.svg"],
      },
    ],
    sizes: [],
  },
  {
    id: "12",
    name: "Leather Belt",
    description: "Premium leather belt with classic buckle",
    originalPrice: 699,
    discountedPrice: 499,
    category: "accessories",
    colors: [
      {
        name: "Brown",
        code: "#8B4513",
        images: ["/belt-brown1.svg", "/belt-brown2.svg"],
      },
    ],
    sizes: [],
  },

  // Footwear (sizes: 6, 7, 8, 9)
  {
    id: "13",
    name: "Running Shoes",
    description: "Lightweight running shoes with cushioned sole",
    originalPrice: 2499,
    discountedPrice: 1799,
    category: "footwear",
    colors: [
      {
        name: "Blue",
        code: "#1E3A8A",
        images: ["/runningshoes-blue1.svg", "/runningshoes-blue2.svg"],
      },
    ],
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: "14",
    name: "Casual Sneakers",
    description: "Comfortable sneakers for daily wear",
    originalPrice: 1899,
    discountedPrice: 1399,
    category: "footwear",
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        images: ["/sneakers-white1.svg", "/sneakers-white2.svg"],
      },
    ],
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: "15",
    name: "Formal Shoes",
    description: "Elegant formal shoes for office wear",
    originalPrice: 2999,
    discountedPrice: 2399,
    category: "footwear",
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: [
          "/formal-black1.svg",
          "/formal-black2.svg",
          "/formal-black3.svg",
        ],
      },
      {
        name: "Brown",
        code: "#8B4513",
        images: [
          "/formal-brown1.svg",
          "/formal-brown2.svg",
          "/formal-brown3.svg",
        ],
      },
    ],
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: "16",
    name: "Sports Sandals",
    description: "Durable sandals for outdoor activities",
    originalPrice: 1299,
    discountedPrice: 899,
    category: "footwear",
    colors: [
      {
        name: "Gray",
        code: "#6B7280",
        images: ["/sandals-gray1.svg", "/sandals-gray2.svg"],
      },
    ],
    sizes: ["6", "7", "8", "9"],
  },
];
