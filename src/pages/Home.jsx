function Homepage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Free shipping on orders over ₹999
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold tracking-wide">
          LUXORA
        </h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
        </nav>

        <div className="flex gap-5 text-lg">
          <span>⌕</span>
          <span>♡</span>
          <span>🛍️</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[600px] bg-gray-100 flex items-center justify-center px-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10">

          <div>
            <p className="text-sm tracking-[4px] text-gray-500 mb-4">
              NEW SEASON 2026
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Style That
              <br />
              Defines You.
            </h2>

            <p className="text-gray-600 max-w-md mb-8">
              Discover premium fashion, timeless essentials, and everyday
              pieces designed to make every moment look extraordinary.
            </p>

            <button className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition">
              SHOP COLLECTION
            </button>
          </div>

          <div className="h-[450px] md:h-[550px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
              alt="Fashion"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-20 max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              EXPLORE
            </p>

            <h2 className="text-4xl font-bold">
              Shop By Category
            </h2>
          </div>

          <button className="text-sm border-b border-black">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="group cursor-pointer">
            <div className="overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
                alt="Women"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Women
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
                alt="Men"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Men
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                alt="Shoes"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Footwear
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=600&q=80"
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Accessories
            </h3>
          </div>

        </div>
      </section>

      {/* Promotional Banner */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">

        <div className="relative h-[450px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80"
            alt="Collection"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white">

            <div>
              <p className="tracking-[4px] text-sm mb-4">
                LIMITED EDITION
              </p>

              <h2 className="text-5xl font-bold mb-6">
                The Essential Collection
              </h2>

              <button className="bg-white text-black px-8 py-4 font-medium">
                EXPLORE NOW
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-16 px-8">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold text-lg mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-500 text-sm">
              Free delivery on orders above ₹999.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-500 text-sm">
              Your payment information is safe with us.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-3">↩️</div>
            <h3 className="font-bold text-lg mb-2">
              Easy Returns
            </h3>
            <p className="text-gray-500 text-sm">
              Simple and hassle-free return process.
            </p>
          </div>

        </div>

      </section>

      {/* Newsletter */}
      <section className="py-20 px-8 text-center">

        <p className="text-sm tracking-[3px] text-gray-500 mb-3">
          STAY CONNECTED
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Get 10% Off Your First Order
        </h2>

        <p className="text-gray-500 mb-8">
          Sign up for exclusive offers and latest collections.
        </p>

        <div className="max-w-md mx-auto flex border border-gray-300">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-4 outline-none"
          />

          <button className="bg-black text-white px-6">
            JOIN
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 py-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              LUXORA
            </h2>

            <p className="text-gray-400 text-sm">
              Premium fashion and lifestyle essentials designed for modern living.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">SHOP</h3>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <span>New Arrivals</span>
              <span>Men</span>
              <span>Women</span>
              <span>Accessories</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">HELP</h3>

            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <span>Contact Us</span>
              <span>Shipping</span>
              <span>Returns</span>
              <span>FAQ</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">FOLLOW US</h3>

            <div className="flex gap-4 text-gray-400">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 LUXORA. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Homepage;