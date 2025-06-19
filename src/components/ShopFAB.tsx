"use client";
import { motion } from "framer-motion";
import { GiGymBag } from "react-icons/gi";

interface MerchFABProps {
  onClick?: () => void;
}

export default function MerchFAB({ onClick }: MerchFABProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-[80] w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <GiGymBag
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
        strokeWidth={2.5}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.button>
  );
} 