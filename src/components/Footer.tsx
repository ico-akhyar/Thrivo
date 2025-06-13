import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/download.svg" 
                alt="Thrivo Logo" 
                className="w-10 h-10 filter brightness-0 invert"
              />
              <div>
                <span className="text-xl font-bold">Thrivo</span>
                <p className="text-xs text-orange-400 font-medium">Choices that shape legends</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Providing cost-efficient, protein-rich foods to fuel your strength and support your healthy lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-orange-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-400 text-sm">info@thrivo.pk</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Lahore, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Thrivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}