import CategorySection from "@/components/modules/home/categories/CategorySection";
import FeaturedProductsSection from "@/components/modules/home/featured-products/FeaturedProductsSection";
import HeroSection from "@/components/modules/home/hero/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
    </div>
  );
}
