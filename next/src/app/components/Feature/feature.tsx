import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    { id: 1, name: "Classic White Tee", price: 29.99, image: "/images/white-tee.png" },
    { id: 2, name: "Denim Jeans", price: 79.99, image: "/images/denim-jeans.png" },
    { id: 3, name: "Leather Jacket", price: 199.99, image: "/images/leather-jacket.png" },
    { id: 4, name: "Summer Dress", price: 59.99, image: "/images/summer-dress.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
              <span>Image Placeholder</span>
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 mb-4">${product.price.toFixed(2)}</p>
            <Link   key={product.id} href={`/product/${product.id}`}>
          {product.name}
              <p className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800">
                Shop Now
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;