import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 py-36">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section - Placeholder for Image */}
          <div className="w-full lg:w-1/2 bg-gray-300 h-64 lg:h-auto flex justify-center items-center">
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          </div>
          {/* Right Section - Text Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ModernShop was founded with a simple mission: to provide
              high-quality, stylish clothing and accessories at affordable
              prices. We believe that everyone deserves to look and feel their
              best, without breaking the bank.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team of passionate fashion enthusiasts works tirelessly to
              curate a collection that combines the latest trends with timeless
              classics. We source our products from ethical manufacturers who
              share our commitment to quality and sustainability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At ModernShop, we're not just selling clothes – we're helping our
              customers express their unique style and confidence. Join us on
              this fashion journey, and let's make the world a more stylish
              place, one outfit at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
