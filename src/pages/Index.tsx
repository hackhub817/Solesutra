import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/products";
import clothingImg from "@/assets/category-clothing.jpg";
import electronicsImg from "@/assets/category-electronics.jpg";
import accessoriesImg from "@/assets/category-accessories.jpg";
import footwearImg from "@/assets/category-footwear.jpg";
import { Footer } from "react-day-picker";
import FooterComp from "@/components/Footer";

const categoryImages: Record<string, string> = {
  clothing: clothingImg,
  electronics: electronicsImg,
  accessories: accessoriesImg,
  footwear: footwearImg,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our wide range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard
                category={{ ...category, image: categoryImages[category.id] }}
              />
            </div>
          ))}
        </div>
      </section>
      <FooterComp />
    </div>
  );
};

export default Index;
