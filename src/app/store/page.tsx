"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fugaz_One, Roboto } from "next/font/google";

const fugazOne = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Product categories data
const productCategories = [
  {
    title: "Shirts",
    description: "Comfortable and stylish fitness apparel",
    icon: "👕",
    features: ["Moisture-wicking fabric", "Multiple sizes available", "Suncrest branding", "Various styles"]
  },
  {
    title: "Hoodies",
    description: "Warm and cozy workout gear",
    icon: "🧥",
    features: ["Premium cotton blend", "Comfortable fit", "Suncrest logo", "Perfect for cool weather"]
  },
  {
    title: "Hats & Beanies",
    description: "Complete your fitness look",
    icon: "🧢",
    features: ["Adjustable sizing", "Suncrest embroidery", "Multiple colors", "Great for outdoor workouts"]
  },
  {
    title: "Backpacks",
    description: "Carry your gear in style",
    icon: "🎒",
    features: ["Durable construction", "Multiple compartments", "Suncrest branding", "Perfect for gym trips"]
  },
  {
    title: "Earrings",
    description: "Elegant fitness jewelry",
    icon: "💎",
    features: ["High-quality materials", "Elegant designs", "Suncrest themed", "Perfect gift option"]
  },
  {
    title: "Accessories",
    description: "Essential fitness accessories",
    icon: "☕",
    features: ["Mugs & cups", "Stadium seat", "Blanket with strap", "Quality materials"]
  }
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#e8073b] to-red-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gym/equipment.jpg"
            alt="Suncrest Fitness Center"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8073b]/80 to-red-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className={`${fugazOne.className} text-5xl md:text-7xl font-bold text-white mb-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ONLINE STORE
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Official Suncrest Fitness Center apparel and accessories
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6`}>
            OFFICIAL MERCHANDISE
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Show your Suncrest pride with our exclusive collection of fitness apparel and accessories. 
            Quality gear for your active lifestyle.
          </p>
        </motion.div>

        {/* Product Categories */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            AVAILABLE PRODUCTS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-2`}>
                      {category.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {category.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#e8073b] rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products Preview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
            <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center`}>
              FEATURED ITEMS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">👕</div>
                <h4 className={`${roboto.className} font-bold text-gray-900 dark:text-white mb-2`}>
                  Performance Shirts
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Moisture-wicking technology
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🧥</div>
                <h4 className={`${roboto.className} font-bold text-gray-900 dark:text-white mb-2`}>
                  Premium Hoodies
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comfortable cotton blend
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎒</div>
                <h4 className={`${roboto.className} font-bold text-gray-900 dark:text-white mb-2`}>
                  Gym Backpacks
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Durable construction
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">☕</div>
                <h4 className={`${roboto.className} font-bold text-gray-900 dark:text-white mb-2`}>
                  Accessories
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mugs, seats & more
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Store Information */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className={`${fugazOne.className} text-2xl font-bold text-gray-900 dark:text-white`}>
                SHOPPING INFORMATION
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Secure Online Shopping</strong> - Safe and encrypted transactions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Multiple Sizes Available</strong> - From XS to XXL for most items
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Quality Materials</strong> - Premium fabrics and construction
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Official Branding</strong> - Authentic Suncrest Fitness Center merchandise
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className={`${fugazOne.className} text-2xl font-bold text-gray-900 dark:text-white`}>
                SHIPPING & RETURNS
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Fast Shipping</strong> - Quick delivery to your door
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Easy Returns</strong> - Hassle-free return policy
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Customer Support</strong> - Help when you need it
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Secure Payment</strong> - Multiple payment options available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
            SHOP NOW
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our official online store to browse the complete collection of Suncrest Fitness Center merchandise.
          </p>
          <motion.a
            href="https://apparelnow.com/suncrest-fitness-center-apparel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#e8073b] bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VISIT ONLINE STORE
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
          <p className="text-sm text-white/70 mt-4">
            Opens in a new window
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
            QUESTIONS ABOUT MERCHANDISE?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Contact us for assistance with orders, sizing, or product information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.a>
            <motion.a
              href="/membership"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-[#e8073b] to-red-600 hover:from-red-700 hover:to-red-700 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN THE GYM
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 