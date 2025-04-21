import Hero from "./_components/sections/Hero";
import Sale from "./_components/sections/Sale";
import CategoryFilter from "./_components/sections/CategoryFilter";
import ProductsGrid from "./_components/layout/ProductsGrid";
import SideBar from "./_components/layout/SideBar";

import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryFilter />
      <div className="flex container mx-auto gap-8 py-5">
        <SideBar />
        <ProductsGrid products={products} />
      </div>
      <Sale />
    </>
  );
}
