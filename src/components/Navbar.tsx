import { Search, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartSidebar } from "./CartSidebar";
import { useState, FormEvent } from "react";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl text-[#D4AF37] sm:text-2xl font-bold text-primary whitespace-nowrap"
        >
          <div className="flex items-center gap-3">
            <img
              src={logo} // 👉 h
              alt="SoleSutra Logo"
              className="lg:h-8 lg:w-8 h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />

            <span className="lg:text-[1.7rem] text-xl sm:text-2xl font-bold text-[#D4AF37]">
              SoleSutra
            </span>
          </div>
        </Link>

        {/* SEARCH BAR */}
        <div className="flex flex-1 justify-center px-4 sm:px-8">
          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-[200px] sm:max-w-sm md:max-w-md"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-9 pr-4 text-sm sm:text-base transition-shadow focus:shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* CART BUTTON */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover-scale"
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-accent text-[10px] sm:text-xs font-bold text-accent-foreground animate-scale-in">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="animate-slide-in-right w-full sm:w-96">
              <CartSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
