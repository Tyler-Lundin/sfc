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

// Membership tiers data
const membershipTiers = [
  {
    title: "Single Membership",
    price: "$45",
    description: "Individual membership for one person",
    popular: false,
    features: ["Full facility access", "24/7 access", "No annual contract", "No initiation fee"]
  },
  {
    title: "Couple Membership",
    price: "$75",
    description: "Perfect for couples living at the same address",
    popular: true,
    features: ["Full facility access for both", "24/7 access", "No annual contract", "No initiation fee"]
  },
  {
    title: "Military Single",
    price: "$35",
    description: "Special rate for military personnel",
    popular: false,
    features: ["Full facility access", "24/7 access", "Military discount", "No annual contract"]
  },
  {
    title: "Military Couple",
    price: "$65",
    description: "Special rate for military couples",
    popular: false,
    features: ["Full facility access for both", "24/7 access", "Military discount", "No annual contract"]
  }
];

const additionalOptions = [
  {
    title: "Minor Dependent",
    price: "$25",
    description: "Ages 12-17 added to existing membership",
    note: "Must live at same address"
  },
  {
    title: "Adult Addition",
    price: "$35",
    description: "Adult added to existing membership",
    note: "Must live at same address"
  },
  {
    title: "Student Membership",
    price: "$35",
    description: "Special rate for students",
    note: "Valid student ID required"
  },
  {
    title: "60+ Single",
    price: "$35",
    description: "Special rate for seniors 60 and older",
    note: "Age verification required"
  },
  {
    title: "60+ Couple",
    price: "$60",
    description: "Special rate for senior couples",
    note: "Both must be 60+ and live at same address"
  }
];

const guestOptions = [
  {
    title: "24 Hour Guest Pass",
    price: "$10",
    description: "Single day access for guests"
  },
  {
    title: "Weekly Guest Pass",
    price: "$25",
    description: "7-day access for guests"
  },
  {
    title: "Class Drop-in Fee",
    price: "$7",
    description: "Single class participation"
  }
];

export default function MembershipPage() {
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
              MEMBERSHIPS
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Affordable, flexible memberships for everyone 12 and up
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
            MEMBERSHIP OPTIONS
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer memberships for everyone 12 and up! Our month-to-month memberships are convenient and affordable with no annual contracts and no initiation fee!
          </p>
        </motion.div>

        {/* Main Membership Tiers */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            PRIMARY MEMBERSHIPS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                className={`relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-[#e8073b] to-red-600 text-white border-2 border-[#e8073b]' 
                    : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h4 className={`${roboto.className} text-xl font-bold mb-2 ${
                    tier.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {tier.title}
                  </h4>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${
                      tier.popular ? 'text-white' : 'text-[#e8073b]'
                    }`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm ${
                      tier.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      /month + tax
                    </span>
                  </div>
                  <p className={`text-sm mb-4 ${
                    tier.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-2 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center gap-2 text-sm ${
                        tier.popular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Options */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            ADDITIONAL OPTIONS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <h4 className={`${roboto.className} text-lg font-bold text-gray-900 dark:text-white mb-2`}>
                    {option.title}
                  </h4>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-[#e8073b]">
                      {option.price}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      /month + tax
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {option.description}
                  </p>
                  {option.note && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                      * {option.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guest Options */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center`}>
            GUEST OPTIONS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {guestOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <h4 className={`${roboto.className} text-lg font-bold text-gray-900 dark:text-white mb-2`}>
                    {option.title}
                  </h4>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-[#e8073b]">
                      {option.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Corporate Rates */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 text-center">
            <h3 className={`${fugazOne.className} text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
              CORPORATE RATES
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Special rates available for <strong>Nine Mile Falls School District</strong> and <strong>Lake Spokane Community Health</strong> employees and their families.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Contact us for more information about corporate membership options.
            </p>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className={`${fugazOne.className} text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center`}>
            IMPORTANT INFORMATION
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>1st and last month</strong> membership dues collected at time of signing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>All family memberships</strong> = immediate family living at same residence.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Membership options and pricing</strong> are subject to change.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#e8073b] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Restrictions may apply.</strong> Contact us for specific details.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
            READY TO JOIN?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your fitness journey today with our flexible, affordable membership options. No contracts, no initiation fees!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#e8073b] bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.a>
            <motion.a
              href="/tour"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white border-2 border-white hover:bg-white hover:text-[#e8073b] transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TAKE A TOUR
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 