import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    const message = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} - ₹${
            item.discountedPrice * item.quantity
          }`
      )
      .join("\n");

    const total = getTotalPrice();
    const whatsappMessage = `Hello! I would like to order the following items:\n\n${message}\n\nTotal: ₹${total}`;
    const whatsappUrl = `https://wa.me/9236074373?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center animate-fade-in">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <p className="mt-8 text-muted-foreground">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <SheetHeader>
        <SheetTitle>Shopping Cart ({cart.length})</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto py-4">
        {cart.map((item, index) => (
          <div
            key={item.id}
            className="mb-4 rounded-lg border p-4 animate-fade-in hover:shadow-md transition-shadow"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex gap-4">
              <img
                src={item.selectedImage}
                alt={item.name}
                className="h-20 w-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ₹{item.discountedPrice}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 transition-smooth hover:scale-110 hover:border-primary"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 transition-smooth hover:scale-110 hover:border-primary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="ml-auto h-6 w-6 text-destructive transition-smooth hover:scale-110"
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

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-primary">₹{getTotalPrice()}</span>
        </div>

        <Button
          onClick={handleWhatsAppOrder}
          className="w-full bg-success hover:bg-success/90 transition-smooth hover:shadow-lg hover:-translate-y-0.5"
        >
          Place Order via WhatsApp
        </Button>
      </div>
    </div>
  );
};
