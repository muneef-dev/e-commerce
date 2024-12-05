import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex gap-8 items-center p-5 border-b">
        <div className="text-2xl">ModernShop</div>
        <div className="flex space-x-6 font-semibold">
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="/shop" className="hover:text-gray-600">Shop</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/contact" className="hover:text-gray-600">Contact</a>
        </div>
        <div className="relative text-xl">
          <button>
            <span className="absolute top-0 right-0 text-xs bg-blue-500 text-white rounded-full px-1.5">
              0
            </span>
            🛒
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative m-6 h-[60vh] bg-gray-400 flex items-center justify-center">
        <Image
          src="/placeholder-image.png" // Replace with your image path
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute text-center">
          <h1 className="text-6xl font-bold text-white">Summer Sale</h1>
          <p className="text-2xl text-white mt-2">
            Up to 50% off on selected items
          </p>
          <button className="mt-5 px-6 py-2 bg-black text-white font-bold rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
