'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-volkswagen">MOM'S</h3>
                  <span className="text-yellow-400 text-sm">Natural Foods</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Crafting additive-free, plant-based foods with artisanal care. 
                Small batch, oven-baked perfection since our beginning in Turkey.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium">
                  Organic
                </span>
                <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-xs font-medium">
                  Gluten-Free
                </span>
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs font-medium">
                  Vegan
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-2"></span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-2"></span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-2"></span>
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-2"></span>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-purple-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    <p>Güzeller OSB. Alp Tegin Sok. No:7</p>
                    <p>Gebze 41400 Kocaeli, Turkey</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <a 
                    href="tel:+902122812801" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    +90 212 281 28 01
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a 
                    href="mailto:umit@momsnaturalfoods.com.tr" 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm break-all"
                  >
                    umit@momsnaturalfoods.com.tr
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>Business Hours</span>
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-medium">8am - 8pm</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-medium">9am - 7pm</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white font-medium">10am - 6pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                <p>&copy; 2024 Mom's Natural Foods. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <Link href="/terms" className="hover:text-yellow-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;