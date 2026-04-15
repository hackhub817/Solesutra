# SoleSutra 👟

> Premium e-commerce storefront for footwear and fashion — built with React, TypeScript, shadcn/ui, and TailwindCSS. Features an image carousel, color/size selection, cart persistence, and product search.

## 🚀 Features

- **Product Catalog** — 16+ products across 4 categories (Clothing, Electronics, Accessories, Footwear)
- **Image Carousel** — Multi-image slider with prev/next navigation and dot indicators per product
- **Zoom Modal** — Click any product image to open a full-screen zoomed view
- **Color & Size Selection** — Pick colors (with visual swatches) and sizes before adding to cart
- **Shopping Cart** — Slide-out cart sidebar with quantity controls, price totals, and item management
- **Cart Persistence** — Cart data saved to `localStorage` — survives page refresh
- **Product Search** — Real-time search across all products with dedicated search results page
- **Category Browsing** — Browse products filtered by category with animated category cards
- **Discount Badges** — Auto-calculated percentage discount badges on each product
- **Responsive Design** — Mobile-first layout with sticky navbar and adaptive grid
- **Toast Notifications** — Sonner-powered feedback when items are added to cart

## 🏷️ Featured Brands

| Brand | Product | Category |
|-------|---------|----------|
| Adidas | OG Samba (White) | Footwear |
| Nike | Air Jordan 1 High Praline | Footwear |
| Nike | SB Dunk Low Fog (Black) | Footwear |
| Onitsuka Tiger | Mexico 66 Unisex Beige | Footwear |
| PUMA | Speed Cat (Brown) | Footwear |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite (SWC plugin) |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Styling** | TailwindCSS + tailwindcss-animate |
| **State Management** | React Context API (CartContext) |
| **Server State** | TanStack React Query |
| **Routing** | React Router DOM v6 |
| **Form Handling** | React Hook Form + Zod validation |
| **Icons** | Lucide React |
| **Notifications** | Sonner toast library |

## 📐 Architecture

```
src/
├── App.tsx                    # Root — routes, providers (QueryClient, Cart, Tooltip)
├── main.tsx                   # Entry point
├── types/
│   └── product.ts             # TypeScript interfaces (Product, CartItem, Category)
├── data/
│   └── products.ts            # Product catalog + category definitions
├── context/
│   └── CartContext.tsx         # Cart state (add, remove, update, clear, totals)
├── pages/
│   ├── Index.tsx              # Homepage — Hero + Category grid
│   ├── CategoryPage.tsx       # Filtered products by category
│   ├── SearchPage.tsx         # Search results page
│   └── NotFound.tsx           # 404 page
├── components/
│   ├── Navbar.tsx             # Sticky nav with search + cart icon + badge
│   ├── Hero.tsx               # Hero banner section
│   ├── CategoryCard.tsx       # Category card with image + link
│   ├── ProductCard.tsx        # Product card (carousel, colors, sizes, zoom, add-to-cart)
│   ├── CartSidebar.tsx        # Slide-out cart panel (Sheet component)
│   ├── Footer.tsx             # Footer component
│   └── ui/                    # shadcn/ui primitives (Button, Card, Sheet, Input, etc.)
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
└── assets/                    # Product images (Adidas, Nike, Puma, Onitsuka)
```

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/hackhub817/Solesutra.git
cd Solesutra

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 💡 Technical Highlights

### Cart System (Context API + localStorage)
```typescript
// Cart persists across sessions using localStorage
const [cart, setCart] = useState<CartItem[]>(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

// Auto-sync cart to localStorage on every change
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

### Product Card Features
- **Image Carousel** — Navigate through multiple product images with arrows & dots
- **Zoom Modal** — Full-screen image preview on click
- **Color Swatches** — Visual color selection that updates the image carousel
- **Size Picker** — Interactive size buttons with active state
- **Discount Badge** — Auto-calculated `% OFF` from original vs discounted price
- **Add to Cart** — Adds selected color, size, and current image to cart

### Type-Safe Product System
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  category: string;
  colors: { name: string; code: string; images: string[] }[];
  sizes: string[];
}
```

## 📱 Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Index` | Homepage with Hero + Category grid |
| `/category/:categoryId` | `CategoryPage` | Products filtered by category |
| `/search?q=query` | `SearchPage` | Search results with query matching |
| `*` | `NotFound` | 404 page |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built by [Piyush Gupta](https://github.com/hackhub817)** | [Portfolio](https://piyush-gupta-profile.vercel.app/) | [LinkedIn](https://linkedin.com/in/piyush-gupta-06b020213)
