import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

//this is the component code
export const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    const message = cart
      .map(
        (item) =>
          `Name: ${item.name}\n` +
          `Color: ${item.selectedColor}\n` +
          (item.selectedSize ? `Size: ${item.selectedSize}\n` : "") +
          `Quantity: ${item.quantity}\n` +
          `Price: ₹${item.discountedPrice * item.quantity}\n`
      )
      .join("---------------------\n");

    const total = getTotalPrice();
    const whatsappMessage = `Hello! I would like to order the following items:\n\n${message}\n\nTotal: ₹${total}`;
    const whatsappUrl = `https://wa.me/9236074373?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center animate-fade-in px-4">
        <SheetHeader>
          <SheetTitle className="text-lg sm:text-xl">Shopping Cart</SheetTitle>
        </SheetHeader>
        <p className="mt-8 text-sm sm:text-base text-muted-foreground text-center">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
    
      <SheetHeader>
        <SheetTitle className="text-lg sm:text-xl">
          Shopping Cart ({cart.length})
        </SheetTitle>
      </SheetHeader>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto py-3 px-2 sm:px-4 space-y-3">
        {cart.map((item, index) => (
          <div
            key={item.id}
            className="rounded-lg border p-3 sm:p-4 animate-fade-in hover:shadow-md transition-shadow"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex gap-3 sm:gap-4">
              {/* Product Image */}
              <img
                src={item.selectedImage}
                alt={item.name}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-md object-cover flex-shrink-0"
              />

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm sm:text-base truncate">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  ₹{item.discountedPrice}
                </p>

                {/* Color & Size */}
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span>Color:</span>
                    <span
                      className="inline-block h-4 w-4 rounded-full border border-gray-300"
                      style={{
                        backgroundColor: item.colors?.find(
                          (c) => c.name === item.selectedColor
                        )?.code,
                      }}
                      title={item.selectedColor}
                    ></span>
                    <span>{item.selectedColor}</span>
                  </div>
                  {item.selectedSize && (
                    <div>
                      Size:{" "}
                      <span className="font-medium">{item.selectedSize}</span>
                    </div>
                  )}
                </div>

                {/* Quantity Control */}
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 sm:h-8 sm:w-8 transition-smooth hover:scale-110 hover:border-primary"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-6 sm:w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7 sm:h-8 sm:w-8 transition-smooth hover:scale-110 hover:border-primary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="ml-auto h-7 w-7 sm:h-8 sm:w-8 text-destructive transition-smooth hover:scale-110"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Separator className="my-3" />

      <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-3">
        <div className="flex items-center justify-between text-base sm:text-lg font-semibold">
          <span>Total:</span>
          <span className="text-primary">₹{getTotalPrice()}</span>
        </div>

        <Button
          onClick={handleWhatsAppOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white transition-smooth hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base py-2 sm:py-3"
        >
          Place Order via WhatsApp
        </Button>
      </div>
    </div>
  );
};
