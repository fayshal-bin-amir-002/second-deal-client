import Container from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import image1 from "../../../../assets/hero-image-1.jpg";
import image2 from "../../../../assets/hero-image-2.jpg";
import image3 from "../../../../assets/hero-image-3.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full py-8 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Get the best</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Buy & Sell Used Items with Ease!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Discover great deals on pre-loved items or sell what you no
                longer need. SecondHand makes buying and selling used products
                simple, secure, and hassle-free. Start your deal today!
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button variant="outline">Explore All Products</Button>
              <Button className="gap-2">
                List My Product <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="bg-muted rounded-xl aspect-square relative overflow-hidden hover:-translate-y-2 duration-300">
              <Image
                src={image1}
                alt="hero-image"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-muted rounded-xl row-span-2 relative overflow-hidden hover:-translate-y-2 duration-300">
              <Image
                src={image2}
                alt="hero-image"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-muted rounded-xl aspect-square relative overflow-hidden hover:-translate-y-2 duration-300">
              <Image
                src={image3}
                alt="hero-image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
