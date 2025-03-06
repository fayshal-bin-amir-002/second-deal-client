import Container from "@/components/shared/Container";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { Card } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";

export default function BenefitsSection() {
  return (
    <SectionContainer>
      <Container>
        <SectionTitle title="Why Choose SecondDeal?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
          <Card className="shadow-lg rounded-lg p-6 bg-white border border-gray-200 hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="text-green-500 w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-900">
                Secure Transactions
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Your data and payments are protected with our secure platform and
              encryption protocols.
            </p>
          </Card>

          <Card className="shadow-lg rounded-lg p-6 bg-white border border-gray-200 hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="text-blue-500 w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-900">
                No Fees for Buyers/Sellers
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Enjoy zero transaction fees for both buyers and sellers. A truly
              hassle-free marketplace experience.
            </p>
          </Card>

          <Card className="shadow-lg rounded-lg p-6 bg-white border border-gray-200 hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <CheckCircleIcon className="text-purple-500 w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-900">
                Easy-to-Use Interface
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Our intuitive design makes it easy to navigate, post items, browse
              listings, and complete transactions.
            </p>
          </Card>
        </div>
      </Container>
    </SectionContainer>
  );
}
