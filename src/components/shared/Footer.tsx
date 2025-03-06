import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: foyshalbinamir@gmail.com</p>
            <p className="text-gray-400">Phone: +8801755288840</p>
          </div>

          {/* Terms and Conditions / Privacy Policy */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white">
                    Terms and Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">
                  <span className="text-gray-400 hover:text-white">
                    Browse Products
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SecondDeal. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
