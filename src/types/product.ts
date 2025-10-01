export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  category: string;
  colors: {
    name: string; // Color name
    code: string; // Hex code for swatch display
    images: string[]; // Array of images for that color
  }[];
  sizes: string[]; // Sizes available for this product
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string; // name of the color
  selectedSize?: string; // size
  selectedImage?: string; // store first image of selected color
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
