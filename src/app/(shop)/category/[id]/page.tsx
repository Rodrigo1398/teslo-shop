import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombre",
    women: "para mujer",
    kid: "para niños",
    unisex: "para todos",
  };

  if(!labels[id]){
    notFound();
  }

  return (
    <>
      <Title
        title={`Articulos ${labels[id]}`}
        subtitle={`Todos los productos ${labels[id]}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
