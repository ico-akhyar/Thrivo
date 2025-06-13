import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Premium Protein Mix',
    price: 2500,
    originalPrice: 3000,
    image: 'https://images.pexels.com/photos/6287662/pexels-photo-6287662.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-quality protein powder blend with essential amino acids for muscle building and recovery',
    longDescription: 'Our Premium Protein Mix is formulated with a blend of whey and casein proteins to provide both fast and slow-releasing amino acids. Perfect for post-workout recovery and daily protein supplementation.',
    rating: 4.8,
    reviews: 124,
    category: 'powder',
    inStock: true,
    nutritionFacts: {
      protein: '25g per serving',
      calories: '120 per serving',
      carbs: '3g per serving',
      fat: '1g per serving'
    }
  },
  {
    id: 2,
    name: 'Energy Protein Bars',
    price: 1800,
    originalPrice: 2200,
    image: 'https://images.pexels.com/photos/6928074/pexels-photo-6928074.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Delicious protein bars packed with nutrients and natural ingredients for on-the-go nutrition',
    longDescription: 'These protein bars are made with premium ingredients including nuts, seeds, and natural sweeteners. Each bar provides sustained energy and high-quality protein for your active lifestyle.',
    rating: 4.6,
    reviews: 89,
    category: 'bars',
    inStock: true,
    nutritionFacts: {
      protein: '15g per bar',
      calories: '180 per bar',
      carbs: '12g per bar',
      fat: '6g per bar'
    }
  }
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'powder', name: 'Protein Powder' },
  { id: 'bars', name: 'Protein Bars' }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-lg text-gray-600">
            Premium protein-rich foods to fuel your fitness journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-orange-100"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Nutrition Info */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Nutrition Facts</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>Protein: {product.nutritionFacts.protein}</div>
                    <div>Calories: {product.nutritionFacts.calories}</div>
                    <div>Carbs: {product.nutritionFacts.carbs}</div>
                    <div>Fat: {product.nutritionFacts.fat}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">
                      PKR {product.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    to={`/buy/${product.id}`}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}