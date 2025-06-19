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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-[#e8073b] to-red-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/gym/equipment_2.jpg"
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
              ABOUT US
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dedicated to helping our community live life to the fullest
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8`}>
            OUR MISSION
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Suncrest Fitness Center and Phase 1 Physical Therapy are working together to help the community of Lake Spokane and Suncrest live life to the fullest.
            </p>
          </div>
        </motion.div>

        {/* Facility Overview */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className={`${fugazOne.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white`}>
              STATE-OF-THE-ART FACILITY
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over <span className="font-bold text-[#e8073b]">9,780 sq. ft.</span> of rehabilitation and exercise space and state-of-the-art cardio respiratory and strength training equipment, we have the capacity to help you achieve all of your health and fitness goals.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-red-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-[#e8073b]">9,780</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Square Feet</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-[#e8073b]">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Access</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/gym/machines.jpg"
              alt="State-of-the-art equipment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/images/gym/cardio.jpg"
              alt="Professional team and equipment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className={`${fugazOne.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white`}>
              EXPERT TEAM
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team of physical therapists, personal trainers and assistants are committed to help our patients and club members achieve their desired goals and return to living stronger, healthier lives.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#e8073b] rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Licensed Physical Therapists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#e8073b] rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Certified Personal Trainers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#e8073b] rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Dedicated Support Staff</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="text-center py-16 bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-6xl text-[#e8073b] mb-6">&quot;</div>
            <blockquote className="text-2xl md:text-3xl text-gray-900 dark:text-white font-medium italic leading-relaxed mb-6">
              Lack of activity destroys the good condition of every human being, while movement and methodical physical exercise save it and preserve it
            </blockquote>
            <cite className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
              — Plato
            </cite>
          </div>
        </motion.div>

        {/* Services Overview */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-4`}>
              Physical Therapy
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Professional rehabilitation services to help you recover and regain strength.
            </p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-4`}>
              Fitness Training
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Personalized training programs to help you achieve your fitness goals.
            </p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className={`${roboto.className} text-xl font-bold text-gray-900 dark:text-white mb-4`}>
              Community Focus
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Dedicated to serving the Lake Spokane and Suncrest communities.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-16 bg-gradient-to-r from-[#e8073b] to-red-600 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${fugazOne.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
            JOIN OUR COMMUNITY
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to a stronger, healthier life with our expert team and world-class facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#e8073b] bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED
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