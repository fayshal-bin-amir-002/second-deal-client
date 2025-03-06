import BenefitsSection from "@/components/modules/home/benefit";
import CategorySection from "@/components/modules/home/categories/CategorySection";
import FeaturedProductsSection from "@/components/modules/home/featured-products/FeaturedProductsSection";
import GuideSection from "@/components/modules/home/guide";
import HeroSection from "@/components/modules/home/hero/HeroSection";
import TestimonialsSection from "@/components/modules/home/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <GuideSection />
      <BenefitsSection />
      <TestimonialsSection />
    </div>
  );
}
