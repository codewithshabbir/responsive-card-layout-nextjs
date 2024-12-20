import Image from "next/image";
import Products from "./components/Products";
import { nikeProducts } from "./components/data";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 justify-items-center my-20">
      {nikeProducts.map((product) => (
        <Products
          key={product.id}
          id={product.id}
          tags={product.tags}
          title={product.title}
          description={product.description}
          color={product.color}
          price={product.price}
          imagesUrls={product.imagesUrls}
        />
      ))}
    </div>
  );
}
