import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Search Results
            </h1>
          </div>
          {query && (
            <p className="text-lg text-muted-foreground">
              Showing results for "
              <span className="font-semibold text-foreground">{query}</span>"
              {searchResults.length > 0 &&
                ` - ${searchResults.length} product${
                  searchResults.length === 1 ? "" : "s"
                } found`}
            </p>
          )}
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {searchResults.map((product, index) => (
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
          <div className="flex min-h-[400px] flex-col items-center justify-center animate-fade-in">
            <Search className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No products found
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-md">
              {query
                ? `We couldn't find any products matching "${query}". Try different keywords.`
                : "Enter a search term to find products"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;
