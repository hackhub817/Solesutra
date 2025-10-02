import React, { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CartItem, Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  // States for selected color and size
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.length > 0 ? product.sizes[0] : ""
  );

  // Image slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Zoom modal state
  const [isZoomed, setIsZoomed] = useState(false);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
      selectedColor: selectedColor.name,
      selectedSize: selectedSize,
      selectedImage: selectedColor.images[currentIndex], // Selected image
    };

    addToCart(cartItem);

    toast.success("Added to cart!", {
      description: `${product.name} (${selectedColor.name}${
        selectedSize ? `, ${selectedSize}` : ""
      })`,
    });
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.discountedPrice) /
      product.originalPrice) *
      100
  );

  // Slider navigation
  const goPrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selectedColor.images.length) % selectedColor.images.length
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedColor.images.length);
  };

  return (
    <>
      {/* Product Card */}
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="p-0">
          {/* Image Slider */}
          <div className="relative aspect-square overflow-hidden bg-secondary">
            {selectedColor.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${selectedColor.name} ${idx + 1}`}
                className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 cursor-pointer ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => setIsZoomed(true)} // Open zoom modal
              />
            ))}

            {/* Discount Badge */}
            {discountPercentage > 0 && (
              <div className="absolute right-2 top-2 rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground shadow-lg">
                {discountPercentage}% OFF
              </div>
            )}

            {/* Arrows */}
            {selectedColor.images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Slider Dots */}
            {selectedColor.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedColor.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h3 className="mb-2 font-semibold text-foreground line-clamp-1">
              {product.name}
            </h3>
            <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-primary">
                ₹{product.discountedPrice}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            </div>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-3 flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color);
                      setCurrentIndex(0); // Reset slider
                    }}
                    className={`h-6 w-6 rounded-full border-2 ${
                      selectedColor.name === color.name
                        ? "border-primary"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2 py-1 border rounded-md text-sm ${
                      selectedSize === size
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-foreground border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full transition-smooth hover:shadow-md group/btn"
          >
            <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedColor.images[currentIndex]}
            alt="Zoomed"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </>
  );
};
