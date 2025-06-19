"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fugaz_One, Roboto } from "next/font/google";
import MerchFAB from "@/components/ShopFAB";
import MobileNav from "@/components/MobileNav";
import MerchDrawer from "@/components/MerchDrawer";
import { useState } from "react";

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

export default function Home() {
  const [isMerchDrawerOpen, setIsMerchDrawerOpen] = useState(false);

  const handleMerchClick = () => {
    setIsMerchDrawerOpen(true);
  };

  const handleCloseMerchDrawer = () => {
    setIsMerchDrawerOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Merchandise Floating Action Button (Desktop) */}
      <MerchFAB onClick={handleMerchClick} />
      
      {/* Merchandise Drawer */}
      <MerchDrawer isOpen={isMerchDrawerOpen} onClose={handleCloseMerchDrawer} />
      
      {/* Background Image with Multiple Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Base Image */}
        <Image
          src="/images/gym/equipment.jpg"
          alt="Suncrest Fitness Center"
          fill
          className="object-cover opacity-25"
          priority
        />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 dark:to-white/50" />
        
        {/* Circular Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-1/2 z-20 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" />
        <div className="absolute top-0 left-0 right-0 bottom-1/2 z-20 bg-gradient-to-t from-transparent via-transparent to-white dark:to-black" />
        <div className="absolute left-0 top-0 bottom-0 right-1/2 z-20 bg-gradient-to-l from-transparent via-transparent to-white dark:to-black" />
        <div className="absolute right-0 top-0 bottom-0 left-1/2 z-20 bg-gradient-to-r from-transparent via-transparent to-white dark:to-black" />
        
        {/* Theme-specific Overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.main 
            className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="font-montserrat text-lg md:text-xl font-semibold tracking-wider text-[#e8073b] uppercase">
                Welcome to
              </span>
            </motion.div>

            <motion.h1 
              className={`${fugazOne.className} text-4xl sm:text-6xl md:text-9xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-none`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="whitespace-nowrap">SUNCREST</div>
              <div className={`${roboto.className} text-3xl sm:text-5xl md:text-8xl mt-2 flex gap-2 justify-center sm:justify-start`}>
                <span className="block sm:inline lg:pr-2">Fitness</span>
                <span className="block sm:inline">Center</span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="font-montserrat text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-12 max-w-2xl mx-auto sm:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Where your fitness journey becomes a lifestyle. Join our community of achievers and transform your potential into reality.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
              <motion.a
                href="/membership"
                className="group relative inline-flex items-center justify-center px-8 py-6 text-xl font-bold text-white bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-[0_0_0_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_0_4px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_0_4px_rgba(255,255,255,0.2)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-montserrat tracking-wide">JOIN US TODAY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="/tour"
                className="group relative inline-flex items-center justify-center px-8 py-6 text-xl font-bold text-gray-900 dark:text-white border-4 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-montserrat tracking-wide">EXPLORE OUR FACILITY</span>
                <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
