export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  category: string;
  colors: {
    name: string;
    code: string;
    images: string[];
  }[];
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  selectedImage?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
