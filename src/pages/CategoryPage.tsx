import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {category?.name || "Products"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {categoryProducts.length} products available
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categoryProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
