import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-36">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
          <p className="mb-4">
            Subscribe to our newsletter for exclusive offers and the latest
            fashion trends.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l px-4 py-2 w-72"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-4 gap-4 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4">
          {/* Shop Section */}
          <div>
            <h3 className="font-semibold mb-2">Shop</h3>
            <ul>
              <li>
                <Link href="/all-products">All Products</Link>
              </li>
              <li>
                <Link href="/new-arrivals">New Arrivals</Link>
              </li>
              <li>
                <Link href="/sale">Sale</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul>
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul className="flex justify-center sm:justify-start gap-4">
              <li>
                <Link href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2024 ModernShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
