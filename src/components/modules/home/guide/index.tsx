import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/shared/Container";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import guideImage from "@/assets/accordian_image.jpg";

const GuideSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionTitle title="How Second Deal Works" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-16 border p-4 rounded-lg shadow-md">
          <div>
            <Image
              src={guideImage}
              alt="guideline-image"
              width={600}
              height={500}
              className="object-cover"
            />
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  Post your items.
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Easily list your used items with descriptions, images, and
                  pricing to connect with potential buyers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Browse available products.
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Explore a wide range of listings, filter by category, price,
                  and condition to find what you need.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Securely communicate with sellers/buyers.
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Chat directly with sellers or buyers to ask questions and
                  negotiate details securely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Complete the transaction.
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  Finalize your purchase or sale with confidence through a
                  seamless and secure transaction process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default GuideSection;
