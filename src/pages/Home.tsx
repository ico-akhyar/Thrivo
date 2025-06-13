import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Premium Protein Mix',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.pexels.com/photos/6287662/pexels-photo-6287662.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-quality protein powder blend with essential amino acids',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Energy Protein Bars',
    price: 1800,
    originalPrice: 2200,
    image: 'https://images.pexels.com/photos/6928074/pexels-photo-6928074.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Delicious protein bars packed with nutrients and natural ingredients',
    rating: 4.6,
    reviews: 89
  }
];

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All our products are lab-tested and certified for purity and effectiveness'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery across Pakistan with secure packaging'
  },
  {
    icon: HeartHandshake,
    title: 'Customer Support',
    description: '24/7 customer support to help you with any questions or concerns'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-orange-25 to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Fuel Your</span>{' '}
                    <span className="block text-orange-600 xl:inline">Strength</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Discover cost-efficient, protein-rich foods that support your fitness goals and healthy lifestyle. Premium quality at affordable prices, delivered right to your door.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/products"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg"
                      >
                        Shop Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/about"
                        className="w-full flex items-center justify-center px-8 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Healthy protein foods"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our most popular protein-rich foods, trusted by thousands of customers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-orange-600">PKR {product.price.toLocaleString()}</span>
                      <span className="text-lg text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                    </div>
                    <Link
                      to={`/buy/${product.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Thrivo?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing the best protein-rich foods at affordable prices
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 text-orange-600">
                    <feature.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your fitness journey?</span>
            <span className="block text-orange-200">Get your protein foods today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors"
              >
                Shop Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}