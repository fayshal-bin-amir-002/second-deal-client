import Container from "@/components/shared/Container";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { StarIcon } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <SectionContainer>
      <Container>
        <SectionTitle title="What Our Users Say" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User 1"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">John Doe</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-gray-300 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &quot;SecondDeal made it so easy to buy used electronics. The
              platform is straightforward, and I was able to communicate
              directly with the seller. Highly recommended!&quot;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User 2"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Jane Smith</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &quot;I sold my old furniture on SecondDeal and had a great
              experience. The platform was easy to use, and I had several buyers
              interested within days!&quot;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User 3"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Michael Lee</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &quot;SecondDeal was my go-to place for selling and buying
              second-hand items. It&apos;s easy to use, and I had no problems
              with any transactions. I highly recommend it.&quot;
            </p>
          </div>
          {/* Testimonial 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User 3"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Michael Lee</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                  <StarIcon className="text-yellow-500 w-5 h-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              &quot;SecondDeal was my go-to place for selling and buying
              second-hand items. It&apos;s easy to use, and I had no problems
              with any transactions. I highly recommend it.&quot;
            </p>
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
}
