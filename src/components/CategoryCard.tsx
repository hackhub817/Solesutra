import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types/product";

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
              {category.name}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
